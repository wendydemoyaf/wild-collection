"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import StoreHeader from "../components/StoreHeader";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, itemCount, promotion, total, clearCart } = useCart();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [orderId, setOrderId] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!promotion) return;
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const customer = Object.fromEntries(form.entries());
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer, items: cart.map(({ slug, name, quantity }) => ({ slug, name, quantity })), promotion: promotion.label, total }),
    });
    if (!response.ok) { setStatus("error"); return; }
    const data = await response.json();
    setOrderId(data.orderId);
    setStatus("success");
    clearCart();
  }

  if (!promotion && status !== "success") {
    return <main className="min-h-screen bg-[#050302] text-white"><StoreHeader /><div className="mx-auto max-w-xl px-6 py-20 text-center"><h1 className="font-serif text-4xl">Completa una promoción</h1><p className="mt-4 text-white/60">Debes elegir 2, 5 o 7 perfumes antes de finalizar.</p><Link href="/carrito" className="mt-8 inline-block rounded-full bg-[#B8893B] px-7 py-3 text-xs font-bold uppercase tracking-[.2em] text-black">Volver al carrito</Link></div></main>;
  }

  if (status === "success") {
    return <main className="min-h-screen bg-[#050302] text-white"><StoreHeader /><div className="mx-auto max-w-2xl px-6 py-24 text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-500/20 text-4xl text-emerald-300">✓</div><h1 className="mt-7 font-serif text-5xl">¡Pedido recibido!</h1><p className="mt-4 text-white/65">Tu pedido <strong className="text-[#F0D8A8]">{orderId}</strong> quedó registrado. Te contactaremos para confirmar los datos antes del envío.</p><Link href="/" className="mt-8 inline-block rounded-full border border-[#B8893B]/50 px-7 py-3 text-xs uppercase tracking-[.2em] text-[#F0D8A8]">Volver al inicio</Link></div></main>;
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,.16),transparent_32%),#050302] text-white">
      <StoreHeader />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_360px] md:px-10 md:py-20">
        <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[.035] p-6 md:p-9">
          <p className="text-[10px] uppercase tracking-[.3em] text-[#B8893B]">Pago contra entrega</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Datos para tu envío</h1>
          <p className="mt-3 text-sm text-white/55">Revisaremos los datos y te contactaremos para confirmar antes de despachar.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[['name','Nombre y apellido','text'],['phone','WhatsApp','tel'],['city','Ciudad','text'],['province','Provincia','text']].map(([name,label,type]) => <label key={name} className="text-xs text-white/65">{label}<input required name={name} type={type} className="mt-2 w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-base text-white outline-none focus:border-[#B8893B]" /></label>)}
            <label className="text-xs text-white/65 sm:col-span-2">Dirección completa<textarea required name="address" rows={3} className="mt-2 w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-base text-white outline-none focus:border-[#B8893B]" /></label>
            <label className="text-xs text-white/65 sm:col-span-2">Referencia de entrega<textarea name="reference" rows={2} className="mt-2 w-full rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-base text-white outline-none focus:border-[#B8893B]" /></label>
          </div>
          {status === "error" && <p className="mt-5 rounded-2xl bg-red-500/10 p-4 text-sm text-red-200">No pudimos registrar el pedido. Revisa tu conexión e inténtalo nuevamente.</p>}
          <button disabled={status === "sending"} className="mt-8 w-full rounded-full bg-[#B8893B] px-6 py-4 text-[10px] font-bold uppercase tracking-[.24em] text-black disabled:opacity-50">{status === "sending" ? "Registrando…" : "Confirmar pedido"}</button>
        </form>
        <aside className="h-fit rounded-3xl border border-[#B8893B]/25 bg-[#0B0704] p-6">
          <h2 className="font-serif text-2xl">Tu pedido</h2>
          <div className="mt-5 space-y-3">{cart.map((item) => <div key={item.slug} className="flex justify-between gap-3 text-sm text-white/65"><span>{item.quantity} × {item.name}</span></div>)}</div>
          <div className="mt-5 border-t border-white/10 pt-5"><p className="text-sm text-[#F0D8A8]">{promotion?.label}</p><div className="mt-4 flex items-end justify-between"><span className="text-sm text-white/50">Total</span><strong className="font-serif text-3xl text-[#F0D8A8]">${total?.toFixed(2)}</strong></div><p className="mt-2 text-xs text-white/45">Pagas cuando recibes.</p></div>
        </aside>
      </section>
    </main>
  );
}
