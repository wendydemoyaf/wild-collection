import { notFound } from "next/navigation";
import Link from "next/link";
import StoreHeader from "../../components/StoreHeader";
import OlfactoryPyramid from "../../components/OlfactoryPyramid";
import ProductPurchase from "../../components/ProductPurchase";
import { getProduct, products } from "../../data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_15%,rgba(184,137,59,.18),transparent_30%),linear-gradient(135deg,#120b06,#030303_60%,#000)] text-white">
      <StoreHeader />
      <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10 md:py-16">
        <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[34px] border border-[#B8893B]/25 bg-black shadow-[0_30px_90px_rgba(0,0,0,.55)]">
          <img src={product.secondaryImage ?? product.image} alt={`Perfume ${product.name}`} className="aspect-[3/4] w-full object-cover" />
        </div>
        <div>
          <Link href={product.gender === "mujer" ? "/femenino" : "/masculino"} className="text-[10px] uppercase tracking-[0.3em] text-[#B8893B]">← Volver a la colección</Link>
          <p className="mt-10 text-[10px] uppercase tracking-[0.38em] text-[#F0D8A8]/70">{product.inspiration}</p>
          <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">{product.name}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/68">{product.description}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[['Aroma', product.family], ['Sensación', product.feeling], ['Ocasión', product.occasion]].map(([title, value]) => (
              <div key={title} className="rounded-2xl border border-[#B8893B]/20 bg-white/[.04] p-4">
                <p className="text-[9px] uppercase tracking-[0.24em] text-[#B8893B]">{title}</p>
                <p className="mt-2 text-sm text-white/75">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-3xl border border-[#B8893B]/20 bg-black/30 p-5 md:p-7">
            <p className="mb-5 text-center text-[10px] uppercase tracking-[0.35em] text-[#F0D8A8]">Pirámide olfativa</p>
            <OlfactoryPyramid pyramid={product.pyramid} />
          </div>

          <div className="mt-8"><ProductPurchase product={product} /></div>
        </div>
      </section>
    </main>
  );
}
