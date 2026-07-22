import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../../lib/adminAuth";
import { getAdvertisingData, toClientError } from "../../../../lib/metaAds";

export const runtime = "nodejs";
type Action = "activar" | "pausar" | "cambiar_presupuesto";

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) return NextResponse.json({ error: "El acceso privado todavía no está configurado." }, { status: 503 });
  if (!hasValidAdminSession(request)) return NextResponse.json({ error: "Debes iniciar sesión." }, { status: 401 });
  const body = await request.json().catch(() => null) as { campaign_id?: string; action?: Action; new_budget?: number } | null;
  if (!body?.campaign_id || !body.action || !["activar", "pausar", "cambiar_presupuesto"].includes(body.action)) return NextResponse.json({ error: "La simulación no tiene una campaña o acción válida." }, { status: 400 });
  try {
    const campaign = (await getAdvertisingData()).find((item) => item.id === body.campaign_id);
    if (!campaign) return NextResponse.json({ error: "La campaña ya no existe o no está disponible para esta cuenta." }, { status: 404 });
    if (body.action === "cambiar_presupuesto" && (!Number.isFinite(Number(body.new_budget)) || Number(body.new_budget) <= 0)) return NextResponse.json({ error: "Indica un presupuesto diario válido para simular el cambio." }, { status: 400 });
    return NextResponse.json({ simulation: { campaign: { id: campaign.id, name: campaign.name, status: campaign.status, daily_budget: campaign.daily_budget }, action: body.action, new_budget: body.action === "cambiar_presupuesto" ? Number(body.new_budget) : null, requires_confirmation: true, execution: "No se envió ningún cambio a Meta." } }, { headers: { "Cache-Control": "private, no-store, max-age=0" } });
  } catch (error) { const normalized = toClientError(error); return NextResponse.json(normalized, { status: normalized.status }); }
}
