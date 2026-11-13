import { NextRequest, NextResponse } from "next/server";
import { products } from "../../../data/products";
import { hasValidAdminSession, isAdminConfigured, isSameOrigin } from "../../../lib/adminAuth";
import { getAvailabilityRows, setProductAvailability } from "../../../lib/productAvailability";

export const dynamic = "force-dynamic";

function privateJson(value: object, status = 200) {
  const response = NextResponse.json(value, { status });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

function checkSession(request: NextRequest) {
  if (!isAdminConfigured()) return privateJson({ error: "El panel no está configurado." }, 503);
  if (!hasValidAdminSession(request)) return privateJson({ error: "Debes iniciar sesión." }, 401);
  return null;
}

export async function GET(request: NextRequest) {
  const guard = checkSession(request);
  if (guard) return guard;
  try {
    const rows = await getAvailabilityRows();
    const state = new Map(rows.map((row) => [row.slug, row]));
    return privateJson({
      products: products.map((product) => ({
        slug: product.slug,
        name: product.name,
        gender: product.gender,
        image: product.image,
        is_active: state.get(product.slug)?.is_active === true,
        updated_at: state.get(product.slug)?.updated_at ?? null,
      })),
    });
  } catch {
    return privateJson({ error: "No pudimos consultar la disponibilidad en Supabase." }, 503);
  }
}

export async function PATCH(request: NextRequest) {
  const guard = checkSession(request);
  if (guard) return guard;
  if (!isSameOrigin(request)) return privateJson({ error: "Solicitud no permitida." }, 403);
  let body: unknown;
  try { body = await request.json(); } catch { return privateJson({ error: "Solicitud inválida." }, 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return privateJson({ error: "Solicitud inválida." }, 400);
  const { slug, is_active } = body as Record<string, unknown>;
  if (typeof slug !== "string" || !products.some((product) => product.slug === slug) || typeof is_active !== "boolean") {
    return privateJson({ error: "Producto o disponibilidad inválida." }, 400);
  }
  try {
    await setProductAvailability(slug, is_active);
    return privateJson({ ok: true, slug, is_active });
  } catch {
    return privateJson({ error: "No pudimos guardar el cambio en Supabase." }, 503);
  }
}
