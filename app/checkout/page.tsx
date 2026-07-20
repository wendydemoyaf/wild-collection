"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import StoreHeader from "../components/StoreHeader";
import { useCart } from "../context/CartContext";

function money(value: number) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
}

function keepLetters(event: FormEvent<HTMLInputElement>) {
  event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-zÁÉÍÓÚÜáéíóúüÑñ' -]/g, "");
}

function keepNumbers(event: FormEvent<HTMLInputElement>) {
  event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
}

const fieldClass = "mt-2 w-full rounded-2xl border border-[#B8893B]/30 bg-[#FFFCF7] px-4 py-3.5 text-base text-[#2B1A10] outline-none transition placeholder:text-black/28 focus:border-[#8D6129] focus:ring-4 focus:ring-[#B8893B]/10";
const labelClass = "text-[10px] font-semibold uppercase tracking-[.18em] text-[#6E4B27]";

export default function CheckoutPage() {
  const { cart, itemCount, pricing, total, clearCart } = useCart();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [orderId, setOrderId] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (itemCount < 1) return;
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const customer = Object.fromEntries(form.entries());
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer,
        items: cart.map(({ slug, name, quantity }) => ({ slug, name, quantity })),
        pricing: pricing.breakdown,
        total,
      }),
    });
    if (!response.ok) { setStatus("error"); return; }
    const data = await response.json();
    setOrderId(data.orderId);
    setStatus("success");
    clearCart();
  }

  if (itemCount < 1 && status !== "success") {
    return (
      <main className="min-h-screen bg-[#FBF5EC] text-[#27170E]">
        <StoreHeader variant="light" />
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="font-serif text-5xl">Tu carrito está vacío</h1>
          <p className="mt-4 text-black/55">Puedes comprar desde un perfume y elegir la combinación que quieras.</p>
          <Link href="/femenino" className="mt-8 inline-block rounded-full bg-[#27170E] px-7 py-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#F0D8A8]">Elegir perfumes</Link>
        </div>
      </main>
    );
  }

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,.18),transparent_34%),#080503] text-white">
        <StoreHeader />
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-emerald-300/30 bg-emerald-500/15 text-4xl text-emerald-300">✓</div>
          <h1 className="mt-7 font-serif text-5xl">¡Pedido recibido!</h1>
          <p className="mt-4 text-white/65">Tu pedido <strong className="text-[#F0D8A8]">{orderId}</strong> quedó registrado. Te contactaremos para confirmar los datos antes del envío.</p>
          <Link href="/" className="mt-8 inline-block rounded-full border border-[#B8893B]/50 px-7 py-3 text-xs uppercase tracking-[.2em] text-[#F0D8A8]">Volver al inicio</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_85%_5%,rgba(205,161,91,.18),transparent_28%),linear-gradient(135deg,#FBF5EC,#F3E7D8,#FAF3E9)] text-[#27170E]">
      <StoreHeader variant="light" />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_390px] md:px-10 md:py-16">
        <form onSubmit={submit} className="rounded-[30px] border border-[#B8893B]/22 bg-white/72 p-6 shadow-[0_20px_65px_rgba(82,48,20,.09)] backdrop-blur-sm md:p-9">
          <p className="text-[9px] font-semibold uppercase tracking-[.35em] text-[#9A6D2D]">Pago contra entrega</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Datos para tu envío</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/55">Completa cada campo con los datos de la persona que recibirá el pedido. Los campos marcados con <strong className="text-[#9A4F2D]">*</strong> son obligatorios.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className={labelClass}>
              Nombre y apellido <span className="text-[#A33C2F]">*</span>
              <input required name="name" type="text" autoComplete="name" minLength={3} pattern="[A-Za-zÁÉÍÓÚÜáéíóúüÑñ' -]{3,}" onInput={keepLetters} placeholder="Ej.: María Andrade" title="Escribe al menos 3 letras, sin números" className={fieldClass} />
              <span className="mt-1.5 block text-[10px] normal-case tracking-normal text-black/42">Solo letras y espacios.</span>
            </label>

            <label className={labelClass}>
              WhatsApp de Ecuador <span className="text-[#A33C2F]">*</span>
              <input required name="phone" type="tel" inputMode="numeric" autoComplete="tel" pattern="09[0-9]{8}" minLength={10} maxLength={10} onInput={keepNumbers} placeholder="Ej.: 0991234567" title="Ingresa 10 números y comienza con 09" className={fieldClass} />
              <span className="mt-1.5 block text-[10px] normal-case tracking-normal text-black/42">10 números, comenzando con 09.</span>
            </label>

            <label className={labelClass}>
              Ciudad <span className="text-[#A33C2F]">*</span>
              <input required name="city" type="text" autoComplete="address-level2" minLength={2} pattern="[A-Za-zÁÉÍÓÚÜáéíóúüÑñ' -]{2,}" onInput={keepLetters} placeholder="Ej.: Machala" title="Escribe el nombre de la ciudad con letras" className={fieldClass} />
            </label>

            <label className={labelClass}>
              Provincia <span className="text-[#A33C2F]">*</span>
              <input required name="province" type="text" autoComplete="address-level1" minLength={2} pattern="[A-Za-zÁÉÍÓÚÜáéíóúüÑñ' -]{2,}" onInput={keepLetters} placeholder="Ej.: El Oro" title="Escribe el nombre de la provincia con letras" className={fieldClass} />
            </label>

            <label className={`${labelClass} sm:col-span-2`}>
              Dirección completa <span className="text-[#A33C2F]">*</span>
              <textarea required name="address" autoComplete="street-address" minLength={8} rows={3} placeholder="Ej.: Av. 25 de Junio y Calle 10, casa #123" title="Incluye calle, numeración y sector" className={fieldClass} />
              <span className="mt-1.5 block text-[10px] normal-case tracking-normal text-black/42">Incluye calle principal, intersección, número de casa o sector.</span>
            </label>

            <label className={`${labelClass} sm:col-span-2`}>
              Referencia para encontrar el lugar
              <textarea name="reference" rows={2} placeholder="Ej.: Casa color beige, frente al parque" className={fieldClass} />
              <span className="mt-1.5 block text-[10px] normal-case tracking-normal text-black/42">Opcional, pero ayuda a realizar la entrega.</span>
            </label>
          </div>

          {status === "error" && <p className="mt-5 rounded-2xl border border-red-700/15 bg-red-50 p-4 text-sm text-red-800">No pudimos registrar el pedido. Revisa tus datos e inténtalo nuevamente.</p>}
          <button disabled={status === "sending"} className="mt-8 w-full rounded-full bg-[#B8893B] px-6 py-4 text-[10px] font-bold uppercase tracking-[.24em] text-black transition hover:bg-[#D8B36C] disabled:opacity-50">{status === "sending" ? "Registrando…" : "Confirmar pedido"}</button>
          <p className="mt-3 text-center text-[10px] text-black/42">Te contactaremos antes de despachar. No pagas ahora.</p>
        </form>

        <aside className="h-fit rounded-[30px] border border-[#B8893B]/30 bg-[#100B08] p-6 text-white shadow-[0_24px_70px_rgba(48,26,10,.22)] lg:sticky lg:top-24 md:p-7">
          <p className="text-[9px] uppercase tracking-[.3em] text-[#C99B52]">Resumen final</p>
          <h2 className="mt-3 font-serif text-3xl">Tu pedido</h2>
          <div className="mt-5 space-y-3">{cart.map((item) => <div key={item.slug} className="flex justify-between gap-3 text-sm text-white/68"><span>{item.quantity} × {item.name}</span></div>)}</div>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-5">
            {pricing.breakdown.map((line) => <div key={line.quantity} className="flex justify-between gap-4 text-xs text-[#E4C78E]"><span>{line.count} × {line.label}</span><span>{money(line.count * line.price)}</span></div>)}
          </div>
          {pricing.savings > 0 && <div className="mt-4 flex justify-between text-xs text-emerald-200"><span>Ahorro aplicado</span><strong>{money(pricing.savings)}</strong></div>}
          <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-5"><span className="text-sm text-white/50">Total</span><strong className="font-serif text-4xl text-[#F0D8A8]">{money(total)}</strong></div>
          <p className="mt-2 text-xs text-white/42">Pagas cuando recibes.</p>
          <Link href="/carrito" className="mt-5 inline-block text-[9px] uppercase tracking-[.2em] text-white/55 underline underline-offset-4 hover:text-white">Editar mi selección</Link>
        </aside>
      </section>
    </main>
  );
}
