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

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
            Creemos en las <br />
            posibilidades
          </h1>{" "}
          <p className="max-w-3xl mx-auto text-sm md:text-base text-white/95 leading-relaxed mb-10">
            Una marca creada para quienes creen que el mundo es más grande de lo
            que les enseñaron.
          </p>
          <Link href="/invierte-con-wild">
            <button className="bg-[#B8893B] text-black px-10 py-4 rounded-2xl text-[10px] tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition">
              Explorar oportunidades
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
