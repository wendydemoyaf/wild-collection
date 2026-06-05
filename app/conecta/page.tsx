import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Send, Globe, Music2 } from "lucide-react";

const links = [
  { name: "WhatsApp", href: "https://wa.me/593963826845", icon: Send },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wildcollection1",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wildcollectionparfums",
    icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wildcollection.ecu",
    icon: Music2,
  },
  { name: "Página web", href: "/", icon: Globe },
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
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center justify-center gap-3 rounded-full border border-[#d8c1a4] bg-white/45 px-6 py-4 text-sm tracking-wide text-[#2a211d] shadow-sm transition hover:border-[#b48a56] hover:bg-[#fffaf4]"
              >
                <Icon
                  size={18}
                  strokeWidth={1.6}
                  className="text-[#1c1714] transition group-hover:text-[#b48a56]"
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-[10px] uppercase tracking-[0.35em] text-[#b48a56]">
          Más que perfumes
        </p>
      </section>
    </main>
  );
}
