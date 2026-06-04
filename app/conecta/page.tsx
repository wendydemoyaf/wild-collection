import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    text: "Síguenos en Instagram",
    href: "https://www.instagram.com/wildcollection1",
    icon: "◎",
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
    name: "WhatsApp",
    text: "Habla con nosotros",
    href: "https://wa.me/593963826845",
    icon: "✆",
  },
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[92vh] overflow-hidden flex items-end justify-center px-5 pb-12">
        <Image
          src="/luxury-p.webp"
          alt="Perfume Wild Collection"
          fill
          priority
          className="object-cover object-center opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,164,93,0.18),transparent_55%)]" />

        <div className="relative z-10 w-full max-w-md text-center">
          <Image
            src="/logo.webp"
            alt="Wild Collection"
            width={140}
            height={80}
            priority
            className="mx-auto mb-8 h-auto w-32"
          />

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c8a45d]">
            Wild Collection
          </p>

          <h1 className="font-serif text-4xl leading-tight mb-4">
            Inspirados en algunos de los aromas más admirados del mundo.
          </h1>

          <Link
            href="/quienes-somos"
            className="mt-4 inline-flex rounded-full bg-[#c8a45d] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#e0bd74]"
          >
            Explorar la marca
          </Link>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto max-w-md">
          <h2 className="font-serif text-3xl mb-3">Conecta con Wild</h2>
          <p className="mb-7 text-sm text-white/60">
            Síguenos, descubre contenido y mantente cerca de nuestra comunidad.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#c8a45d]/70 hover:bg-[#c8a45d]/10"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a45d]/40 text-[#c8a45d]">
                  {item.icon}
                </span>
                <span className="block text-sm font-medium group-hover:text-[#c8a45d]">
                  {item.name}
                </span>
                <span className="mt-1 block text-xs text-white/50">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-md">
          <div className="relative mb-7 h-72 overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/wild-team.webp"
              alt="Comunidad Wild Collection"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-3xl mb-3">Más que perfumes</h2>
          <p className="text-white/65 leading-relaxed">
            Construimos experiencias, relaciones y nuevas posibilidades.
          </p>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-md rounded-[2rem] border border-[#c8a45d]/25 bg-[#c8a45d]/[0.06] p-7">
          <h2 className="font-serif text-2xl mb-3">
            ¿Quieres comprar nuevamente?
          </h2>
          <p className="mb-6 text-sm text-white/65">
            Escríbenos y encuentra tu próxima fragancia.
          </p>

          <Link
            href="https://wa.me/593963826845"
            target="_blank"
            className="inline-flex w-full justify-center rounded-full bg-[#c8a45d] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e0bd74]"
          >
            Comprar por WhatsApp
          </Link>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-md">
          <div className="relative mb-7 h-72 overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/wild-experience.webp"
              alt="Experiencia Wild Collection"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-3xl mb-4">
            Algunas personas llegaron por un perfume.
          </h2>

          <p className="mb-7 text-white/65 leading-relaxed">
            Y terminaron encontrando algo mucho más grande.
          </p>

          <Link
            href="/invierte-con-wild"
            className="inline-flex w-full justify-center rounded-full border border-[#c8a45d]/70 px-6 py-3 text-sm text-[#c8a45d] transition hover:bg-[#c8a45d]/10"
          >
            Conocer la oportunidad
          </Link>
        </div>
      </section>

      <section className="px-5 pb-12 pt-6 text-center">
        <p className="font-serif text-2xl">Más que perfumes.</p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
          Una experiencia Wild.
        </p>
      </section>
    </main>
  );
}
