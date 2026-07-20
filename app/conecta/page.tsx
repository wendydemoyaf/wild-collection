import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import StoreHeader from "../components/StoreHeader";

const links = [
  { name: "WhatsApp", href: "https://wa.me/593963826845", detail: "Pedidos y asesoría" },
  { name: "Instagram", href: "https://www.instagram.com/wildcollection1", detail: "@wildcollection1" },
  { name: "Facebook", href: "https://www.facebook.com/wildcollectionparfums", detail: "Wild Collection Parfums" },
  { name: "TikTok", href: "https://www.tiktok.com/@wildcollection.ecu", detail: "@wildcollection.ecu" },
  { name: "Colecciones", href: "/#colecciones", detail: "Descubre tu próximo perfume" },
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-[#F0E8DE]">
      <StoreHeader />
      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(240,232,222,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(240,232,222,.12)_1px,transparent_1px)] [background-size:25vw_25vh] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-[9px] font-semibold uppercase tracking-[.4em] text-[#D6BE98]">Conecta con Wild</p>
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(4rem,10vw,9rem)] leading-[.8] tracking-[-.06em]">Todo nuestro universo, en un solo lugar.</h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/52">Elige dónde quieres encontrarnos, conversar o descubrir tu próxima fragancia.</p>

          <div className="mt-14 border-t border-white/14">
            {links.map((item, index) => (
              <Link key={item.name} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="group grid grid-cols-[35px_1fr_auto] items-center gap-3 border-b border-white/14 py-5 transition hover:border-[#D6BE98] hover:text-[#D6BE98] md:grid-cols-[55px_1fr_1fr_auto] md:py-7">
                <span className="font-mono text-[9px] text-[#B99158]">0{index + 1}</span>
                <strong className="font-serif text-2xl font-normal md:text-4xl">{item.name}</strong>
                <span className="hidden text-[9px] uppercase tracking-[.2em] text-white/38 md:block">{item.detail}</span>
                <span className="text-xl transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
