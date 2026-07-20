import ProductCard from "../components/ProductCard";
import SiteFooter from "../components/SiteFooter";
import StoreHeader from "../components/StoreHeader";
import { menProducts } from "../data/products";

export default function MasculinoPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#F0E8DE]">
      <StoreHeader />
      <section className="mx-auto grid max-w-7xl gap-7 px-5 pb-12 pt-16 md:grid-cols-[.55fr_1.45fr] md:items-end md:px-10 md:pb-20 md:pt-24">
        <p className="text-[9px] font-semibold uppercase tracking-[.38em] text-[#D6BE98]">Colección 02 · Hombre</p>
        <div>
          <h1 className="font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[.82] tracking-[-.055em]">Perfumes masculinos</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/52">Frescos, intensos, magnéticos y seguros. Cada perfume abre una experiencia visual y olfativa propia.</p>
        </div>
      </section>
      <div className="mx-5 border-t border-white/15 md:mx-10" />
      <section className="mx-auto grid max-w-[1540px] grid-cols-1 justify-items-center gap-x-5 gap-y-14 px-5 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:grid-cols-4">
        {menProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
