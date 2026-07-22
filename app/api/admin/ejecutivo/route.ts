import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../lib/adminAuth";
import { getAdvertisingData, getMetaAccountCurrency, toClientError } from "../../../lib/metaAds";

export const runtime = "nodejs";

type CostosPedido = { costo_envio: number | string | null; utilidad_antes_publicidad: number | string | null };
type Order = { created_at: string; total: number | string; status: string; costos_pedido?: CostosPedido | CostosPedido[] | null };

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
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Guayaquil", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
}

function todayInEcuador() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Guayaquil", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function weekStart(today: string) {
  const date = new Date(`${today}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 6) % 7));
  return date.toISOString().slice(0, 10);
}

function cost(order: Order) {
  return Array.isArray(order.costos_pedido) ? order.costos_pedido[0] ?? null : order.costos_pedido ?? null;
}

function sum(list: Order[]) { return list.reduce((total, order) => total + Number(order.total), 0); }

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) return privateJson({ error: "El acceso privado todavía no está configurado." }, { status: 503 });
  if (!hasValidAdminSession(request)) return privateJson({ error: "Debes iniciar sesión." }, { status: 401 });

  const { url, secret } = databaseConfig();
  if (!url || !secret) return privateJson({ error: "La base de datos no está conectada." }, { status: 503 });

  try {
    const ordersRequest = fetch(`${url}/rest/v1/orders?select=created_at,total,status,costos_pedido(costo_envio,utilidad_antes_publicidad)&order=created_at.desc&limit=5000`, {
      headers: { apikey: secret, Authorization: `Bearer ${secret}` }, cache: "no-store",
    });
    const attributedRequest = fetch(`${url}/rest/v1/atribuciones_campana_pedido?select=order_id&limit=1`, {
      headers: { apikey: secret, Authorization: `Bearer ${secret}` }, cache: "no-store",
    });
    const [ordersResponse, attributedResponse, currency, metaToday, metaWeek] = await Promise.all([
      ordersRequest, attributedRequest, getMetaAccountCurrency(), getAdvertisingData("today"), getAdvertisingData("this_week_mon_today"),
    ]);
    if (!ordersResponse.ok || !attributedResponse.ok) return privateJson({ error: "No pudimos consultar la información existente del panel." }, { status: 502 });

    const orders = (await ordersResponse.json()) as Order[];
    const attributed = (await attributedResponse.json()) as Array<{ order_id: string }>;
    const today = todayInEcuador();
    const start = weekStart(today);
    const active = orders.filter((order) => order.status !== "cancelado");
    const todayOrders = active.filter((order) => localDate(order.created_at) === today);
    const weeklyOrders = active.filter((order) => {
      const date = localDate(order.created_at);
      return date >= start && date <= today;
    });
    const metaTotal = (campaigns: typeof metaToday, key: "spend" | "conversations") => campaigns.reduce((total, campaign) => total + campaign[key], 0);
    const spendToday = metaTotal(metaToday, "spend");
    const dayUtilities = todayOrders.map(cost).map((item) => item?.utilidad_antes_publicidad);
    const costsComplete = todayOrders.length > 0 && dayUtilities.every((value) => value !== null && value !== undefined && Number.isFinite(Number(value)));
    const estimatedProfit = costsComplete && currency === "USD"
      ? dayUtilities.reduce<number>((total, value) => total + Number(value), 0) - spendToday
      : null;
    const pending = orders.filter((order) => order.status === "nuevo").length;
    const missingShipping = active.filter((order) => cost(order)?.costo_envio === null || cost(order) === null).length;
    const alerts: string[] = [];
    if (pending > 0) alerts.push(`Hay ${pending} pedido${pending === 1 ? "" : "s"} pendiente${pending === 1 ? "" : "s"}.`);
    if (missingShipping > 0) alerts.push(`Faltan costos de envío en ${missingShipping} pedido${missingShipping === 1 ? "" : "s"}.`);
    if (attributed.length === 0) alerts.push("No existen pedidos atribuidos.");

    return privateJson({
      currency,
      today: { sales: sum(todayOrders), orders: todayOrders.length, meta_spend: spendToday, conversations: metaTotal(metaToday, "conversations"), estimated_profit: estimatedProfit },
      week: { sales: sum(weeklyOrders), orders: weeklyOrders.length, meta_spend: metaTotal(metaWeek, "spend"), conversations: metaTotal(metaWeek, "conversations") },
      alerts,
      updated_at: new Date().toISOString(),
    });
  } catch (error) {
    const metaError = toClientError(error);
    return privateJson(metaError, { status: metaError.status });
  }
}