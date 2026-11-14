"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "../components/AdminShell";

type CatalogProduct = {
  slug: string;
  code: string | null;
  image_ready: boolean;
  name: string;
  gender: string;
  image: string;
  is_active: boolean;
  updated_at: string | null;
};

export default function AdminCatalogPage() {
  const router = useRouter();
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [previewReadOnly, setPreviewReadOnly] = useState(false);
  const [previewSimulation, setPreviewSimulation] = useState(false);

  async function load() {
    setError("");
    try {
      const response = await fetch("/api/admin/catalogo", { cache: "no-store" });
      if (response.status === 401) { router.replace("/admin/pedidos"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "No pudimos cargar el catálogo.");
      setProducts(data.products);
      setPreviewReadOnly(Boolean(data.preview_read_only));
      setPreviewSimulation(Boolean(data.preview_simulation));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error consultando el catálogo.");
    } finally { setLoading(false); }
  }

  useEffect(() => { void load(); }, []);

  useEffect(() => {
    const refresh = () => { void load(); };
    window.addEventListener("wild-admin-refresh", refresh);
    return () => window.removeEventListener("wild-admin-refresh", refresh);
  }, []);

  async function toggle(product: CatalogProduct) {
    if (saving || previewReadOnly) return;
    setSaving(product.slug);
    setError("");
    try {
      const response = await fetch("/api/admin/catalogo", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug, is_active: !product.is_active }),
      });
      if (response.status === 401) { router.replace("/admin/pedidos"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "No pudimos actualizar el perfume.");
      setProducts((current) => current.map((entry) =>
        entry.slug === product.slug ? { ...entry, is_active: !product.is_active } : entry
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos actualizar el perfume.");
    } finally { setSaving(null); }
  }

  const filtered = useMemo(() => products.filter((product) =>
    `${product.name} ${product.slug}`.toLowerCase().includes(search.trim().toLowerCase())
  ), [products, search]);
  const activeCount = products.filter((product) => product.is_active).length;

  return <AdminShell>
    <main className="min-h-screen bg-[#F6F0E8] px-5 py-10 text-[#1A1A1A] md:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#8B7666]">Wild Collection · Administración</p>
        <h1 className="mt-3 font-serif text-4xl">Catálogo de perfumes</h1>
        <p className="mt-3 text-sm text-black/60">Activa o desactiva referencias sin borrar sus fichas ni alterar pedidos anteriores.</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-white px-4 py-2">{activeCount} disponibles</span>
          <span className="rounded-full bg-white px-4 py-2">{products.length - activeCount} inactivos</span>
        </div>
        <input
          aria-label="Buscar perfume"
          placeholder="Buscar por nombre o referencia…"
          className="mt-7 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B7666]"
          value={search} onChange={(event) => setSearch(event.target.value)}
        />
        {previewSimulation && <p className="mt-5 rounded-xl bg-white p-4 text-sm text-[#684F21]">Demostración: Supabase aún no contiene la tabla de disponibilidad. Los estados que ves son iniciales y no representan el inventario en vivo.</p>}
        {previewReadOnly && <p className="mt-5 rounded-xl bg-[#FFF2D9] p-4 text-sm text-[#684F21]">Vista previa de solo lectura: los interruptores se habilitarán en producción después de la aprobación.</p>}
        {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-800">{error}</p>}
        {loading ? <p className="mt-8 text-sm">Cargando catálogo…</p> :
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
            {filtered.map((product) => <div key={product.slug} className="flex items-center gap-4 border-b border-black/10 p-4 last:border-0">
              <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-[#EEE6DD]">
                {product.image_ready
                  ? <Image src={product.image} alt="" fill sizes="48px" className="object-cover" />
                  : <span className="flex h-full w-full items-center justify-center text-[10px] text-black/40">Sin foto</span>}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="mt-1 text-xs text-black/50">{product.code ? `Ref. ${product.code} · ` : ""}{product.gender}</p>
                {!product.image_ready && <p className="mt-1 text-[11px] text-[#A56E32]">Fotografía pendiente de subir · activación bloqueada</p>}
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-xs">
                <span className="hidden sm:inline">{product.is_active ? "Disponible" : "Inactivo"}</span>
                <input
                  type="checkbox" checked={product.is_active}
                  disabled={saving !== null || previewReadOnly || (!product.image_ready && !product.is_active)}
                  onChange={() => void toggle(product)}
                  aria-label={`Disponible en la tienda: ${product.name}`}
                  className="h-6 w-6 accent-[#1A1A1A]"
                />
              </label>
            </div>)}
          </div>
        }
      </div>
    </main>
  </AdminShell>;
}
