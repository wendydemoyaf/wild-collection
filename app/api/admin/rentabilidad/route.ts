import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../lib/adminAuth";
import { getAdvertisingData, getMetaAccountCurrency, toClientError } from "../../../lib/metaAds";

export const runtime = "nodejs";

type Costos = {
  costo_productos: number | string | null;
  costo_envio: number | string | null;
  utilidad_antes_publicidad: number | string | null;
};

type Order = {
  order_id: string;
  total: number | string;
  status: string;
  costos_pedido?: Costos | Costos[] | null;
  atribuciones_campana_pedido?: { meta_campaign_id: string } | Array<{ meta_campaign_id: string }> | null;
};

function json(body: object, init?: ResponseInit) {
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

function number(value: number | string | null | undefined) {
  const result = Number(value);
  return Number.isFinite(result) ? result : 0;
}

function costOf(order: Order) {
  return Array.isArray(order.costos_pedido) ? order.costos_pedido[0] ?? null : order.costos_pedido ?? null;
}

function campaignOf(order: Order) {
  const attribution = Array.isArray(order.atribuciones_campana_pedido)
    ? order.atribuciones_campana_pedido[0] ?? null
    : order.atribuciones_campana_pedido ?? null;
  return attribution?.meta_campaign_id ?? null;
}

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) return json({ error: "El acceso privado todavía no está configurado." }, { status: 503 });
  if (!hasValidAdminSession(request)) return json({ error: "Debes iniciar sesión." }, { status: 401 });

  const { url, secret } = databaseConfig();
  if (!url || !secret) return json({ error: "La base de datos no está conectada." }, { status: 503 });

  try {
    const [currency, campaigns, ordersResponse] = await Promise.all([
      getMetaAccountCurrency(),
      getAdvertisingData(),
      fetch(`${url}/rest/v1/orders?select=order_id,total,status,costos_pedido(costo_productos,costo_envio,utilidad_antes_publicidad),atribuciones_campana_pedido(meta_campaign_id)&order=created_at.desc&limit=5000`, {
        headers: { apikey: secret, Authorization: `Bearer ${secret}` },
        cache: "no-store",
      }),
    ]);
    if (!ordersResponse.ok) return json({ error: "No pudimos consultar los pedidos para rentabilidad." }, { status: 502 });
    const orders = (await ordersResponse.json()) as Order[];
    const campaignOrders = new Map<string, Order[]>();
    const withoutAttribution: Order[] = [];
    for (const order of orders) {
      const campaignId = campaignOf(order);
      if (!campaignId) withoutAttribution.push(order);
      else campaignOrders.set(campaignId, [...(campaignOrders.get(campaignId) ?? []), order]);
    }

    const rows = campaigns.map((campaign) => {
      const attributed = campaignOrders.get(campaign.id) ?? [];
      const activeOrders = attributed.filter((order) => order.status !== "cancelado");
      const costs = activeOrders.map(costOf);
      const completeCosts = activeOrders.length > 0 && costs.every((cost) => cost && cost.costo_productos !== null && cost.costo_envio !== null && cost.utilidad_antes_publicidad !== null);
      const sales = activeOrders.reduce((sum, order) => sum + number(order.total), 0);
      const products = completeCosts ? costs.reduce((sum, cost) => sum + number(cost!.costo_productos), 0) : null;
      const shipping = completeCosts ? costs.reduce((sum, cost) => sum + number(cost!.costo_envio), 0) : null;
      const utility = completeCosts ? costs.reduce((sum, cost) => sum + number(cost!.utilidad_antes_publicidad), 0) : null;
      return {
        id: campaign.id,
        name: campaign.name,
        status: campaign.status,
        conversations: campaign.conversations,
        attributed_orders: attributed.length,
        delivered_orders: attributed.filter((order) => order.status === "entregado").length,
        sales: attributed.length ? sales : null,
        product_cost: attributed.length ? products : null,
        shipping_cost: attributed.length ? shipping : null,
        utility: attributed.length ? utility : null,
        roas: attributed.length && campaign.spend > 0 ? sales / campaign.spend : null,
        has_attributions: attributed.length > 0,
      };
    });
    return json({
      currency,
      campaigns: rows,
      unattributed_orders: withoutAttribution.length,
      updated_at: new Date().toISOString(),
    });
  } catch (error) {
    const normalized = toClientError(error);
    return json(normalized, { status: normalized.status });
  }
}
