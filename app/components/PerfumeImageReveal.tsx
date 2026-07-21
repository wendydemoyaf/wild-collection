import type { CSSProperties } from "react";
import Image from "next/image";
import type { Product, ProductTheme } from "../data/products";
import { getProductAccords } from "../data/products";

const widths = [100, 90, 80, 68, 58, 48, 38];

export default function PerfumeImageReveal({ product, theme }: { product: Product; theme: ProductTheme }) {
  const accords = getProductAccords(product);

  return (
    <div className="mx-auto flex w-full justify-center md:justify-end">
      <button
        type="button"
        aria-label={`Mostrar los acordes principales de ${product.name}`}
        className="group relative block aspect-[3/4] w-full max-w-[430px] overflow-hidden rounded-[30px] text-left shadow-[0_24px_70px_rgba(29,12,18,.18)] outline-none ring-1 ring-black/5 focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        style={{ "--accent": theme.accent } as CSSProperties}
      >
        <Image
          src={product.secondaryImage ?? product.image}
          alt={`Perfume ${product.name}`}
          fill
          priority
          sizes="(max-width: 768px) 92vw, 430px"
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[.97] group-hover:opacity-0 group-hover:blur-sm group-focus:scale-[.97] group-focus:opacity-0 group-focus:blur-sm"
        />

        <div
          className="absolute inset-0 flex flex-col justify-center gap-2.5 px-7 py-10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100 md:px-10"
          style={{ backgroundColor: theme.panel, color: theme.panelText }}
        >
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[.26em] opacity-90 md:text-[13px]">
            Acordes principales
          </p>

          {accords.slice(0, 7).map((accord, index) => (
            <div key={accord} className="w-full">
              <div
                className="flex h-8 origin-left scale-x-0 items-center rounded-r-xl rounded-l-sm pl-3 text-[9px] font-extrabold uppercase tracking-[.07em] text-black/75 transition-transform duration-1000 group-hover:scale-x-100 group-focus:scale-x-100 md:h-9 md:pl-4 md:text-[10px]"
                style={{
                  width: `${widths[index]}%`,
                  backgroundColor: theme.bars[index % theme.bars.length],
                  transitionDelay: `${index * 85}ms`,
                }}
              >
                {accord}
              </div>
            </div>
          ))}
        </div>

        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-black/35 px-4 py-2 text-center text-[8px] uppercase tracking-[.22em] text-white opacity-0 backdrop-blur-md transition group-hover:opacity-0 group-focus:opacity-0 md:opacity-100">
          Pasa el puntero para descubrir sus acordes
        </span>
      </button>
    </div>
  );
}
