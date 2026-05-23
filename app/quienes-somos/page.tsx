import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] bg-[#050302] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between text-[11px] tracking-[0.28em] text-[#B8893B] bg-black/40 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      {/* SECCIÓN 1: HERO */}
      <section className="h-screen relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_35%,rgba(184,137,59,0.22),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.35),#000)]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
            Creemos en las <br />
            posibilidades
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80 leading-relaxed mb-10">
            Una marca creada para quienes creen que el mundo es más grande de lo
            que les enseñaron.
          </p>

          <Link href="/invierte-con-wild">
            <button className="bg-[#B8893B] text-black px-10 py-4 rounded-2xl text-[10px] tracking-[0.28em] uppercase hover:bg-[#F0D8A8] transition">
              Descubrir oportunidades
            </button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="py-28 md:py-36 px-6 md:px-20 bg-[#050302]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <div className="pt-4 max-w-xl relative">
            <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-[#B8893B]/10 blur-[120px] rounded-full" />

            <p className="text-[10px] tracking-[0.4em] text-[#B8893B] uppercase mb-6">
              Nuestra filosofía
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-[1.12] mb-12">
              <span className="whitespace-nowrap">
                Toda transformación comienza
              </span>
              <br />
              con una oportunidad.
            </h2>

            <div className="max-w-xl">
              <p className="text-sm md:text-lg text-white/70 leading-[1.7]">
                A veces comienza con una decisión. <br />
                Otras veces con una conversación. <br />Y muchas veces con la
                oportunidad correcta en el momento correcto.
              </p>

              <p className="mt-12 font-serif italic text-[#B8893B] text-lg md:text-2xl leading-[1.4] tracking-[0.02em]">
                El mundo es más grande de lo que nos enseñaron
              </p>
            </div>
          </div>

          <div className="h-[420px] md:h-[540px] rounded-3xl border border-[#B8893B]/20 overflow-hidden bg-black">
            <img
              src="/puerta.jpg"
              alt="Oportunidad Wild"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className="py-36 md:py-48 px-6 md:px-14  bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <p className="text-[10px] tracking-[0.5em] text-[#B8893B]/80 uppercase mb-8">
              Lo que nos define
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1]">
              El Espíritu WILD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="bg-[#0B0704] border border-[#B8893B]/20 rounded-3xl p-9 hover:border-[#B8893B]/60 hover:scale-[1.02] transition">
              <div className="w-full flex justify-start mb-4"></div>

              <h3 className="font-serif text-2xl mb-4">Libertad para elegir</h3>

              <p className="text-white/60 text-[15px] leading-relaxed">
                Tener opciones y elegir conscientemente tu propio camino.
              </p>
            </div>

            <div className="bg-[#0B0704] border border-[#B8893B]/20 rounded-3xl p-10 hover:border-[#B8893B]/60 hover:scale-[1.02] transition">
              <h3 className="font-serif text-2xl mb-5">
                Crecimiento constante
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                No importa dónde comienzas, importa en quién decides
                convertirte.
              </p>
            </div>

            <div className="bg-[#0B0704] border border-[#B8893B]/20 rounded-3xl p-10 hover:border-[#B8893B]/60 hover:scale-[1.02] transition">
              <h3 className="font-serif text-2xl mb-5">
                Explorar nuevas posibilidades
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                Las mejores oportunidades aparecen más allá de lo conocido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
      SECCIÓN 4: Manifiesto Wild.
      SECCIÓN 5: Nuestro impacto.
      SECCIÓN 6: Esto apenas comienza.
      SECCIÓN 7: CTA final.
      */}
    </main>
  );
}
