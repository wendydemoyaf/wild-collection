import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "WhatsApp", href: "https://wa.me/593963826845", icon: "☏" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wildcollection1",
    icon: "◎",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wildcollectionparfums",
    icon: "f",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wildcollection.ecu",
    icon: "♪",
  },
  { name: "Página web", href: "/", icon: "○" },
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-[#f7efe7] px-6 py-10 text-[#1c1714] flex items-center justify-center">
      <section className="w-full max-w-sm text-center">
        <Image
          src="/logo.webp"
          alt="Wild Collection"
          width={160}
          height={100}
          priority
          className="mx-auto mb-10 h-auto w-40"
        />

        <p className="mb-12 text-xs uppercase tracking-[0.45em] text-[#b48a56]">
          Wild Collection
        </p>

        <div className="space-y-3">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="group flex items-center justify-center gap-3 rounded-full border border-[#d8c1a4] bg-white/45 px-6 py-4 text-sm tracking-wide text-[#2a211d] shadow-sm transition hover:border-[#b48a56] hover:bg-[#fffaf4]"
            >
              <span className="text-lg leading-none text-[#1c1714] group-hover:text-[#b48a56]">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-[10px] uppercase tracking-[0.35em] text-[#b48a56]">
          Más que perfumes
        </p>
      </section>
    </main>
  );
}
