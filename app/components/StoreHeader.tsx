"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

type StoreHeaderProps = {
  variant?: "dark" | "light";
  colors?: {
    background: string;
    text: string;
    border: string;
    accent: string;
    accentText: string;
  };
};

const navItems = [
  { label: "Mujer", href: "/femenino" },
  { label: "Hombre", href: "/masculino" },
  { label: "La marca", href: "/quienes-somos" },
  { label: "Emprende", href: "/invierte-con-wild" },
];

export default function StoreHeader(props: StoreHeaderProps) {
  void props;
  const { itemCount, lastAdded, dismissAdded } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[80] h-[69px] border-b border-white/10 bg-[#070707]/92 text-[#F0E8DE] backdrop-blur-2xl md:h-[77px]">
        <div className="mx-auto grid h-full max-w-[1600px] grid-cols-[1fr_auto] items-center px-4 md:grid-cols-[1fr_auto_1fr] md:px-10">
          <Link href="/" aria-label="Wild Collection, inicio" className="flex w-fit items-center gap-3 transition hover:text-[#D6BE98]">
            <span className="font-serif text-2xl leading-none tracking-[-.09em]">WC</span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[.32em] sm:inline">Wild Collection</span>
          </Link>

          <nav className="hidden items-center gap-8 text-[9px] font-medium uppercase tracking-[.22em] md:flex" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#D6BE98]">{item.label}</Link>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2.5">
            <Link href="/carrito" aria-label={`Mi selección, ${itemCount} perfumes`} className="flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[.2em] transition hover:text-[#D6BE98]">
              <span className="hidden sm:inline">Selección</span>
              <b key={itemCount} className="grid h-9 w-9 place-items-center rounded-full border border-[#D6BE98]/45 font-mono text-[9px] font-medium text-[#D6BE98] animate-[countPulse_.35s_ease-out]">
                {String(itemCount).padStart(2, "0")}
              </b>
            </Link>
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Abrir menú" aria-expanded={menuOpen} className="grid h-9 w-9 place-content-center gap-[5px] rounded-full border border-white/15 md:hidden">
              <span className="block h-px w-3.5 bg-current" />
              <span className="block h-px w-3.5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[120] flex flex-col justify-between bg-[#070707] p-6 text-[#F0E8DE] transition duration-500 md:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-6 opacity-0"}`}>
        <div className="flex justify-between text-[9px] font-semibold uppercase tracking-[.28em]">
          <span>Wild Collection</span>
          <button type="button" onClick={() => setMenuOpen(false)}>Cerrar</button>
        </div>
        <nav className="grid" aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-baseline gap-5 py-2 font-serif text-[clamp(2.8rem,14vw,4.6rem)] leading-none">
              <span className="font-sans text-[9px] tracking-[.2em] text-[#B99158]">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link href="/carrito" onClick={() => setMenuOpen(false)} className="mt-4 flex items-baseline gap-5 border-t border-white/10 pt-6 font-serif text-[clamp(2.4rem,12vw,4rem)] leading-none text-[#D6BE98]">
            <span className="font-sans text-[9px] tracking-[.2em]">05</span>
            Mi selección ({itemCount})
          </Link>
        </nav>
        <p className="text-[8px] uppercase tracking-[.24em] text-white/40">Perfumes de 55 ml · Pago contra entrega</p>
      </div>

      {lastAdded && (
        <aside className="fixed right-4 top-20 z-[90] w-[calc(100%-2rem)] max-w-sm animate-fade border border-[#D6BE98]/25 bg-[#0A0A0A]/95 p-3 text-white shadow-[0_24px_70px_rgba(0,0,0,.45)] backdrop-blur-xl md:right-7 md:top-24">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-[#17130f]">
              <Image src={lastAdded.product.image} alt={lastAdded.product.name} fill sizes="48px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#D6BE98]">✓ Añadido a tu selección</p>
              <p className="mt-1 truncate font-serif text-lg">{lastAdded.product.name}</p>
              <Link href="/carrito" className="mt-1 inline-block text-[9px] uppercase tracking-[.18em] text-white/60 underline underline-offset-4 hover:text-white">Ver selección ({itemCount})</Link>
            </div>
            <button type="button" onClick={dismissAdded} aria-label="Cerrar aviso" className="self-start px-2 py-1 text-lg text-white/45 hover:text-white">×</button>
          </div>
        </aside>
      )}
    </>
  );
}
