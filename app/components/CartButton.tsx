"use client";

import { useCart } from "../context/CartContext";
import { products } from "../data/products";

type CartButtonProps = {
  name: string;
  price: number;
  img: string;
};

export default function CartButton({ name }: CartButtonProps) {
  const { addToCart } = useCart();
  const product = products.find((item) => item.name.toUpperCase() === name.toUpperCase());

  if (!product) return null;

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full rounded-full bg-[#B8893B] px-6 py-3 text-xs font-bold tracking-[0.25em] text-black uppercase hover:bg-[#F0D8A8] transition"
    >
      Agregar al carrito
    </button>
  );
}
