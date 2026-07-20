"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
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

export default function StoreHeader({ variant = "dark", colors }: StoreHeaderProps) {
  const { itemCount } = useCart();
  const isLight = variant === "light";
  const style = colors
    ? ({
        "--header-bg": colors.background,
        "--header-text": colors.text,
        "--header-border": colors.border,
        "--header-accent": colors.accent,
        "--header-accent-text": colors.accentText,
      } as CSSProperties)
    : undefined;

  return (
    <header
      style={style}
      className={`sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-xl md:px-10 ${
        colors
          ? "border-[var(--header-border)] bg-[var(--header-bg)] text-[var(--header-text)]"
          : isLight
            ? "border-[#D9A9A0]/35 bg-[#FFF8F1]/88 text-[#7C2943]"
            : "border-[#B8893B]/20 bg-black/88 text-[#F0D8A8]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.24em] md:text-xs">Wild Collection</Link>
        <nav className="flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] md:gap-6 md:text-[10px]">
          <Link href="/femenino" className="transition hover:opacity-60">Mujer</Link>
          <Link href="/masculino" className="transition hover:opacity-60">Hombre</Link>
          <Link
            href="/carrito"
            className={`rounded-full border px-3 py-2 transition ${
              colors
                ? "border-[var(--header-border)] hover:bg-black/5"
                : isLight
                  ? "border-[#A44A67]/35 hover:bg-[#A44A67]/10"
                  : "border-[#B8893B]/45 hover:bg-[#B8893B]/15"
            }`}
          >
            Carrito <span className={`ml-1 rounded-full px-1.5 py-0.5 ${colors ? "bg-[var(--header-accent)] text-[var(--header-accent-text)]" : isLight ? "bg-[#A44A67] text-white" : "bg-[#B8893B] text-black"}`}>{itemCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
