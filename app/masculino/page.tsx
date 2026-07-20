import ProductCard from "../components/ProductCard";
import StoreHeader from "../components/StoreHeader";
import { menProducts } from "../data/products";

export default function MasculinoPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(38,102,130,.24),transparent_34%),linear-gradient(150deg,#031017,#070707_58%,#020202)] text-white">
      <StoreHeader />
      <section className="px-6 pb-12 pt-16 text-center md:pt-24">
        <p className="text-[10px] uppercase tracking-[0.45em] text-[#DDBB81]">Colección para hombre</p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">Una fragancia para cada versión de ti</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">Frescos, dulces, intensos y amaderados. Pasa el puntero sobre cada imagen para descubrir su pirámide olfativa.</p>
      </section>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10">
        {menProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
    </main>
  );
}
