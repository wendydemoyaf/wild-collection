import Image from "next/image";
import Link from "next/link";

const Icon = ({ type }: { type: string }) => (
  <span className="flex h-5 w-5 items-center justify-center text-[#1c1714] group-hover:text-[#b48a56]">
    {type === "wa" && "◌"}
    {type === "ig" && "◎"}
    {type === "fb" && "f"}
    {type === "tt" && "♪"}
    {type === "web" && "⌁"}
  </span>
);

const links = [
  { name: "WhatsApp", href: "https://wa.me/593963826845", icon: "wa" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wildcollection1",
    icon: "ig",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wildcollectionparfums",
    icon: "fb",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@wildcollection.ecu",
    icon: "tt",
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
              className="group grid grid-cols-[24px_1fr_24px] items-center rounded-full border border-[#d9c5aa] bg-white/35 px-5 py-4 text-sm tracking-[0.16em] text-[#1c1714] transition hover:border-[#b48a56] hover:bg-white/60"
            >
              <Icon type={item.icon} />
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
