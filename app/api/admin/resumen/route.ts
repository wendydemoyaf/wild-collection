import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../lib/adminAuth";

export const runtime = "nodejs";

type OrderStatus = "nuevo" | "confirmado" | "preparando" | "enviado" | "entregado" | "cancelado";

type CostosPedido = {
  utilidad_antes_publicidad: number | string | null;
};

type Order = {
  created_at: string;
  total: number | string;
  status: OrderStatus;
  items: Array<{ quantity?: number | string }>;
  item_count: number | string;
  costos_pedido?: CostosPedido | CostosPedido[] | null;
};

function privateJson(body: object, init?: ResponseInit) {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

function databaseConfig() {
  return {
    url: process.env.SUPABASE_URL?.replace(/\/$/, "") ?? "",
    secret: process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  };
}

function localDate(value: string) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Guayaquil",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function todayInEcuador() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Guayaquil",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function addDays(isoDate: string, amount: number) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

function quantities(order: Order) {
  if (Array.isArray(order.items)) {
    const total = order.items.reduce((sum, item) => sum + Number(item.quantity ?? 0), 0);
    if (Number.isFinite(total) && total > 0) return total;
  }
  return Number(order.item_count) || 0;
}

function costs(order: Order) {
  if (Array.isArray(order.costos_pedido)) return order.costos_pedido[0] ?? null;
  return order.costos_pedido ?? null;
}

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) {
    return privateJson({ error: "El acceso privado todavía no está configurado.", code: "ADMIN_NOT_CONFIGURED" }, { status: 503 });
  }
  if (!hasValidAdminSession(request)) {
    return privateJson({ error: "Debes iniciar sesión.", code: "UNAUTHORIZED" }, { status: 401 });
  }

  const { url, secret } = databaseConfig();
  if (!url || !secret) return privateJson({ error: "La base de datos no está conectada." }, { status: 503 });

  try {
    const response = await fetch(`${url}/rest/v1/orders?select=created_at,total,status,items,item_count,costos_pedido(utilidad_antes_publicidad)&order=created_at.desc&limit=5000`, {
      headers: { apikey: secret, Authorization: `Bearer ${secret}` },
      cache: "no-store",
    });
    if (!response.ok) return privateJson({ error: "No pudimos consultar el resumen." }, { status: 502 });

    const orders = (await response.json()) as Order[];
    const today = todayInEcuador();
    const weekStart = addDays(today, -(new Date(`${today}T12:00:00Z`).getUTCDay() + 6) % 7);
    const monthStart = `${today.slice(0, 7)}-01`;
    const activeOrders = orders.filter((order) => order.status !== "cancelado");
    const saleTotal = (list: Order[]) => list.reduce((sum, order) => sum + Number(order.total), 0);
    const dayOrders = activeOrders.filter((order) => localDate(order.created_at) === today);
    const weekOrders = activeOrders.filter((order) => {
      const date = localDate(order.created_at);
      return date >= weekStart && date <= today;
    });
    const monthOrders = activeOrders.filter((order) => {
      const date = localDate(order.created_at);
      return date >= monthStart && date <= today;
    });
    const usableCosts = activeOrders.map(costs);
    const allUtilitiesAvailable = activeOrders.length > 0 && usableCosts.every((cost) => cost && cost.utilidad_antes_publicidad !== null && Number.isFinite(Number(cost.utilidad_antes_publicidad)));

    return privateJson({
      resumen: {
        ventas_dia: saleTotal(dayOrders),
        ventas_semana: saleTotal(weekOrders),
        ventas_mes: saleTotal(monthOrders),
        numero_pedidos: orders.length,
        cantidad_perfumes: activeOrders.reduce((sum, order) => sum + quantities(order), 0),
        ticket_promedio: activeOrders.length ? saleTotal(activeOrders) / activeOrders.length : null,
        facturacion_total: saleTotal(activeOrders),
        utilidad_antes_publicidad: allUtilitiesAvailable
          ? usableCosts.reduce((sum, cost) => sum + Number(cost!.utilidad_antes_publicidad), 0)
          : null,
        estados: {
          pendientes: orders.filter((order) => order.status === "nuevo").length,
          confirmados: orders.filter((order) => order.status === "confirmado").length,
          enviados: orders.filter((order) => order.status === "enviado").length,
          entregados: orders.filter((order) => order.status === "entregado").length,
          cancelados: orders.filter((order) => order.status === "cancelado").length,
        },
      },
      actualizado_en: new Date().toISOString(),
    });
  } catch {
    return privateJson({ error: "No pudimos conectar con el resumen." }, { status: 502 });
  }
}
