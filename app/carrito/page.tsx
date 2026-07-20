"use client";

import Image from "next/image";
import Link from "next/link";
import StoreHeader from "../components/StoreHeader";
import { useCart } from "../context/CartContext";

function money(value: number) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
}

function suggestionCopy(suggestion: NonNullable<ReturnType<typeof useCart>["suggestion"]>) {
  const perfumes = `${suggestion.additionalQuantity} perfume${suggestion.additionalQuantity === 1 ? "" : "s"}`;
  if (suggestion.extraCost < 0) {
    return `¡Una oportunidad Wild! Añade ${perfumes} y pagarías ${money(Math.abs(suggestion.extraCost))} menos. Llevarías ${suggestion.targetQuantity} por ${money(suggestion.targetTotal)}.`;
  }
  if (suggestion.extraCost === 0) {
    return `Añade ${perfumes} sin pagar más. Llevarías ${suggestion.targetQuantity} perfumes por el mismo total.`;
  }
  return `Por solo ${money(suggestion.extraCost)} más puedes añadir ${perfumes} y llevar ${suggestion.targetQuantity}. Ahorras ${money(suggestion.extraSavings)} frente al precio individual.`;
}

export default function CarritoPage() {
  const { cart, itemCount, pricing, suggestion, addToCart, decrease, removeFromCart } = useCart();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_85%_5%,rgba(205,161,91,.18),transparent_28%),linear-gradient(135deg,#FBF5EC,#F3E7D8,#FAF3E9)] text-[#27170E]">
      <StoreHeader variant="light" />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <p className="text-[9px] font-semibold uppercase tracking-[.4em] text-[#9A6D2D]">Tu selección Wild</p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl">Tu carrito</h1>
            <p className="mt-3 text-sm text-black/55">Elige la cantidad que quieras. El mejor precio se aplica automáticamente.</p>
          </div>
          {itemCount > 0 && <p className="text-sm text-black/55">{itemCount} perfume{itemCount === 1 ? "" : "s"} seleccionado{itemCount === 1 ? "" : "s"}</p>}
        </div>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-[30px] border border-[#B8893B]/20 bg-white/65 p-10 text-center shadow-[0_18px_60px_rgba(80,48,20,.08)]">
            <p className="font-serif text-3xl">Aún no has elegido perfumes</p>
            <p className="mt-3 text-sm text-black/50">Descubre las colecciones y arma tu combinación como prefieras.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/femenino" className="rounded-full bg-[#27170E] px-6 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#F4DDAF]">Ver mujer</Link>
              <Link href="/masculino" className="rounded-full border border-[#9A6D2D]/40 px-6 py-3 text-[10px] uppercase tracking-[.2em] text-[#6F471B]">Ver hombre</Link>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <article key={item.slug} className="grid grid-cols-[82px_1fr] gap-4 rounded-[26px] border border-[#B8893B]/18 bg-white/72 p-4 shadow-[0_14px_45px_rgba(91,51,20,.07)] sm:grid-cols-[96px_1fr_auto] sm:items-center md:p-5">
                  <div className="relative h-28 overflow-hidden rounded-2xl sm:h-32">
                    <Image src={item.image} alt={item.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] uppercase tracking-[.24em] text-[#9A6D2D]">{item.family}</p>
                    <h2 className="mt-1 font-serif text-2xl">{item.name}</h2>
                    <button type="button" onClick={() => removeFromCart(item.slug)} className="mt-3 text-[10px] uppercase tracking-[.15em] text-black/40 underline underline-offset-4 transition hover:text-[#8B3D2D]">Quitar del carrito</button>
                  </div>
                  <div className="col-span-2 flex items-center justify-between gap-3 border-t border-[#B8893B]/15 pt-4 sm:col-span-1 sm:border-0 sm:pt-0">
                    <span className="text-[9px] uppercase tracking-[.18em] text-black/45 sm:hidden">Cantidad</span>
                    <div className="flex items-center overflow-hidden rounded-full border border-[#9A6D2D]/35 bg-[#FBF5EC] text-[#392113]">
                      <button type="button" onClick={() => decrease(item.slug)} className="grid h-11 w-11 place-items-center text-xl transition hover:bg-[#9A6D2D]/12" aria-label={`Quitar una unidad de ${item.name}`}>−</button>
                      <span className="min-w-9 text-center text-sm font-semibold" aria-label={`${item.quantity} unidades`}>{item.quantity}</span>
                      <button type="button" onClick={() => addToCart(item)} className="grid h-11 w-11 place-items-center text-xl transition hover:bg-[#9A6D2D]/12" aria-label={`Agregar una unidad de ${item.name}`}>+</button>
                    </div>
                  </div>
                </article>
              ))}
              <div className="flex flex-wrap gap-3 pt-3">
                <Link href="/femenino" className="rounded-full border border-[#9A6D2D]/35 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-[#6F471B] transition hover:bg-white">Seguir eligiendo para mujer</Link>
                <Link href="/masculino" className="rounded-full border border-[#9A6D2D]/35 px-5 py-3 text-[9px] uppercase tracking-[.2em] text-[#6F471B] transition hover:bg-white">Seguir eligiendo para hombre</Link>
              </div>
            </div>

            <aside className="h-fit rounded-[30px] border border-[#B8893B]/30 bg-[#100B08] p-6 text-white shadow-[0_24px_70px_rgba(48,26,10,.22)] lg:sticky lg:top-24 md:p-7">
              <p className="text-[9px] uppercase tracking-[.32em] text-[#C99B52]">Mejor precio aplicado</p>
              <h2 className="mt-3 font-serif text-3xl">Resumen</h2>
              <div className="mt-5 flex justify-between border-b border-white/10 pb-4 text-sm text-white/65"><span>Perfumes elegidos</span><span>{itemCount}</span></div>

              <div className="mt-5 space-y-3">
                {pricing.breakdown.map((line) => (
                  <div key={line.quantity} className="flex justify-between gap-4 text-xs text-white/68">
                    <span>{line.count} × {line.label}</span>
                    <span className="whitespace-nowrap">{money(line.count * line.price)}</span>
                  </div>
                ))}
              </div>

              {pricing.savings > 0 && (
                <div className="mt-5 flex justify-between rounded-2xl bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  <span>Ahorras automáticamente</span><strong>{money(pricing.savings)}</strong>
                </div>
              )}

              {suggestion && (
                <p className="mt-5 rounded-2xl border border-[#C99B52]/35 bg-[#C99B52]/12 p-4 text-sm leading-relaxed text-[#F7DFAF]">
                  {suggestionCopy(suggestion)}
                </p>
              )}

              <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/55">Total</span>
                <strong className="font-serif text-4xl text-[#F0D8A8]">{money(pricing.total)}</strong>
              </div>
              <p className="mt-2 text-xs text-white/42">Pagas cuando recibes tu pedido.</p>
              <Link href="/checkout" className="mt-6 block rounded-full bg-[#C4933E] px-5 py-4 text-center text-[10px] font-bold uppercase tracking-[.23em] text-black transition hover:bg-[#E4BE79]">Continuar con el pedido</Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
