"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function UneteWildPage() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [blocksVisible, setBlocksVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(true);

  const heroRef = useRef(null);
  const blocksRef = useRef(null);
  const messageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current) {
            setHeroVisible(entry.isIntersecting);
          }

          if (entry.target === blocksRef.current) {
            setBlocksVisible(entry.isIntersecting);
          }

          if (entry.target === messageRef.current) {
            setMessageVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (blocksRef.current) observer.observe(blocksRef.current);
    if (messageRef.current) observer.observe(messageRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen text-[#F0D8A8] overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(184,137,59,0.22),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(120,70,22,0.20),transparent_35%),linear-gradient(135deg,#050302,#120B06,#020202)]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B] bg-black/45 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link
          href="/"
          className="hover:text-[#F0D8A8] transition-all duration-500"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/"
          className="hover:text-[#F0D8A8] transition-all duration-500"
        >
          VOLVER
        </Link>
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        className="min-h-screen pt-16 md:pt-26 px-6 md:px-20 flex items-center"
      >
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.6em] text-[#B8893B] mb-6 uppercase">
            Únete a la familia Wild
          </p>

          <h1 className="font-serif text-5xl md:text-8xl leading-none mb-8 text-[#F0D8A8]">
            Construye ingresos, relaciones y una versión más grande de ti
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/65 leading-relaxed mb-10">
            Todo comienza con una decisión: aprender algo nuevo, conocer
            personas y descubrir de lo que eres capaz.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20unirme%20a%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black/70 text-[#F0D8A8] border border-[#B8893B]/50 rounded-2xl px-10 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#B8893B]/20 hover:border-[#F0D8A8] hover:text-white transition-all duration-500">
              Quiero unirme
            </button>
          </a>
        </div>
      </section>

      {/* BLOQUES */}
      <section ref={blocksRef} className="px-6 md:px-20 pb-28">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto transition-all duration-1000 ${
            blocksVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            [
              "Ingresos según tu esfuerzo",
              "No existe un techo impuesto. Tus resultados dependen de tu actividad, tu aprendizaje y tu constancia.",
            ],
            [
              "Aprendes desde cero",
              "No necesitas experiencia previa. Recibes acompañamiento, formación y herramientas para desarrollar habilidades que te servirán dentro y fuera de Wild.",
            ],
            [
              "Una comunidad que impulsa",
              "Crecer es más fácil cuando caminas junto a personas que también decidieron ir por más.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              className={`bg-black/35 border border-[#B8893B]/25 rounded-3xl px-7 py-8 backdrop-blur-md shadow-[0_0_70px_rgba(0,0,0,0.35)] transition-all duration-700 ${
                blocksVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h2 className="font-serif text-2xl text-[#F0D8A8] mb-4">
                {title}
              </h2>

              <p className="text-sm text-white/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENSAJE INSPIRACIONAL */}
      <section ref={messageRef} className="px-6 md:px-20 pb-32">
        <div
          className={`max-w-5xl mx-auto bg-[#F0D8A8]/10 border border-[#B8893B]/30 rounded-3xl px-8 md:px-14 py-12 text-center backdrop-blur-md transition-all duration-1000 ${
            messageVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] tracking-[0.45em] text-[#B8893B] mb-5 uppercase">
            Oportunidad real
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-[#F0D8A8] mb-6">
            Todos empiezan en algún lugar
          </h2>

          <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-3xl mx-auto mb-10">
            MMuchas de las personas que hoy lideran equipos, viajan, generan
            ingresos y construyen una carrera dentro de Wild Collection
            comenzaron exactamente igual que tú: con dudas, sin experiencia y
            buscando una oportunidad.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20trabajar%20con%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#B8893B] text-black rounded-2xl px-10 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
              QUIERO CONOCER MÁS
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
