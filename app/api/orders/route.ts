import { NextResponse } from "next/server";
import { calculateCartPricing, products } from "../../data/products";

type CustomerInput = {
  name?: unknown;
  phone?: unknown;
  city?: unknown;
  province?: unknown;
  address?: unknown;
  reference?: unknown;
  website?: unknown;
};

type OrderItemInput = {
  slug?: unknown;
  quantity?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maxLength) : "";
}

function orderError(message: string, status: number, code: string) {
  return NextResponse.json({ error: message, code }, { status });
}

export async function POST(request: Request) {
  let payload: { customer?: CustomerInput; items?: OrderItemInput[] };

  try {
    payload = await request.json();
  } catch {
    return orderError("No pudimos leer los datos del pedido.", 400, "INVALID_JSON");
  }

  const customer = payload.customer ?? {};
  if (cleanText(customer.website, 100)) {
    return NextResponse.json({ orderId: `WILD-${Date.now().toString().slice(-8)}` });
  }

  const name = cleanText(customer.name, 100);
  const phone = cleanText(customer.phone, 10);
  const city = cleanText(customer.city, 80);
  const province = cleanText(customer.province, 80);
  const address = cleanText(customer.address, 240);
  const reference = cleanText(customer.reference, 240);

  if (!/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ' -]{3,}$/.test(name)) {
    return orderError("Revisa el nombre y apellido.", 400, "INVALID_NAME");
  }
  if (!/^09\d{8}$/.test(phone)) {
    return orderError("El WhatsApp debe tener 10 números y comenzar con 09.", 400, "INVALID_PHONE");
  }
  if (city.length < 2 || province.length < 2 || address.length < 8) {
    return orderError("Completa la ciudad, provincia y dirección de entrega.", 400, "INVALID_ADDRESS");
  }
  if (!Array.isArray(payload.items) || payload.items.length < 1) {
    return orderError("Tu selección de perfumes está vacía.", 400, "EMPTY_ORDER");
  }

  const normalizedItems: Array<{ slug: string; name: string; quantity: number }> = [];
  for (const item of payload.items) {
    const slug = cleanText(item.slug, 80);
    const product = products.find((candidate) => candidate.slug === slug);
    const quantity = typeof item.quantity === "number" ? Math.floor(item.quantity) : 0;
    if (!product || quantity < 1 || quantity > 50) {
      return orderError("Uno de los perfumes seleccionados no es válido.", 400, "INVALID_ITEM");
    }
    normalizedItems.push({ slug: product.slug, name: product.name, quantity });
  }

  const itemCount = normalizedItems.reduce((sum, item) => sum + item.quantity, 0);
  if (itemCount > 100) {
    return orderError("Para pedidos mayores a 100 perfumes, contáctanos por WhatsApp.", 400, "ORDER_TOO_LARGE");
  }

  const pricing = calculateCartPricing(itemCount);
  const orderId = `WILD-${new Date().toISOString().slice(2, 10).replace(/-/g, "")}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  const createdAt = new Date().toISOString();
  const orderRecord = {
    order_id: orderId,
    created_at: createdAt,
    customer_name: name,
    phone,
    city,
    province,
    address,
    reference: reference || null,
    items: normalizedItems,
    item_count: itemCount,
    pricing: pricing.breakdown,
    regular_total: pricing.regularTotal,
    savings: pricing.savings,
    total: pricing.total,
    status: "nuevo",
    payment_method: "contraentrega",
    source: "web",
  };

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const supabaseSecret = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseSecret) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/orders`, {
        method: "POST",
        headers: {
          apikey: supabaseSecret,
          Authorization: `Bearer ${supabaseSecret}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(orderRecord),
        cache: "no-store",
      });

      if (!response.ok) {
        console.error("Supabase rejected order insert", response.status);
        return orderError("No pudimos guardar el pedido en este momento. Escríbenos por WhatsApp para ayudarte.", 502, "ORDER_STORAGE_ERROR");
      }

      return NextResponse.json({ orderId });
    } catch {
      return orderError("No pudimos conectar con el registro de pedidos. Escríbenos por WhatsApp para ayudarte.", 502, "ORDER_STORAGE_UNAVAILABLE");
    }
  }

  const webhook = process.env.ORDER_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderRecord),
      });
      if (response.ok) return NextResponse.json({ orderId });
    } catch {
      // The configured fallback is unavailable. Return the safe message below.
    }
  }

  return orderError("El registro automático de pedidos todavía no está conectado. Escríbenos por WhatsApp para confirmar tu compra.", 503, "ORDER_STORAGE_NOT_CONFIGURED");
}
