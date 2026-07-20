import ProductCard from "../components/ProductCard";
import StoreHeader from "../components/StoreHeader";
import { womenProducts } from "../data/products";

export default function FemeninoPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_82%_6%,rgba(235,179,192,.30),transparent_28%),linear-gradient(135deg,#FFF8F1,#F8E9E4_58%,#FBEFF2)] text-[#2A1018]">
      <StoreHeader variant="light" />
      <section className="px-6 pb-11 pt-14 text-center md:pb-14 md:pt-20">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[#A44A67]">Colección Wild</p>
        <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Perfumes Femeninos</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#7E4053]/75 md:text-base">Fragancias delicadas, envolventes y memorables.</p>
      </section>
      <section className="mx-auto flex max-w-[1520px] flex-wrap justify-center gap-x-5 gap-y-11 px-5 pb-24 md:px-8 lg:gap-x-6">
        {womenProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
      </section>
    </main>
  );
}
