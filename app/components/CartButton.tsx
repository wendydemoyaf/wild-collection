"use client";

import { useCart } from "../context/CartContext";

type CartButtonProps = {
  name: string;
  price: number;
  img: string;
};

export default function CartButton({ name, price, img }: CartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart({ name, price, img })}
      className="w-full rounded-full bg-[#B8893B] px-6 py-3 text-xs font-bold tracking-[0.25em] text-black uppercase hover:bg-[#F0D8A8] transition"
    >
      Agregar al carrito
    </button>
  );
}
