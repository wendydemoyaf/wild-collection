import { MetaAdsError, toClientError } from "./metaAds";

type MetaInsightsRow = {
  date_start?: string;
  campaign_id?: string;
  spend?: string;
  reach?: string;
  impressions?: string;
  ctr?: string;
  cpm?: string;
  actions?: Array<{ action_type?: string; value?: string }>;
  cost_per_action_type?: Array<{ action_type?: string; value?: string }>;
};

export type DailyConsumption = {
  date: string;
  spend: number;
  active_campaigns: number;
};

export type MetaCollectionData = {
  today: number;
  week: number;
  month: number;
  accumulated: number;
  daily: DailyConsumption[];
  charges_available: false;
  charges_message: string;
};

function config() {
  const version = process.env.META_API_VERSION?.trim() || "v24.0";
  const accountId = process.env.META_AD_ACCOUNT_ID?.trim();
  const token = process.env.META_ACCESS_TOKEN?.trim();
  if (!accountId || !token) throw new MetaAdsError("Faltan las variables META_AD_ACCOUNT_ID o META_ACCESS_TOKEN en el servidor.", 503);
  return { version, accountId: accountId.startsWith("act_") ? accountId : `act_${accountId}`, token };
}

function number(value: string | number | undefined) {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

function localDate(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Guayaquil", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

function dateRange() {
  const now = new Date();
  const today = localDate(now);
  const monthStart = `${today.slice(0, 8)}01`;
  return { today, monthStart };
}

async function graph<T>(path: string, params: Record<string, string>) {
  const { version, token } = config();
  const search = new URLSearchParams({ ...params, access_token: token });
  const response = await fetch(`https://graph.facebook.com/${version}${path}?${search.toString()}`, { cache: "no-store" });
  const body = (await response.json().catch(() => ({}))) as T & { error?: { message?: string; type?: string; code?: number; error_subcode?: number; fbtrace_id?: string } };
  if (!response.ok) {
    const error = body.error;
    throw new MetaAdsError(error?.message ?? `Meta respondió HTTP ${response.status}.`, response.status, error);
  }
  return body;
}

async function accountSpend(preset: string) {
  const { accountId } = config();
  const response = await graph<{ data?: MetaInsightsRow[] }>(`/${accountId}/insights`, { fields: "spend", date_preset: preset, limit: "1" });
  return number(response.data?.[0]?.spend);
}

async function dailyConsumption(from: string, to: string) {
  const { accountId } = config();
  const response = await graph<{ data?: MetaInsightsRow[] }>(`/${accountId}/insights`, {
    fields: "date_start,campaign_id,spend",
    level: "campaign",
    time_increment: "1",
    time_range: JSON.stringify({ since: from, until: to }),
    limit: "500",
  });
  const byDate = new Map<string, { spend: number; campaigns: Set<string> }>();
  for (const row of response.data ?? []) {
    if (!row.date_start) continue;
    const current = byDate.get(row.date_start) ?? { spend: 0, campaigns: new Set<string>() };
    current.spend += number(row.spend);
    if (row.campaign_id) current.campaigns.add(row.campaign_id);
    byDate.set(row.date_start, current);
  }
  const days: DailyConsumption[] = [];
  const cursor = new Date(`${from}T12:00:00-05:00`);
  const end = new Date(`${to}T12:00:00-05:00`);
  while (cursor <= end) {
    const date = localDate(cursor);
    const value = byDate.get(date);
    days.push({ date, spend: value?.spend ?? 0, active_campaigns: value?.campaigns.size ?? 0 });
    cursor.setDate(cursor.getDate() + 1);
  }
  return days.reverse();
}

export async function getMetaCollectionData(): Promise<MetaCollectionData> {
  const { today, monthStart } = dateRange();
  const [todaySpend, weekSpend, monthSpend, accumulatedSpend, daily] = await Promise.all([
    accountSpend("today"),
    accountSpend("this_week_mon_today"),
    accountSpend("this_month"),
    accountSpend("maximum"),
    dailyConsumption(monthStart, today),
  ]);
  return {
    today: todaySpend,
    week: weekSpend,
    month: monthSpend,
    accumulated: accumulatedSpend,
    daily,
    charges_available: false,
    charges_message: "Meta no expone esta información mediante la API utilizada.",
  };
}

export { toClientError };
