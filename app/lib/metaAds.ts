type MetaErrorBody = {
  error?: { message?: string; type?: string; code?: number; error_subcode?: number; fbtrace_id?: string };
};

export type MetaMetric = {
  spend: number;
  reach: number;
  impressions: number;
  ctr: number | null;
  cpm: number | null;
  conversations: number;
  cost_per_conversation: number | null;
};

export type MetaAd = MetaMetric & { id: string; name: string; status: string };
export type MetaAdSet = MetaMetric & { id: string; name: string; status: string; daily_budget: number | null; ads: MetaAd[] };
export type MetaCampaign = MetaMetric & { id: string; name: string; status: string; objective: string | null; daily_budget: number | null; adsets: MetaAdSet[]; spend_today: number; spend_week: number; spend_month: number };

type MetaInsights = { spend?: string; reach?: string; impressions?: string; ctr?: string; cpm?: string; actions?: Array<{ action_type?: string; value?: string }>; cost_per_action_type?: Array<{ action_type?: string; value?: string }> };

export class MetaAdsError extends Error {
  constructor(message: string, public readonly status: number, public readonly details?: MetaErrorBody["error"]) { super(message); }
}

function config() {
  const version = process.env.META_API_VERSION?.trim() || "v24.0";
  const accountId = process.env.META_AD_ACCOUNT_ID?.trim();
  const token = process.env.META_ACCESS_TOKEN?.trim();
  if (!accountId || !token) throw new MetaAdsError("Faltan las variables META_AD_ACCOUNT_ID o META_ACCESS_TOKEN en el servidor.", 503);
  return { version, accountId: accountId.startsWith("act_") ? accountId : `act_${accountId}`, token };
}

function number(value: string | number | undefined) { const parsed = Number(value ?? 0); return Number.isFinite(parsed) ? parsed : 0; }

function conversations(insight?: MetaInsights) {
  const types = new Set(["onsite_conversion.messaging_conversation_started_7d", "onsite_conversion.messaging_first_reply", "messaging_conversation_started_7d"]);
  const action = insight?.actions?.find((item) => item.action_type && types.has(item.action_type));
  const cost = insight?.cost_per_action_type?.find((item) => item.action_type && types.has(item.action_type));
  const total = number(action?.value);
  return { total, cost: cost ? number(cost.value) : null };
}

export function metric(insight?: MetaInsights): MetaMetric {
  const totalConversations = conversations(insight);
  return { spend: number(insight?.spend), reach: number(insight?.reach), impressions: number(insight?.impressions), ctr: insight?.ctr === undefined ? null : number(insight.ctr), cpm: insight?.cpm === undefined ? null : number(insight.cpm), conversations: totalConversations.total, cost_per_conversation: totalConversations.cost ?? (totalConversations.total > 0 ? number(insight?.spend) / totalConversations.total : null) };
}

async function graph<T>(path: string, params: Record<string, string> = {}) {
  const { version, token } = config();
  const search = new URLSearchParams({ ...params, access_token: token });
  const response = await fetch(`https://graph.facebook.com/${version}${path}?${search.toString()}`, { cache: "no-store" });
  const body = (await response.json().catch(() => ({}))) as T & MetaErrorBody;
  if (!response.ok) {
    const detail = body.error;
    const exact = detail?.message ?? `Meta respondió HTTP ${response.status}.`;
    throw new MetaAdsError(exact, response.status, detail);
  }
  return body;
}

type GraphNode = { id: string; name: string; status: string; objective?: string; daily_budget?: string; adset_id?: string };

const insightFields = "spend,reach,impressions,ctr,cpm,actions,cost_per_action_type";

async function getNodeMetric(id: string, preset: string) {
  const insights = await graph<{ data?: MetaInsights[] }>(`/${id}/insights`, {
    fields: insightFields,
    date_preset: preset,
    limit: "1",
  });
  return metric(insights.data?.[0]);
}

export async function getAdvertisingData(preset = "maximum") {
  const { accountId } = config();
  const campaigns = await graph<{ data?: GraphNode[] }>(`/${accountId}/campaigns`, { fields: "id,name,status,objective", limit: "100" });
  const result: MetaCampaign[] = [];
  for (const campaign of campaigns.data ?? []) {
    const [adsets, ads, campaignMetric] = await Promise.all([
      graph<{ data?: GraphNode[] }>(`/${campaign.id}/adsets`, { fields: "id,name,status,daily_budget", limit: "100" }),
      graph<{ data?: GraphNode[] }>(`/${campaign.id}/ads`, { fields: "id,name,status,adset_id", limit: "100" }),
      getNodeMetric(campaign.id, preset),
    ]);
    const adsByAdset = new Map<string, MetaAd[]>();
    for (const ad of ads.data ?? []) {
      const typed = { id: ad.id, name: ad.name, status: ad.status, ...metric() };
      const current = adsByAdset.get(ad.adset_id ?? "") ?? [];
      current.push(typed);
      adsByAdset.set(ad.adset_id ?? "", current);
    }
    const mappedAdsets = (adsets.data ?? []).map((adset) => ({ id: adset.id, name: adset.name, status: adset.status, daily_budget: adset.daily_budget === undefined ? null : number(adset.daily_budget) / 100, ...metric(), ads: adsByAdset.get(adset.id) ?? [] }));
    result.push({ id: campaign.id, name: campaign.name, status: campaign.status, objective: campaign.objective ?? null, daily_budget: mappedAdsets.every((item) => item.daily_budget === null) ? null : mappedAdsets.reduce((sum, item) => sum + (item.daily_budget ?? 0), 0), ...campaignMetric, adsets: mappedAdsets, spend_today: 0, spend_week: 0, spend_month: 0 });
  }
  return result;
}

export function toClientError(error: unknown) {
  if (error instanceof MetaAdsError) return { error: error.message, code: "META_API_ERROR", meta: error.details ? { type: error.details.type, code: error.details.code, subcode: error.details.error_subcode, trace: error.details.fbtrace_id } : null, status: error.status };
  return { error: "No pudimos conectar con la API de Meta.", code: "META_CONNECTION_ERROR", meta: null, status: 502 };
}
