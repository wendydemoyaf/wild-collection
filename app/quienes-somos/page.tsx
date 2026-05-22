import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] bg-[#050302] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between text-[11px] tracking-[0.28em] text-[#B8893B] bg-black/40 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      {/* ================= SECCIÓN 1: HERO ================= */}
      <section className="h-screen relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black">
          {/* Aquí irá la imagen editorial premium */}
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_35%,rgba(184,137,59,0.22),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.35),#000)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] uppercase mb-6">
            Quiénes somos
          </p>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Más que perfumes. <br />
            Una invitación a descubrir nuevas posibilidades.
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-white/65 leading-relaxed mb-10">
            Creamos fragancias de alta calidad inspiradas en algunos de los
            aromas más admirados del mundo y construimos una comunidad para
            quienes creen que siempre existe una posibilidad más.
          </p>

          <Link href="/#colecciones">
            <button className="bg-[#B8893B] text-black px-10 py-4 rounded-2xl text-[10px] tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition">
              Explorar colecciones
            </button>
          </Link>
        </div>
      </section>

      {/*
      ================= PRÓXIMAS SECCIONES =================

      SECCIÓN 2:
      Creemos que una oportunidad puede cambiar una vida.

      SECCIÓN 3:
      Nuestra esencia / tarjetas.

      SECCIÓN 4:
      Manifiesto Wild.

      SECCIÓN 5:
      Nuestro impacto.

      SECCIÓN 6:
      Esto apenas comienza.

      SECCIÓN 7:
      CTA final.
      */}
    </main>
  );
}
