import ProductCard from "../components/ProductCard";
import SiteFooter from "../components/SiteFooter";
import StoreHeader from "../components/StoreHeader";
import { womenProducts } from "../data/products";

export default function FemeninoPage() {
  return (
    <main className="min-h-screen bg-[#F6F0E8] text-[#070707]">
      <StoreHeader />
      <section className="mx-auto grid max-w-7xl gap-7 px-5 pb-12 pt-16 md:grid-cols-[.55fr_1.45fr] md:items-end md:px-10 md:pb-20 md:pt-24">
        <p className="text-[9px] font-semibold uppercase tracking-[.38em] text-[#8B6B45]">Colección 01 · Mujer</p>
        <div>
          <h1 className="font-serif text-[clamp(3.8rem,8vw,8rem)] leading-[.82] tracking-[-.055em]">Perfumes femeninos</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/55">Dulces, florales, luminosos y memorables. Entra en cada imagen para descubrir un universo distinto.</p>
        </div>
      </section>
      <div className="mx-5 border-t border-black/15 md:mx-10" />
      <section className="mx-auto grid max-w-[1540px] grid-cols-1 justify-items-center gap-x-5 gap-y-14 px-5 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:grid-cols-4">
        {womenProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
