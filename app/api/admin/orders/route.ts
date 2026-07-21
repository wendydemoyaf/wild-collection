import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured, isSameOrigin } from "../../../lib/adminAuth";

export const runtime = "nodejs";

const allowedStatuses = ["nuevo", "confirmado", "preparando", "enviado", "entregado", "cancelado"] as const;

function databaseConfig() {
  return {
    url: process.env.SUPABASE_URL?.replace(/\/$/, "") ?? "",
    secret: process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  };
}

function privateJson(body: object, init?: ResponseInit) {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

function authorize(request: NextRequest) {
  if (!isAdminConfigured()) {
    return privateJson(
      { error: "El acceso privado todavía no está configurado.", code: "ADMIN_NOT_CONFIGURED" },
      { status: 503 },
    );
  }
  if (!hasValidAdminSession(request)) {
    return privateJson({ error: "Debes iniciar sesión.", code: "UNAUTHORIZED" }, { status: 401 });
  }
  return null;
}

export async function GET(request: NextRequest) {
  const authError = authorize(request);
  if (authError) return authError;

  const { url, secret } = databaseConfig();
  if (!url || !secret) {
    return privateJson({ error: "La base de datos no está conectada." }, { status: 503 });
  }

  try {
    const response = await fetch(`${url}/rest/v1/orders?select=*&order=created_at.desc&limit=500`, {
      headers: { apikey: secret, Authorization: `Bearer ${secret}` },
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Supabase rejected admin order list", response.status);
      return privateJson({ error: "No pudimos consultar los pedidos." }, { status: 502 });
    }
    return privateJson({ orders: await response.json() });
  } catch {
    return privateJson({ error: "No pudimos conectar con la lista de pedidos." }, { status: 502 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return privateJson({ error: "Solicitud no permitida." }, { status: 403 });
  }

  const authError = authorize(request);
  if (authError) return authError;

  let orderId: unknown;
  let status: unknown;
  try {
    ({ orderId, status } = await request.json());
  } catch {
    return privateJson({ error: "No pudimos leer el cambio solicitado." }, { status: 400 });
  }

  if (typeof orderId !== "string" || !/^WILD-[A-Z0-9-]{6,40}$/.test(orderId)) {
    return privateJson({ error: "El pedido no es válido." }, { status: 400 });
  }
  if (typeof status !== "string" || !allowedStatuses.includes(status as (typeof allowedStatuses)[number])) {
    return privateJson({ error: "El estado seleccionado no es válido." }, { status: 400 });
  }

  const { url, secret } = databaseConfig();
  if (!url || !secret) {
    return privateJson({ error: "La base de datos no está conectada." }, { status: 503 });
  }

  try {
    const response = await fetch(
      `${url}/rest/v1/orders?order_id=eq.${encodeURIComponent(orderId)}&select=order_id,status`,
      {
        method: "PATCH",
        headers: {
          apikey: secret,
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({ status }),
        cache: "no-store",
      },
    );
    if (!response.ok) {
      console.error("Supabase rejected admin order update", response.status);
      return privateJson({ error: "No pudimos actualizar el pedido." }, { status: 502 });
    }

    const rows = (await response.json()) as Array<{ order_id: string; status: string }>;
    if (!rows.length) return privateJson({ error: "No encontramos ese pedido." }, { status: 404 });
    return privateJson({ order: rows[0] });
  } catch {
    return privateJson({ error: "No pudimos conectar para actualizar el pedido." }, { status: 502 });
  }
}
