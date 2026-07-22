import { NextRequest, NextResponse } from "next/server";
import { hasValidAdminSession, isAdminConfigured } from "../../../lib/adminAuth";
import { getMetaAccountCurrency } from "../../../lib/metaAds";

export const runtime = "nodejs";

type IntegrationStatus = "Conectado" | "Error" | "Pendiente";

type Integration = {
  name: string;
  status: IntegrationStatus;
  verified_at: string | null;
  description: string;
  detail?: string;
};

function privateJson(body: object, init?: ResponseInit) {
  const response = NextResponse.json(body, init);
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

function supabaseConfig() {
  return {
    url: process.env.SUPABASE_URL?.replace(/\/$/, "") ?? "",
    secret: process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  };
}

async function verifySupabase(verifiedAt: string): Promise<Integration> {
  const { url, secret } = supabaseConfig();
  if (!url || !secret) return { name: "Supabase", status: "Pendiente", verified_at: null, description: "Base de datos de pedidos y costos.", detail: "No fue posible verificar automáticamente." };

  try {
    const response = await fetch(`${url}/rest/v1/orders?select=created_at&limit=1`, {
      headers: { apikey: secret, Authorization: `Bearer ${secret}` }, cache: "no-store",
    });
    if (!response.ok) return { name: "Supabase", status: "Error", verified_at: verifiedAt, description: "Base de datos de pedidos y costos.", detail: "La conexión no respondió correctamente." };
    return { name: "Supabase", status: "Conectado", verified_at: verifiedAt, description: "Base de datos de pedidos y costos." };
  } catch {
    return { name: "Supabase", status: "Error", verified_at: verifiedAt, description: "Base de datos de pedidos y costos.", detail: "La conexión no respondió correctamente." };
  }
}

async function verifyMeta(verifiedAt: string): Promise<Integration> {
  try {
    const currency = await getMetaAccountCurrency();
    return { name: "Meta Ads", status: "Conectado", verified_at: verifiedAt, description: "Lectura de campañas, gasto y resultados.", detail: `Cuenta publicitaria en ${currency}.` };
  } catch {
    return { name: "Meta Ads", status: "Error", verified_at: verifiedAt, description: "Lectura de campañas, gasto y resultados.", detail: "La conexión no respondió correctamente." };
  }
}

export async function GET(request: NextRequest) {
  if (!isAdminConfigured()) return privateJson({ error: "El acceso privado todavía no está configurado." }, { status: 503 });
  if (!hasValidAdminSession(request)) return privateJson({ error: "Debes iniciar sesión." }, { status: 401 });

  const verifiedAt = new Date().toISOString();
  const [supabase, meta] = await Promise.all([verifySupabase(verifiedAt), verifyMeta(verifiedAt)]);
  const unavailable = "No fue posible verificar automáticamente.";

  return privateJson({
    current: [
      supabase,
      meta,
      { name: "GitHub", status: "Pendiente", verified_at: null, description: "Repositorio y control de versiones del proyecto.", detail: unavailable },
      { name: "Vercel", status: "Pendiente", verified_at: null, description: "Despliegue de la aplicación en producción.", detail: unavailable },
    ],
    future: ["Kommo", "Airtable", "Dropi", "IA Operativa"],
    system: {
      version: process.env.npm_package_version ?? "No disponible",
      environment: "Producción",
      last_deployment: process.env.VERCEL_DEPLOYMENT_CREATED_AT ?? "No disponible",
      last_commit: process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GITHUB_SHA ?? "No disponible",
    },
    updated_at: verifiedAt,
  });
}
