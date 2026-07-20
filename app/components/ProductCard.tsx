"use client";

import Link from "next/link";
import type { Product } from "../data/products";
import OlfactoryPyramid from "./OlfactoryPyramid";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#B8893B]/25 bg-[#0B0704] shadow-[0_22px_70px_rgba(0,0,0,.38)]">
      <Link href={`/perfumes/${product.slug}`} className="relative block h-[430px] overflow-hidden bg-black">
        <img
          src={product.image}
          alt={`Perfume ${product.name} de Wild Collection`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:opacity-20"
        />
        <div className="absolute inset-0 flex translate-y-5 flex-col justify-center bg-black/80 px-5 opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <p className="mb-4 text-center text-[10px] uppercase tracking-[0.35em] text-[#F0D8A8]">Pirámide olfativa</p>
          <OlfactoryPyramid pyramid={product.pyramid} compact />
          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em] text-white/70">Ver detalles</p>
        </div>
      </Link>

      <div className="p-5">
        <p className="text-[9px] uppercase tracking-[0.28em] text-[#B8893B]">{product.family}</p>
        <Link href={`/perfumes/${product.slug}`}>
          <h2 className="mt-2 font-serif text-2xl text-white">{product.name}</h2>
        </Link>
        <p className="mt-2 min-h-10 text-sm leading-relaxed text-white/58">{product.feeling}</p>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-5 w-full rounded-full bg-[#B8893B] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition hover:bg-[#F0D8A8]"
        >
          Elegir este perfume
        </button>
      </div>
    </article>
  );
}
