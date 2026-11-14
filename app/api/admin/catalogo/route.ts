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
      preview_read_only: process.env.VERCEL_ENV !== "production",
      preview_simulation: false,
      products: products.map((product) => ({
        slug: product.slug,
        code: product.code ?? null,
        image_ready: product.imageReady !== false,
        name: product.name,
        gender: product.gender,
        image: product.image,
        is_active: state.get(product.slug)?.is_active === true,
        updated_at: state.get(product.slug)?.updated_at ?? null,
      })),
    });
  } catch {
    // Solo en Preview: permitir revisar el panel sin escribir ni simular una conexión real.
    if (process.env.VERCEL_ENV !== "production") return privateJson({
      preview_read_only: true,
      preview_simulation: true,
      products: products.map((product) => ({
        slug: product.slug,
        code: product.code ?? null,
        image_ready: product.imageReady !== false,
        name: product.name,
        gender: product.gender,
        image: product.image,
        // El estado simulado mantiene los 18 productos anteriores disponibles,
        // pero las referencias nuevas siguen inactivas hasta su aprobación.
        is_active: product.code === undefined && product.imageReady !== false,
        updated_at: null,
      })),
    });
    return privateJson({ error: "No pudimos consultar la disponibilidad en Supabase." }, 503);
  }
}

export async function PATCH(request: NextRequest) {
  const guard = checkSession(request);
  if (guard) return guard;
  if (!isSameOrigin(request)) return privateJson({ error: "Solicitud no permitida." }, 403);
  // Las previews pueden compartir Supabase con producción. Nunca modificar datos reales desde Preview.
  if (process.env.VERCEL_ENV !== "production") {
    return privateJson({ error: "En Preview solo puedes revisar el catálogo. Los cambios están deshabilitados." }, 403);
  }
  let body: unknown;
  try { body = await request.json(); } catch { return privateJson({ error: "Solicitud inválida." }, 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return privateJson({ error: "Solicitud inválida." }, 400);
  const { slug, is_active } = body as Record<string, unknown>;
  if (typeof slug !== "string" || !products.some((product) => product.slug === slug) || typeof is_active !== "boolean") {
    return privateJson({ error: "Producto o disponibilidad inválida." }, 400);
  }
  if (is_active && products.find((item) => item.slug === slug)?.imageReady === false) {
    return privateJson({ error: "Primero debemos cargar y validar la fotografía oficial de este perfume." }, 409);
  }
  try {
    await setProductAvailability(slug, is_active);
    return privateJson({ ok: true, slug, is_active });
  } catch {
    return privateJson({ error: "No pudimos guardar el cambio en Supabase." }, 503);
  }
}
