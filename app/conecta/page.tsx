import Image from "next/image";
import Link from "next/link";

const links = [
  ["✆", "WhatsApp", "https://wa.me/593963826845"],
  ["◎", "Instagram", "https://www.instagram.com/wildcollection1"],
  ["f", "Facebook", "https://www.facebook.com/wildcollectionparfums"],
  ["♪", "TikTok", "https://www.tiktok.com/@wildcollection.ecu"],
  ["⌂", "Página web", "/"],
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-[#f7efe7] px-6 py-10 text-[#1c1714] flex items-center justify-center">
      <section className="w-full max-w-sm text-center">
        <Image
          src="/logo.webp"
          alt="Wild Collection"
          width={150}
          height={90}
          priority
          className="mx-auto mb-8 h-auto w-36"
        />

        <p className="mb-3 text-xs uppercase tracking-[0.45em] text-[#b48a56]">
          Wild Collection
        </p>

        <h1 className="font-serif text-4xl leading-tight mb-5">
          Perfumería con esencia propia.
        </h1>

        <p className="mx-auto mb-10 max-w-xs text-sm leading-relaxed text-[#6f6258]">
          Fragancias inspiradas en algunos de los aromas más admirados del
          mundo.
        </p>

        <div className="space-y-3">
          {links.map(([icon, label, href]) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              className="flex items-center justify-center gap-3 rounded-full border border-[#d8c1a4] bg-white/45 px-6 py-4 text-sm tracking-wide text-[#2a211d] shadow-sm transition hover:border-[#b48a56] hover:bg-[#fffaf4]"
            >
              <span className="text-[#b48a56] text-base">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-[10px] uppercase tracking-[0.35em] text-[#b48a56]">
          Más que perfumes
        </p>
      </section>
    </main>
  );
}
