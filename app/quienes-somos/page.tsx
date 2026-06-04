"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ end, prefix = "" }: { end: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      let start = 0;
      const duration = 1000;
      const step = end / (duration / 16);

      const timer = setInterval(() => {
        start += step;

        if (start >= end) {
          setValue(end);
          clearInterval(timer);
        } else {
          setValue(Math.floor(start));
        }
      }, 16);

      observer.disconnect();
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("es-ES")}
    </span>
  );
}

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function QuienesSomosPage() {
  const hero = useInView();
  const filosofia = useInView();
  const esencia = useInView();
  const impacto = useInView();
  const vision = useInView();
  const cierre = useInView();

  return (
    <main className="min-h-screen text-[#F0D8A8] bg-[#050302] overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between text-[11px] tracking-[0.28em] text-[#B8893B] bg-black/40 backdrop-blur-md border-b border-[#B8893B]/20">
        <a href="/">WILD COLLECTION</a>
        <a href="/">VOLVER</a>
      </header>

      {/* SECCIÓN 1 */}
      <section className="min-h-[650px] md:h-screen relative flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_35%,rgba(184,137,59,0.22),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.35),#000)]" />
        </div>

        <div
          ref={hero.ref}
          className={`relative z-10 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
            hero.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
            Creemos en las <br />
            posibilidades
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80 leading-relaxed mb-10">
            Una marca creada para quienes creen que el mundo es más grande de lo
            que les enseñaron.
          </p>

          <a href="/invierte-con-wild">
            <button className="bg-[#B8893B] text-black px-10 py-4 rounded-2xl text-[10px] tracking-[0.28em] uppercase hover:bg-[#F0D8A8] transition">
              Descubrir oportunidades
            </button>
          </a>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="pt-16 pb-20 md:py-52 px-6 md:px-20 bg-[#050302]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <div
            ref={filosofia.ref}
            className={`pt-4 max-w-xl relative transition-all duration-1000 ease-out ${
              filosofia.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-[#B8893B]/10 blur-[120px] rounded-full" />

            <p className="text-[10px] tracking-[0.4em] text-[#B8893B] uppercase mb-6">
              Nuestra filosofía
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-[1.12] mb-12">
              Toda transformación comienza <br />
              con una oportunidad
            </h2>

            <p className="text-sm md:text-lg text-white/70 leading-[1.7]">
              A veces comienza con una decisión. <br />
              Otras veces con una conversación. <br />Y muchas veces con la
              oportunidad correcta en el momento correcto.
            </p>

            <p className="mt-12 font-serif italic text-[#B8893B] text-lg md:text-2xl leading-[1.4] tracking-[0.02em]">
              El mundo es más grande de lo que nos enseñaron
            </p>
          </div>

          <div
            className={`h-[360px] md:h-[540px] rounded-3xl border border-[#B8893B]/20 overflow-hidden bg-black transition-all duration-1000 md:delay-200 ease-out ${
              filosofia.isVisible
                ? "opacity-100 md:translate-y-0"
                : "opacity-100 md:opacity-0 md:translate-y-10"
            }`}
          >
            <img
              src="/puerta.webp"
              alt="Oportunidad Wild"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className="py-20 md:py-28 px-6 md:px-14 bg-black">
        <div ref={esencia.ref} className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-14 md:mb-28 transition-all duration-1000 ease-out ${
              esencia.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[10px] tracking-[0.5em] text-[#B8893B]/80 uppercase mb-8">
              Lo que nos define
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1]">
              El Espíritu WILD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div
              className={`bg-[#0B0704] border border-[#B8893B]/20 rounded-3xl p-9 hover:border-[#B8893B]/60 hover:scale-[1.02] transition-all duration-1000 ease-out ${
                esencia.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-serif text-2xl mb-4">Libertad para elegir</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                Tener opciones y elegir conscientemente tu propio camino.
              </p>
            </div>

            <div
              className={`bg-[#0B0704] border border-[#B8893B]/20 rounded-3xl p-10 hover:border-[#B8893B]/60 hover:scale-[1.02] transition-all duration-1000 delay-150 ease-out ${
                esencia.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="font-serif text-2xl mb-5">
                Crecimiento constante
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed">
                No importa dónde comienzas, importa en quién decides
                convertirte.
              </p>
            </div>

            <div
              className={`bg-[#0B0704] border border-[#B8893B]/20 rounded-3xl p-10 hover:border-[#B8893B]/60 hover:scale-[1.02] transition-all duration-1000 delay-300 ease-out ${
                esencia.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
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

      {/* SECCIÓN 4 */}
      <section className="py-20 md:py-36 px-6 md:px-20 bg-[#050302] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 bg-[#B8893B]/10 blur-[160px] rounded-full" />

        <div
          ref={impacto.ref}
          className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
            impacto.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[11px] tracking-[0.5em] text-[#B8893B]/80 uppercase mb-6">
            Lo que hemos construido juntos
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] mb-8">
            Miles de personas ya forman <br />
            parte de esta historia
          </h2>

          <p className="text-white/55 text-sm md:text-base leading-[1.8] max-w-2xl mx-auto mb-10">
            Lo que comenzó como una idea se convirtió en miles de personas
            descubriendo que el mundo es más grande de lo que les enseñaron
          </p>

          <div className="space-y-8">
            <div className="border-b border-[#B8893B]/20 pb-6">
              <p className="font-serif text-[#B8893B] text-5xl md:text-6xl mb-2">
                <CountUp end={100000} prefix="+" />
              </p>
              <p className="text-[11px] tracking-[0.08em] text-white/50">
                Personas han elegido Wild Collection
              </p>
            </div>

            <div className="border-b border-[#B8893B]/20 pb-6">
              <p className="font-serif text-[#B8893B] text-5xl md:text-6xl mb-2">
                <CountUp end={300} prefix="+" />
              </p>
              <p className="text-[11px] tracking-[0.08em] text-white/50">
                Distribuidores independientes
              </p>
            </div>

            <div className="border-b border-[#B8893B]/20 pb-6">
              <p className="font-serif text-[#B8893B] text-5xl md:text-6xl mb-2">
                <CountUp end={200} prefix="+" />
              </p>
              <p className="text-[11px] tracking-[0.08em] text-white/50">
                Líderes desarrollados
              </p>
            </div>

            <div>
              <p className="font-serif text-[#B8893B] text-5xl md:text-6xl mb-2">
                1 propósito
              </p>
              <p className="text-[11px] tracking-[0.08em] text-white/50">
                Expandir posibilidades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 */}
      <section className="py-20 md:py-28 px-6 md:px-20 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] md:h-[540px] rounded-[36px] overflow-hidden border border-[#B8893B]/20 mt-4 md:mt-14">
            <img
              src="/vision.webp"
              alt="Nuestra visión"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div
            ref={vision.ref}
            className={`max-w-xl md:-mt-6 transition-all duration-1000 ease-out ${
              vision.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[12px] tracking-[0.25em] text-[#B8893B]/80 mb-6">
              Nuestra visión
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] mb-10">
              Esto es solo el comienzo
            </h2>

            <div className="space-y-8 text-white/70 text-sm md:text-base leading-[1.9]">
              <p>No soñamos con ser una empresa más de perfumería.</p>

              <p>
                Soñamos con construir una marca que inspire a las personas a
                descubrir nuevas posibilidades y recordar que el mundo es más
                grande de lo que les enseñaron.
              </p>

              <p>Hoy estamos construyendo esta visión en Ecuador.</p>

              <p>Mañana queremos compartirla con muchas más personas.</p>

              <p className="text-[#B8893B] font-serif italic text-base md:text-lg">
                Porque cuando alguien descubre de lo que es capaz, todo cambia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 */}
      <section className="py-20 md:py-44 px-6 md:px-20 bg-[#050302] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 bg-[#B8893B]/10 blur-[160px] rounded-full" />

        <div
          ref={cierre.ref}
          className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
            cierre.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[12px] tracking-[0.25em] text-[#B8893B]/80 mb-6">
            Lo que sigue es tu historia
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] mb-8">
            El mundo es más grande <br />
            de lo que te enseñaron.
          </h2>

          <p className="text-white/70 text-xs md:text-sm leading-[1.9] max-w-2xl mx-auto mb-6">
            Lo que comenzó como una idea hoy inspira a miles de personas a mirar
            más allá de lo conocido.
          </p>

          <p className="text-white/80 font-serif italic text-lg md:text-2xl mb-12">
            ¿Seguirás donde estás o explorarás una posibilidad más?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#colecciones">
              <button className="bg-[#B8893B] text-black px-9 py-4 rounded-2xl text-[10px] tracking-[0.25em] uppercase hover:bg-[#F0D8A8] transition">
                Explorar perfumes
              </button>
            </a>

            <a href="/invierte-con-wild">
              <button className="border border-[#B8893B]/40 text-[#F0D8A8] px-9 py-4 rounded-2xl text-[10px] tracking-[0.25em] uppercase hover:bg-[#B8893B]/10 transition">
                DESCUBRIR LA OPORTUNIDAD
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
