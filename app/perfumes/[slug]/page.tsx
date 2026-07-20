import { notFound } from "next/navigation";
import Link from "next/link";
import type { CSSProperties } from "react";
import StoreHeader from "../../components/StoreHeader";
import PerfumeImageReveal from "../../components/PerfumeImageReveal";
import ProductPurchase from "../../components/ProductPurchase";
import SiteFooter from "../../components/SiteFooter";
import { getProduct, getProductTheme, products } from "../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const theme = getProductTheme(product);
  const pageStyle = {
    "--perfume-text": theme.text,
    "--perfume-muted": theme.muted,
    "--perfume-accent": theme.accent,
    "--perfume-surface": theme.surface,
    "--perfume-border": theme.border,
    background: theme.background,
    color: theme.text,
  } as CSSProperties;

  return (
    <main style={pageStyle} className="min-h-screen overflow-hidden">
      <StoreHeader
        colors={{
          background: theme.header,
          text: theme.text,
          border: theme.border,
          accent: theme.accent,
          accentText: theme.accentText,
        }}
      />
      <section className="mx-auto grid min-h-[calc(100vh-69px)] max-w-[1560px] items-center gap-12 px-6 py-12 md:grid-cols-[1.12fr_.88fr] md:px-12 md:py-16 lg:px-16">
        <div className="order-2 max-w-3xl md:order-1">
          <Link
            href={product.gender === "mujer" ? "/femenino" : "/masculino"}
            className="text-[9px] font-semibold uppercase tracking-[.28em] opacity-65 transition hover:opacity-100"
          >
            ← Volver a la colección
          </Link>

          <p className="mt-8 text-[9px] uppercase tracking-[.38em] opacity-55 md:mt-10">{product.inspiration}</p>
          <h1 className="mt-3 font-serif text-5xl uppercase leading-[.9] tracking-[-.025em] sm:text-6xl md:text-7xl lg:text-[88px]">
            {product.name}
          </h1>
          <p className="mt-4 text-base md:text-lg" style={{ color: theme.accent }}>{product.feeling}</p>

          <div
            className="mt-8 max-w-3xl rounded-[20px] border px-5 py-4 backdrop-blur-sm md:mt-11 md:px-7 md:py-5"
            style={{ backgroundColor: theme.surface, borderColor: theme.border }}
          >
            <p className="text-sm leading-relaxed opacity-80 md:text-base">{product.description}</p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-12 md:gap-10">
            {[["Aroma", product.family], ["Momentos Wild", product.occasion], ["Personalidad", product.feeling]].map(([title, value]) => (
              <div key={title}>
                <p className="text-[9px] font-semibold uppercase tracking-[.34em]" style={{ color: theme.accent }}>{title}</p>
                <div className="my-2 h-px w-16" style={{ backgroundColor: theme.border }} />
                <p className="text-sm opacity-85">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 md:mt-12">
            <ProductPurchase
              product={product}
              colors={{ button: theme.accent, buttonText: theme.accentText, muted: theme.muted, border: theme.border }}
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <PerfumeImageReveal product={product} theme={theme} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
