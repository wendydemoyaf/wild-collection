import Image from "next/image";
import Link from "next/link";

const actions = [
  {
    name: "WhatsApp",
    text: "Habla con nosotros",
    href: "https://wa.me/593963826845",
    icon: "💬",
  },
  {
    name: "Instagram",
    text: "Síguenos en Instagram",
    href: "https://www.instagram.com/wildcollection1",
    icon: "📸",
  },
  {
    name: "TikTok",
    text: "Descubre contenido Wild",
    href: "https://www.tiktok.com/@wildcollection.ecu",
    icon: "♪",
  },
  {
    name: "Facebook",
    text: "Encuéntranos en Facebook",
    href: "https://www.facebook.com/wildcollectionparfums",
    icon: "f",
  },
  {
    name: "Página web",
    text: "Explora Wild Collection",
    href: "/",
    icon: "✦",
  },
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-black text-white px-5 py-8 flex justify-center">
      <section className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <p className="tracking-[0.35em] text-xs text-[#c8a45d] uppercase mb-5">
            Wild Collection
          </p>

          <h1 className="font-serif text-3xl leading-tight mb-3">
            Bienvenido a Wild Collection
          </h1>

          <p className="text-white/70 text-sm mb-6">
            Fragancias que dejan huella.
          </p>

          <div className="relative mx-auto w-36 h-36 rounded-full overflow-hidden border border-[#c8a45d]/30 shadow-[0_0_40px_rgba(200,164,93,0.18)]">
            <Image
              src="/luxury-p.webp"
              alt="Perfume Wild Collection"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {actions.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-[#c8a45d]/70 hover:bg-[#c8a45d]/10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a45d]/30 text-[#c8a45d]">
                {item.icon}
              </span>

              <span>
                <span className="block text-sm font-medium group-hover:text-[#c8a45d] transition">
                  {item.name}
                </span>
                <span className="block text-xs text-white/55">{item.text}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-3xl border border-[#c8a45d]/25 bg-[#c8a45d]/[0.06] p-6 mb-5">
          <h2 className="font-serif text-xl mb-2">
            ¿Quieres comprar nuevamente?
          </h2>
          <p className="text-sm text-white/65 mb-5">
            Escríbenos y te ayudamos a encontrar tu próxima fragancia.
          </p>
          <Link
            href="https://wa.me/593963826845"
            target="_blank"
            className="inline-flex w-full justify-center rounded-full bg-[#c8a45d] px-5 py-3 text-sm font-medium text-black hover:bg-[#e0bd74] transition"
          >
            Comprar por WhatsApp
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 mb-8">
          <h2 className="font-serif text-xl mb-2">
            ¿Te gustaría generar ingresos con Wild?
          </h2>
          <p className="text-sm text-white/60 mb-5">
            Conoce cómo empezar una actividad propia junto a Wild Collection.
          </p>
          <Link
            href="/invierte-con-wild"
            className="inline-flex w-full justify-center rounded-full border border-[#c8a45d]/60 px-5 py-3 text-sm text-[#c8a45d] hover:bg-[#c8a45d]/10 transition"
          >
            Conocer la oportunidad
          </Link>
        </div>

        <p className="text-center text-xs tracking-[0.2em] uppercase text-white/40">
          Más que perfumes. Una experiencia Wild.
        </p>
      </section>
    </main>
  );
}
