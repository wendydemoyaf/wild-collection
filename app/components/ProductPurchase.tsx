"use client";

import type { Product } from "../data/products";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type ProductPurchaseProps = {
  product: Product;
  colors?: {
    button: string;
    buttonText: string;
    muted: string;
    border: string;
  };
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ProductPurchase({ product, colors }: ProductPurchaseProps) {
  const { addToCart, itemCount } = useCart();
  const [added, setAdded] = useState(false);

  function chooseProduct() {
    addToCart(product);
    if (typeof window.fbq === "function") {
      window.fbq("track", "AddToCart", {
        content_ids: [product.slug],
        content_name: product.name,
        content_type: "product",
        content_category: product.gender,
      });
    }
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div>
      <button
        type="button"
        onClick={chooseProduct}
        style={colors ? { backgroundColor: colors.button, color: colors.buttonText, borderColor: colors.border } : undefined}
        className="w-full rounded-2xl border border-transparent bg-[#B8893B] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_14px_36px_rgba(24,8,13,.12)] transition hover:-translate-y-0.5 hover:brightness-110 md:w-auto"
      >
        {added ? "✓ Añadido al carrito" : "Agregar al carrito"}
      </button>
      <p style={colors ? { color: colors.muted } : undefined} className="mt-3 text-xs opacity-70">Llevas {itemCount} perfume{itemCount === 1 ? "" : "s"} seleccionado{itemCount === 1 ? "" : "s"}.</p>
    </div>
  );
}
