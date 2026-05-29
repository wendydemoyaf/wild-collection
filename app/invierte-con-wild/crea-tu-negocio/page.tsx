"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CreaTuNegocioPage() {
  // ESTADOS DE ANIMACIÓN
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionTwoVisible, setSectionTwoVisible] = useState(false);
  const [wildVisible, setWildVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [visualVisible, setVisualVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(true);
  const [faqVisible, setFaqVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(true);

  // REFERENCIAS DE SECCIONES
  const heroRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const wildRef = useRef(null);
  const testimonialsRef = useRef(null);
  const visualRef = useRef(null);
  const stepsRef = useRef(null);
  const faqRef = useRef(null);
  const finalRef = useRef(null);

  // DETECTOR DE SCROLL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current) {
            setHeroVisible(entry.isIntersecting);
          }

          if (entry.target === sectionTwoRef.current) {
            setSectionTwoVisible(entry.isIntersecting);
          }

          if (entry.target === wildRef.current) {
            setWildVisible(entry.isIntersecting);
          }

          if (entry.target === testimonialsRef.current) {
            setTestimonialsVisible(entry.isIntersecting);
          }

          if (entry.target === visualRef.current) {
            setVisualVisible(entry.isIntersecting);
          }
          if (entry.target === stepsRef.current) {
            setStepsVisible(entry.isIntersecting);
          }

          if (entry.target === faqRef.current) {
            setFaqVisible(entry.isIntersecting);
          }

          if (entry.target === finalRef.current) {
            setFinalVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (sectionTwoRef.current) observer.observe(sectionTwoRef.current);
    if (wildRef.current) observer.observe(wildRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (visualRef.current) observer.observe(visualRef.current);
    if (stepsRef.current) observer.observe(stepsRef.current);
    if (faqRef.current) observer.observe(faqRef.current);
    if (finalRef.current) observer.observe(finalRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#F0D8A8] overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 flex justify-between text-[10px] md:text-xs tracking-[0.3em] text-[#B8893B] bg-black/40 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link href="/" className="hover:text-[#F0D8A8] transition">
          WILD COLLECTION
        </Link>

        <Link
          href="/invierte-con-wild"
          className="hover:text-[#F0D8A8] transition"
        >
          VOLVER
        </Link>
      </header>

      {/* SECCIÓN 1: HERO PRINCIPAL */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center pt-28 px-6 md:px-20 relative transition-all duration-700 ease-out"
      >
        <img
          src="/hombre1.jpg"
          alt="Crea tu negocio con Wild"
          className="absolute inset-0 w-full h-full object-cover object-[58%_20%] opacity-80 md:translate-x-24"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.65)_40%,rgba(0,0,0,0.20)_100%)]" />

        <div
          className={`relative z-10 max-w-3xl pl-6 md:pl-12 transition-all duration-1000 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] mb-6 uppercase">
            CREA TU NEGOCIO CON WILD
          </p>

          <h1 className="font-serif text-4xl md:text-7xl leading-[1.1] mb-6">
            Construye algo propio <br />
            con una marca que ya <br />
            está en movimiento.
          </h1>

          <p className="text-white/70 text-sm md:text-lg leading-[1.8] mb-10 max-w-[520px]">
            Empieza con un kit, acceso a formación continua y una comunidad que
            impulsa tu crecimiento desde el primer paso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20invertir%20con%20Wild%20Collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#B8893B] text-black px-8 py-4 rounded-2xl text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#F0D8A8] hover:scale-[1.03] active:scale-[0.97]">
                Hablar con un asesor
              </button>
            </a>

            <button
              onClick={() => {
                const offset = 100;
                const elementPosition =
                  stepsRef.current?.getBoundingClientRect().top || 0;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
              className="w-fit border border-[#B8893B]/50 text-[#F0D8A8] px-5 md:px-8 py-3 md:py-4 rounded-2xl text-[9px] md:text-[10px] tracking-[0.18em] md:tracking-[0.3em] uppercase hover:bg-[#B8893B]/10 transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
            >
              Cómo empezar
            </button>
          </div>

          <p
            className={`mt-6 text-white/40 text-[11px] tracking-[0.05em] transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            Más de 100.000 personas ya forman parte de Wild Collection
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: OPORTUNIDAD / BENEFICIOS */}
      <section
        ref={sectionTwoRef}
        className="pt-20 md:pt-28 pb-10 md:pb-12 px-6 md:px-20 bg-[#050302] transition-all duration-700 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`font-serif text-3xl md:text-5xl leading-[1.05] mb-6 max-w-[980px] transition-all duration-1000 ${
              sectionTwoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Más que un kit. Una oportunidad en movimiento.
          </h2>

          <p
            className={`text-white/60 text-sm md:text-lg leading-[1.8] max-w-[700px] mb-12 transition-all duration-1000 ${
              sectionTwoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            Empiezas con productos. Pero también con formación, comunidad y
            herramientas para crecer junto a una marca que sigue avanzando.
          </p>

          <div
            className={`w-full h-px bg-gradient-to-r from-[#B8893B]/0 via-[#B8893B]/40 to-[#B8893B]/0 mb-10 transition-all duration-1000 ${
              sectionTwoVisible
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-50"
            }`}
            style={{ transitionDelay: "0.25s" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              [
                "Formación continua",
                "Aprende ventas, comunicación y desarrollo personal junto a líderes y experiencias que impulsan tu crecimiento.",
              ],
              [
                "Comunidad",
                "Rodéate de personas que también decidieron construir algo propio y avanzar más allá de lo conocido.",
              ],
              [
                "Productos con identidad",
                "Fragancias diseñadas para conectar con personas y crear experiencias que dejan huella.",
              ],
              [
                "Crecimiento real",
                "Desarrolla una actividad que puede crecer a tu ritmo mientras construyes experiencia, relaciones y nuevas oportunidades.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className={`group transition-all duration-700 hover:-translate-y-1 ${
                  sectionTwoVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-serif text-xl md:text-2xl mb-4 relative inline-block">
                  {title}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#B8893B] transition-all duration-500 group-hover:w-full" />
                </h3>

                <p className="text-white/60 text-sm leading-[1.8] max-w-[420px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: WILD EN MOVIMIENTO */}
      <section
        ref={wildRef}
        className="pt-20 md:pt-28 pb-8 md:pb-10 px-6 md:px-20 bg-black transition-all duration-700 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            WILD EN MOVIMIENTO
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-16 max-w-[900px]">
            Más que vender perfumes. <br />
            Construyes experiencias, relaciones y camino propio.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`md:col-span-2 h-[520px] md:h-[700px] overflow-hidden rounded-[28px] shadow-2xl shadow-black/70 transition-all duration-1000 ${
                wildVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src="/hero-sebas.webp"
                alt="Wild en movimiento"
                loading="lazy"
                className="w-full h-full object-cover block brightness-[0.78] transition-all duration-[1200ms] ease-out hover:scale-[1.05] hover:brightness-[0.92]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div
                className={`h-[300px] md:h-[337px] overflow-hidden rounded-[28px] shadow-2xl shadow-black/70 transition-all duration-1000 ${
                  wildVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.15s" }}
              >
                <img
                  src="/luxury-p.webp"
                  alt="Perfume Wild Collection"
                  loading="lazy"
                  className="w-full h-full object-cover block brightness-[0.78] transition-all duration-[1200ms] ease-out hover:scale-[1.05] hover:brightness-[0.92]"
                />
              </div>

              <div
                className={`h-[300px] md:h-[337px] overflow-hidden rounded-[28px] shadow-2xl shadow-black/70 transition-all duration-1000 ${
                  wildVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <img
                  src="/wild-team.webp"
                  alt="Equipo Wild Collection"
                  loading="lazy"
                  className="w-full h-full object-cover block brightness-[0.78] transition-all duration-[1200ms] ease-out hover:scale-[1.05] hover:brightness-[0.92]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: TESTIMONIOS */}
      <section
        ref={testimonialsRef}
        className="pt-12 md:pt-16 pb-16 md:pb-20 px-6 md:px-20 bg-[#050302] transition-all duration-700 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            EXPERIENCIAS REALES
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-16 max-w-[820px]">
            Algunas historias comienzan con una decisión pequeña.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              [
                "/andrea.webp",
                "Andrea",
                "Quito",
                "Empecé buscando una nueva oportunidad y terminé encontrando una actividad que disfruto construir cada día.",
              ],
              [
                "/mateo.webp",
                "Mateo",
                "Guayaquil",
                "Lo que más valoré fue sentir que no estaba empezando solo. La comunidad y la formación hicieron la diferencia.",
              ],
              [
                "/valentina.webp",
                "Valentina",
                "Cuenca",
                "Más que vender productos, sentí que estaba desarrollando algo propio y creciendo junto a otras personas.",
              ],
            ].map(([image, name, city, text], index) => (
              <div
                key={name}
                className={`group border-t border-[#B8893B]/15 pt-8 transition-all duration-700 hover:translate-x-1 ${
                  testimonialsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 mb-7 overflow-hidden rounded-full bg-[#120b07] border border-[#B8893B]/20">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover block brightness-[0.82] transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-[0.95]"
                  />
                </div>

                <p className="text-[#B8893B] text-[10px] tracking-[0.35em] uppercase mb-5">
                  {name} · {city}
                </p>

                <p className="text-white/65 text-sm leading-[2] max-w-[340px]">
                  “{text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: FULL VISUAL / CTA */}
      <section
        ref={visualRef}
        className="relative min-h-[85vh] px-6 md:px-20 flex items-center overflow-hidden bg-black transition-all duration-700 ease-out"
      >
        <img
          src="/wild-night.webp"
          alt="Wild Collection movimiento"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover block brightness-[0.55]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />

        <div
          className={`relative z-10 max-w-4xl transition-all duration-1000 ${
            visualVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            DECIDIR MOVERSE
          </p>

          <h2 className="font-serif text-4xl md:text-7xl leading-[1.05] max-w-[850px] mb-10">
            Hay personas que esperan. <br />Y otras que empiezan.
          </h2>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20invertir%20con%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#B8893B] text-black px-8 py-4 rounded-2xl text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#F0D8A8] hover:scale-[1.03] active:scale-[0.97]">
              Empezar ahora
            </button>
          </a>
        </div>
      </section>

      {/* SECCIÓN 6: ¿CÓMO EMPIEZAS? */}
      <section
        ref={stepsRef}
        className="pt-14 md:pt-28 pb-12 md:pb-20 px-6 md:px-20 bg-black"
      >
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            stepsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            ¿CÓMO EMPIEZAS?
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-16 max-w-[800px]">
            Así comienza tu camino
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute top-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B8893B]/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
              {[
                [
                  "CONOCES LA OPORTUNIDAD",
                  "Solicitas información y entiendes cómo funciona el modelo.",
                ],
                [
                  "RECIBES TU KIT",
                  "Obtienes los productos y herramientas para comenzar.",
                ],
                [
                  "COMIENZAS A VENDER",
                  "Empiezas a compartir y ofrecer los productos.",
                ],
                [
                  "GENERAS INGRESOS",
                  "Obtienes ganancias a partir de las ventas que realizas.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="relative group">
                  <div className="hidden md:block w-2 h-2 bg-[#B8893B] rounded-full mb-6" />

                  <p className="text-[#B8893B] text-[10px] tracking-[0.35em] uppercase mb-4">
                    • {title}
                  </p>

                  <p className="text-white/60 text-sm leading-[1.8] max-w-[220px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: PREGUNTAS FRECUENTES */}
      <section
        ref={faqRef}
        className="pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-20 bg-[#050302]"
      >
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            faqVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            RESOLVIENDO DUDAS
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6 max-w-[760px]">
            ¿Todavía tienes dudas?
          </h2>

          <p className="text-white/60 text-sm md:text-lg leading-[1.8] mb-14 max-w-[620px]">
            Todo gran comienzo suele venir acompañado de preguntas.
          </p>

          <div className="space-y-0 border-t border-[#B8893B]/15">
            {[
              [
                "¿Necesito experiencia en ventas?",
                "No. Muchas personas comienzan sin experiencia previa. El proceso incluye formación y acompañamiento para ayudarte a desarrollar habilidades comerciales paso a paso.",
              ],
              [
                "¿Qué incluye mi kit inicial?",
                "Recibes un kit con productos y herramientas para comenzar tu actividad, además de acceso a formación y acompañamiento.",
              ],
              [
                "¿Qué aromas debería elegir?",
                "Si lo deseas, podemos ayudarte a seleccionar referencias según tu presupuesto, tus objetivos y los aromas que suelen tener mejor salida.",
              ],
              [
                "¿Cómo vendo mis primeros perfumes?",
                "Te acompañamos desde el inicio con un proceso simple para que sepas cómo presentar los productos y dar tus primeros pasos con confianza.",
              ],
              [
                "¿Cómo realizo el pago?",
                "Puedes realizar tu pedido mediante transferencia bancaria, o puedes hacer tu pago al recibirlos.",
              ],
              [
                "¿Cómo puedo realizar mi pedido?",
                "Puedes realizar tu pedido mediante transferencia bancaria o pago contra entrega, según tu ubicación.",
              ],
            ].map(([question, answer], index) => (
              <div
                key={question}
                className={`border-b border-[#B8893B]/15 py-7 md:py-8 transition-all duration-700 ${
                  faqVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-serif text-xl md:text-2xl mb-3">
                  {question}
                </h3>

                <p className="text-white/60 text-sm md:text-base leading-[1.8] max-w-[680px]">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: CIERRE FINAL */}
      <section
        ref={finalRef}
        className="relative min-h-[95vh] px-6 md:px-20 flex items-center overflow-hidden bg-black"
      >
        {/* imagen fondo */}
        <img
          src="/wild-night.webp"
          alt="Wild Collection decisión"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover block brightness-[0.45]"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

        {/* contenido */}
        <div
          className={`relative z-10 max-w-4xl transition-all duration-1000 ${
            finalVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            PRIMER PASO
          </p>

          <h2 className="font-serif text-4xl md:text-7xl leading-[1.05] mb-8 max-w-[900px]">
            Todo comienza con una conversación.
          </h2>

          <p className="text-white/70 text-sm md:text-lg leading-[1.8] mb-10 max-w-[600px]">
            No necesitas tener todas las respuestas hoy. <br />
            Solo dar el primer paso. <br />
            <br />
            Conocer las opciones, resolver tus dudas y descubrir si Wild
            Collection encaja contigo.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20invertir%20con%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#B8893B] text-black px-10 py-4 rounded-2xl text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-[#F0D8A8] hover:scale-[1.03] active:scale-[0.97]">
              HABLAR CON UN ASESOR
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
