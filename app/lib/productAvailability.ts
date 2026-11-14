import { products } from "../data/products";

export type ProductAvailabilityRow = { slug: string; is_active: boolean; updated_at?: string };

function credentials() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const secret = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !secret) throw new Error("Product availability database not configured");
  return { url, secret };
}

export async function getAvailabilityRows(): Promise<ProductAvailabilityRow[]> {
  const { url, secret } = credentials();
  const response = await fetch(
    `${url}/rest/v1/product_availability?select=slug,is_active,updated_at&limit=500`,
    {
      headers: { apikey: secret, Authorization: `Bearer ${secret}` },
      cache: "no-store",
    }
  );
  if (!response.ok) {
    console.error("Product availability lookup failed", response.status);
    throw new Error("Product availability unavailable");
  }
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every((x): x is ProductAvailabilityRow =>
    x !== null && typeof x === "object" && typeof x.slug === "string" && typeof x.is_active === "boolean"
  )) throw new Error("Product availability returned invalid data");
  return data;
}

export async function getActiveSlugs(): Promise<Set<string>> {
  const validSlugs = new Set(products.filter((product) => product.imageReady !== false).map((product) => product.slug));
  try {
    const rows = await getAvailabilityRows();
    return new Set(rows.filter((row) => validSlugs.has(row.slug) && row.is_active).map((row) => row.slug));
  } catch (error) {
    // En Preview, mostrar solo la colección anterior mientras Supabase está pendiente.
    // En producción, nunca asumir disponibilidad cuando falla el inventario.
    if (process.env.VERCEL_ENV !== "production") return validSlugs;
    throw error;
  }
}

export async function setProductAvailability(slug: string, isActive: boolean) {
  const product = products.find((candidate) => candidate.slug === slug);
  if (!product) throw new Error("Unknown product");
  if (isActive && product.imageReady === false) throw new Error("Product photo is not uploaded yet");
  const { url, secret } = credentials();
  const response = await fetch(`${url}/rest/v1/product_availability?on_conflict=slug`, {
    method: "POST",
    headers: {
      apikey: secret,
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify({ slug, is_active: isActive, updated_at: new Date().toISOString() }),
    cache: "no-store",
  });
  if (!response.ok) {
    console.error("Product availability update failed", response.status);
    throw new Error("Could not update product availability");
  }
}
