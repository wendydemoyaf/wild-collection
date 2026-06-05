import React from "react";
import Image from "next/image";
import Link from "next/link";

const icons: Record<string, React.ReactNode> = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.4ZM12.2 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 1 1 8.6 4.8Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1-.4.2-.7.1a8 8 0 0 1-2.3-1.4 8.5 8.5 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.1 8.1h2.4V4.2c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 6v3.4H4.6v4.4h3.8V24h4.7v-6.2h3.7l.6-4.4h-4.3v-3c0-1.3.3-2.3 2-2.3Z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 2c.4 3 2.1 4.8 5 5v4.1c-1.8.2-3.4-.4-5-1.5v7.6c0 9.6-10.5 8.9-13.2 4.1-1.8-3.3-.7-8.9 5.2-9.1v4.3c-.6.1-1.2.3-1.7.7-1.6 1.2-1.3 3.7.6 4.4 1.8.7 4.2-.4 4.2-3.2V2h4.9Z" />
    </svg>
  ),
  web: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3C9.5 5.5 8.2 8.5 8.2 12S9.5 18.5 12 21" />
    </svg>
  ),
};

const links = [
  { name: "WhatsApp", href: "https://wa.me/593963826845", icon: "whatsapp" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wildcollection1",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wildcollectionparfums",
    icon: "facebook",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wildcollection.ecu",
    icon: "tiktok",
  },
  { name: "Página web", href: "/", icon: "web" },
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-[#f7efe7] px-6 py-10 text-[#1c1714] flex items-center justify-center">
      <section className="w-full max-w-sm text-center">
        <Image
          src="/logo.webp"
          alt="Wild Collection"
          width={170}
          height={100}
          priority
          className="mx-auto mb-12 h-auto w-40"
        />

        <p className="mb-12 text-xs uppercase tracking-[0.48em] text-[#b48a56]">
          Wild Collection
        </p>

        <div className="space-y-3">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="group grid grid-cols-[24px_1fr_24px] items-center rounded-full border border-[#d9c5aa] bg-white/35 px-5 py-4 text-sm tracking-[0.16em] transition hover:border-[#b48a56] hover:bg-white/60"
            >
              <span className="text-[#1c1714] group-hover:text-[#b48a56] [&>svg]:h-5 [&>svg]:w-5">
                {icons[item.icon]}
              </span>
              <span>{item.name}</span>
              <span />
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
