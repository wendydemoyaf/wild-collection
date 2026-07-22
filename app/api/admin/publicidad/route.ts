import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../lib/adminAuth";
import { getAdvertisingData, toClientError } from "../../../lib/metaAds";

export const runtime = "nodejs";

function json(body: object, init?: ResponseInit) { const response = NextResponse.json(body, init); response.headers.set("Cache-Control", "private, no-store, max-age=0"); return response; }

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) return json({ error: "El acceso privado todavía no está configurado." }, { status: 503 });
  if (!hasValidAdminSession(request)) return json({ error: "Debes iniciar sesión." }, { status: 401 });
  try {
    const [campaigns, today, week, month] = await Promise.all([getAdvertisingData(), getAdvertisingData("today"), getAdvertisingData("this_week"), getAdvertisingData("this_month")]);
    const byId = (list: typeof campaigns) => new Map(list.map((campaign) => [campaign.id, campaign]));
    const todayById = byId(today), weekById = byId(week), monthById = byId(month);
    const withPeriods = campaigns.map((campaign) => ({ ...campaign, spend_today: todayById.get(campaign.id)?.spend ?? 0, spend_week: weekById.get(campaign.id)?.spend ?? 0, spend_month: monthById.get(campaign.id)?.spend ?? 0 }));
    const total = (list: typeof campaigns, key: "spend" | "conversations") => list.reduce((value, campaign) => value + campaign[key], 0);
    const spend = total(month, "spend");
    const conversations = total(month, "conversations");
    return json({ campaigns: withPeriods, summary: { spend_today: total(today, "spend"), spend_week: total(week, "spend"), spend_month: total(month, "spend"), conversations, cost_per_conversation: conversations > 0 ? spend / conversations : null }, updated_at: new Date().toISOString() });
  } catch (error) {
    const normalized = toClientError(error);
    return json(normalized, { status: normalized.status });
  }
}
