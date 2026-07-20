import ProductCard from "../components/ProductCard";
import StoreHeader from "../components/StoreHeader";
import { menProducts } from "../data/products";

export default function MasculinoPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(38,102,130,.24),transparent_34%),linear-gradient(150deg,#031017,#070707_58%,#020202)] text-white">
      <StoreHeader />
      <section className="px-6 pb-11 pt-14 text-center md:pb-14 md:pt-20">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#DDBB81]">Colección para hombre</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">Perfumes Masculinos</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">Fragancias frescas, intensas y memorables.</p>
      </section>
      <section className="mx-auto flex max-w-[1520px] flex-wrap justify-center gap-x-5 gap-y-11 px-5 pb-24 md:px-8 lg:gap-x-6">
        {menProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
    </main>
  );
}
