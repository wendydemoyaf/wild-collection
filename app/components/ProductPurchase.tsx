"use client";

import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductPurchase({ product }: { product: Product }) {
  const { addToCart, itemCount } = useCart();
  return (
    <div>
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="w-full rounded-full bg-[#B8893B] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-black transition hover:bg-[#F0D8A8] md:w-auto"
      >
        Elegir este perfume
      </button>
      <p className="mt-3 text-xs text-white/50">Llevas {itemCount} perfume{itemCount === 1 ? "" : "s"} seleccionado{itemCount === 1 ? "" : "s"}.</p>
    </div>
  );
}
