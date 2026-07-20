import Link from "next/link";
import Image from "next/image";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group w-full max-w-[270px] text-center">
      <Link
        href={`/perfumes/${product.slug}`}
        aria-label={`Descubrir ${product.name}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-[24px] bg-black shadow-[0_18px_45px_rgba(74,34,42,.13)] ring-1 ring-black/[.06]"
      >
        <Image
          src={product.image}
          alt={`Perfume ${product.name} de Wild Collection`}
          fill
          sizes="(max-width: 640px) 82vw, (max-width: 1024px) 42vw, 270px"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/45 via-transparent to-transparent pb-5 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="rounded-full border border-white/55 bg-black/20 px-5 py-2 text-[9px] font-semibold uppercase tracking-[.28em] text-white backdrop-blur-md">
            Ver perfume
          </span>
        </div>
      </Link>
      <h2 className="mt-4 font-serif text-[22px] uppercase leading-tight tracking-[-.01em] text-current md:text-2xl">
        {product.name}
      </h2>
      <p className="mt-1 text-[9px] uppercase tracking-[.24em] opacity-55">{product.family}</p>
    </article>
  );
}
