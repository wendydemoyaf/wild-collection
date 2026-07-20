import Link from "next/link";
import Image from "next/image";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group w-full max-w-[310px] text-left">
      <Link
        href={`/perfumes/${product.slug}`}
        aria-label={`Descubrir ${product.name}`}
        className="relative block aspect-[.73] overflow-hidden bg-black shadow-[0_18px_45px_rgba(74,34,42,.10)] ring-1 ring-black/[.06]"
      >
        <Image
          src={product.image}
          alt={`Perfume ${product.name} de Wild Collection`}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 310px"
          className="object-cover transition duration-1000 ease-out group-hover:scale-[1.045] group-hover:brightness-75"
        />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between border border-white/18 bg-black/60 px-4 py-3 opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="text-[8px] font-semibold uppercase tracking-[.25em] text-white">
            Descubrir universo
          </span>
          <span className="text-white">→</span>
        </div>
      </Link>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div><p className="text-[8px] uppercase tracking-[.24em] opacity-48">{product.family}</p><h2 className="mt-1 font-serif text-[24px] uppercase leading-tight tracking-[-.025em] text-current md:text-[28px]">{product.name}</h2></div>
        <span className="font-serif text-lg opacity-70">$19,90</span>
      </div>
    </article>
  );
}
