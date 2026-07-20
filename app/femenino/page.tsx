import ProductCard from "../components/ProductCard";
import StoreHeader from "../components/StoreHeader";
import { womenProducts } from "../data/products";

export default function FemeninoPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(190,116,138,.22),transparent_35%),linear-gradient(150deg,#180b10,#080506_55%,#020202)] text-white">
      <StoreHeader />
      <section className="px-6 pb-12 pt-16 text-center md:pt-24">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#DDBB81]">Colección para mujer</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">Encuentra el aroma que habla de ti</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">Dulces, florales, frescos y envolventes. Pasa el puntero sobre cada imagen para descubrir su pirámide olfativa.</p>
      </section>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10">
        {womenProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
    </main>
  );
}
