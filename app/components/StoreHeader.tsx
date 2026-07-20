"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function StoreHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[#B8893B]/20 bg-black/88 px-4 py-4 text-[#F0D8A8] backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.24em] md:text-xs">Wild Collection</Link>
        <nav className="flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] md:gap-6 md:text-[10px]">
          <Link href="/femenino" className="hover:text-white">Mujer</Link>
          <Link href="/masculino" className="hover:text-white">Hombre</Link>
          <Link href="/carrito" className="rounded-full border border-[#B8893B]/45 px-3 py-2 hover:bg-[#B8893B]/15">
            Carrito <span className="ml-1 rounded-full bg-[#B8893B] px-1.5 py-0.5 text-black">{itemCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
