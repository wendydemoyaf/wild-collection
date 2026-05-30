"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function UneteWildPage() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [blocksVisible, setBlocksVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(true);
  const [experienceVisible, setExperienceVisible] = useState(true);
  const [decisionVisible, setDecisionVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(true);

  const heroRef = useRef(null);
  const blocksRef = useRef(null);
  const messageRef = useRef(null);
  const experienceRef = useRef(null);
  const decisionRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current)
            setHeroVisible(entry.isIntersecting);
          if (entry.target === blocksRef.current)
            setBlocksVisible(entry.isIntersecting);
          if (entry.target === messageRef.current)
            setMessageVisible(entry.isIntersecting);
          if (entry.target === experienceRef.current)
            setExperienceVisible(entry.isIntersecting);
          if (entry.target === decisionRef.current)
            setDecisionVisible(entry.isIntersecting);
          if (entry.target === contactRef.current)
            setContactVisible(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-80px 0px -80px 0px" }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (blocksRef.current) observer.observe(blocksRef.current);
    if (messageRef.current) observer.observe(messageRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (decisionRef.current) observer.observe(decisionRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen text-[#F0D8A8] overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(184,137,59,0.22),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(120,70,22,0.20),transparent_35%),linear-gradient(135deg,#050302,#120B06,#020202)]">
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

      <section
        ref={heroRef}
        className="min-h-screen pt-16 md:pt-28 px-6 md:px-20 flex items-center"
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

      <section ref={blocksRef} className="px-6 md:px-20 pb-16 md:pb-28">
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

      <section className="px-6 md:px-20 pb-16 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="h-[380px] md:h-[680px] rounded-[32px] overflow-hidden border border-[#B8893B]/20 shadow-2xl shadow-black/60">
            <img
              src="/wild-walk.webp"
              alt="Comunidad Wild Collection en movimiento"
              className="w-full h-full object-cover object-center opacity-90 hover:scale-[1.04] transition-all duration-[1200ms]"
            />
          </div>
        </div>
      </section>

      <section ref={messageRef} className="px-6 md:px-20 pb-14 md:pb-28">
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
            Muchas de las personas que hoy lideran equipos, viajan, generan
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
              QUIERO UNIRME
            </button>
          </a>
        </div>
      </section>

      <section ref={experienceRef} className="px-6 md:px-20 pb-8 md:pb-16">
        <div
          className={`max-w-5xl mx-auto text-center mb-10 transition-all duration-1000 ${
            experienceVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-5 uppercase">
            MÁS QUE VENTAS
          </p>

          <p className="text-white/65 text-sm md:text-lg leading-[1.8] max-w-3xl mx-auto">
            Las oportunidades más valiosas no siempre llegan en forma de dinero.
            También llegan en forma de experiencias, amistades y momentos que
            cambian tu historia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="h-[260px] md:h-[430px] rounded-[32px] overflow-hidden border border-[#B8893B]/20 shadow-2xl shadow-black/60">
            <img
              src="/wild-experience.webp"
              alt="Experiencias Wild Collection"
              className="w-full h-full object-cover object-center opacity-90 hover:scale-[1.04] transition-all duration-[1200ms]"
            />
          </div>
        </div>
      </section>

      <section
        ref={decisionRef}
        className="px-6 md:px-20 pt-2 pb-10 md:pt-8 md:pb-24"
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            decisionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase text-center">
            TODO EMPIEZA CON UNA DECISIÓN
          </p>

          <h2 className="font-serif text-4xl md:text-7xl leading-[1.05] text-center max-w-5xl mx-auto mb-16 md:mb-20">
            El crecimiento no ocurre de un día para otro.
            <br />
            Ocurre cuando decides avanzar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              [
                "Descubres una oportunidad",
                "Conoces una forma diferente de generar ingresos y crecer.",
              ],
              [
                "Aprendes haciendo",
                "Desarrollas habilidades de comunicación, liderazgo y ventas.",
              ],
              [
                "Construyes una nueva versión de ti",
                "La confianza, las relaciones y los resultados llegan cuando decides avanzar.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="border-t border-[#B8893B]/25 pt-8">
                <h3 className="font-serif text-2xl md:text-3xl leading-[1.2] mb-5">
                  {title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-[1.9]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={contactRef}
        className="px-6 md:px-20 pt-4 pb-16 md:pt-8 md:pb-28"
      >
        <div
          className={`max-w-4xl mx-auto text-center bg-black/35 border border-[#B8893B]/25 rounded-[32px] px-8 md:px-14 py-14 backdrop-blur-md transition-all duration-1000 ${
            contactVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            ¿TE GUSTARÍA CONOCER MÁS?
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
            No necesitas tener todas las respuestas para dar el primer paso.
          </h2>

          <p className="text-white/60 text-sm md:text-base leading-[1.8] max-w-2xl mx-auto mb-10">
            Escríbenos y te contamos cómo puedes empezar, resolver tus dudas y
            conocer si esta oportunidad es para ti.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20recibir%20información%20sobre%20trabajar%20con%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#B8893B] text-black rounded-2xl px-10 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
              QUIERO RECIBIR INFORMACIÓN
            </button>
          </a>
        </div>
      </section>

      <footer className="px-6 md:px-20 py-12 border-t border-[#B8893B]/20 bg-black/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-[#F0D8A8] tracking-[0.35em] text-xs mb-4">
              WILD COLLECTION
            </h3>
            <p className="text-white/45 text-sm">
              Siempre hay una nueva posibilidad.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-8 text-[10px] tracking-[0.3em] uppercase text-[#B8893B]">
            <Link href="/invierte-con-wild/unete-a-la-familia-wild">
              Trabaja con nosotros
            </Link>
            <Link href="/invierte-con-wild">Invierte con nosotros</Link>
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20recibir%20información%20sobre%20Wild%20Collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </div>
        </div>

        <p className="text-center text-white/30 text-xs mt-10">
          © 2026 Wild Collection
        </p>
      </footer>
    </main>
  );
}
