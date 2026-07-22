import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../lib/adminAuth";
import { getMetaCollectionData, toClientError } from "../../../lib/metaCobros";

export const runtime = "nodejs";

function json(body: object, init?: ResponseInit) {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) return json({ error: "El acceso privado todavía no está configurado." }, { status: 503 });
  if (!hasValidAdminSession(request)) return json({ error: "Debes iniciar sesión." }, { status: 401 });
  try {
    const consumption = await getMetaCollectionData();
    return json({
      currency: consumption.currency,
      consumption,
      charges: [],
      reconciliation: {
        consumption_accumulated: consumption.accumulated,
        charges_accumulated: null,
        difference: null,
        reconciled: null,
      },
      updated_at: new Date().toISOString(),
    });
  } catch (error) {
    const normalized = toClientError(error);
    return json(normalized, { status: normalized.status });
  }
}
