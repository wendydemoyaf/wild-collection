"use client";

import Link from "next/link";
import StoreHeader from "../components/StoreHeader";
import { promotions } from "../data/products";
import { useCart } from "../context/CartContext";

function money(value: number) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
}

export default function CarritoPage() {
  const { cart, itemCount, total, promotion, addToCart, decrease, removeFromCart } = useCart();
  const nextPromotion = promotions.find((offer) => offer.quantity > itemCount);
  const valid = Boolean(promotion);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,.16),transparent_32%),#050302] text-white">
      <StoreHeader />
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#B8893B]">Tu selección Wild</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl">Carrito</h1>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[#B8893B]/20 bg-white/[.03] p-10 text-center">
            <p className="text-lg text-white/70">Aún no has elegido perfumes.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/femenino" className="rounded-full bg-[#B8893B] px-6 py-3 text-xs font-bold uppercase tracking-[.2em] text-black">Ver mujer</Link>
              <Link href="/masculino" className="rounded-full border border-[#B8893B]/50 px-6 py-3 text-xs uppercase tracking-[.2em] text-[#F0D8A8]">Ver hombre</Link>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <article key={item.slug} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[.035] p-4 md:items-center">
                  <img src={item.image} alt={item.name} className="h-28 w-20 rounded-2xl object-cover md:h-32 md:w-24" />
                  <div className="flex min-w-0 flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[.24em] text-[#B8893B]">{item.family}</p>
                      <h2 className="mt-1 font-serif text-xl">{item.name}</h2>
                      <button onClick={() => removeFromCart(item.slug)} className="mt-2 text-xs text-white/40 underline hover:text-white">Quitar</button>
                    </div>
                    <div className="flex w-fit items-center rounded-full border border-[#B8893B]/30">
                      <button onClick={() => decrease(item.slug)} className="px-4 py-2 text-lg" aria-label={`Quitar una unidad de ${item.name}`}>−</button>
                      <span className="min-w-7 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="px-4 py-2 text-lg" aria-label={`Agregar una unidad de ${item.name}`}>+</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-[#B8893B]/25 bg-[#0B0704] p-6 lg:sticky lg:top-24">
              <h2 className="font-serif text-2xl">Resumen</h2>
              <div className="mt-5 flex justify-between border-b border-white/10 pb-4 text-sm text-white/65"><span>Perfumes elegidos</span><span>{itemCount}</span></div>
              {valid ? (
                <>
                  <p className="mt-5 rounded-2xl bg-[#B8893B]/15 p-4 text-sm leading-relaxed text-[#F0D8A8]">✓ {promotion?.label}</p>
                  <div className="mt-5 flex items-end justify-between"><span className="text-sm text-white/60">Total</span><strong className="font-serif text-3xl text-[#F0D8A8]">{money(total!)}</strong></div>
                  <p className="mt-2 text-xs text-white/45">Pago contra entrega.</p>
                  <Link href="/checkout" className="mt-6 block rounded-full bg-[#B8893B] px-5 py-4 text-center text-[10px] font-bold uppercase tracking-[.24em] text-black hover:bg-[#F0D8A8]">Continuar con el pedido</Link>
                </>
              ) : (
                <>
                  <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
                    {nextPromotion ? `Agrega ${nextPromotion.quantity - itemCount} perfume${nextPromotion.quantity - itemCount === 1 ? "" : "s"} más para obtener: ${nextPromotion.label}.` : "Elige una promoción de 2, 5 o 7 perfumes para continuar."}
                  </p>
                  <Link href="/femenino" className="mt-5 block rounded-full border border-[#B8893B]/45 px-5 py-3 text-center text-[10px] uppercase tracking-[.22em] text-[#F0D8A8]">Seguir eligiendo</Link>
                </>
              )}
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
