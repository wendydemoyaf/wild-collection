"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CreaTuNegocioPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionTwoVisible, setSectionTwoVisible] = useState(false);
  const heroRef = useRef(null);
  const sectionTwoRef = useRef(null);
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
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (sectionTwoRef.current) observer.observe(sectionTwoRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen bg-black text-[#F0D8A8] overflow-hidden">
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

      <section
        ref={heroRef}
        className="min-h-screen flex items-center pt-28 px-6 md:px-20 relative"
      >
        <img
          src="/hombre1.jpg"
          alt="Crea tu negocio con Wild"
          className="absolute inset-0 w-full h-full object-cover object-[70%_20%] opacity-80 translate-x-16 md:translate-x-24"
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
              <button className="bg-[#B8893B] text-black px-8 py-4 rounded-2xl text-[10px] tracking-[0.3em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
                Hablar con un asesor
              </button>
            </a>

            <button className="border border-[#B8893B]/50 text-[#F0D8A8] px-8 py-4 rounded-2xl text-[10px] tracking-[0.3em] uppercase hover:bg-[#B8893B]/10 transition-all duration-500">
              Ver cómo funciona
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

      <section
        ref={sectionTwoRef}
        className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 md:px-20 bg-[#050302]"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
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
                className={`group transition-all duration-800 hover:-translate-y-1 ${
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

      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            WILD EN MOVIMIENTO
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-16 max-w-[900px]">
            Más que vender perfumes. <br />
            Construyes experiencias, relaciones y camino propio.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-[520px] md:h-[700px] overflow-hidden rounded-[28px] shadow-2xl shadow-black/70">
              <img
                src="/hero-sebas.webp"
                alt="Wild en movimiento"
                loading="lazy"
                className="w-full h-full object-cover block brightness-[0.78] transition-all duration-700 ease-out hover:scale-[1.03] hover:brightness-[0.92]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="h-[300px] md:h-[337px] overflow-hidden rounded-[28px] shadow-2xl shadow-black/70">
                <img
                  src="/luxury-p.webp"
                  alt="Perfume Wild Collection"
                  loading="lazy"
                  className="w-full h-full object-cover block brightness-[0.78] transition-all duration-700 ease-out hover:scale-[1.03] hover:brightness-[0.92]"
                />
              </div>

              <div className="h-[300px] md:h-[337px] overflow-hidden rounded-[28px] shadow-2xl shadow-black/70">
                <img
                  src="/wild-team.webp"
                  alt="Equipo Wild Collection"
                  loading="lazy"
                  className="w-full h-full object-cover block brightness-[0.78] transition-all duration-700 ease-out hover:scale-[1.03] hover:brightness-[0.92]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-28 md:pt-36 pb-24 md:pb-32 px-6 md:px-20 bg-[#050302]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.5em] text-[#B8893B] mb-6 uppercase">
            EXPERIENCIAS REALES
          </p>

          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-16 max-w-[820px]">
            Algunas historias comienzan con una decisión pequeña.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [
                "/testimonio-1.webp",
                "Andrea",
                "Quito",
                "Empecé buscando una nueva oportunidad y terminé encontrando una actividad que disfruto construir cada día.",
              ],
              [
                "/testimonio-2.webp",
                "Mateo",
                "Guayaquil",
                "Lo que más valoré fue sentir que no estaba empezando solo. La comunidad y la formación hicieron la diferencia.",
              ],
              [
                "/testimonio-3.webp",
                "Valentina",
                "Cuenca",
                "Más que vender productos, sentí que estaba desarrollando algo propio y creciendo junto a otras personas.",
              ],
            ].map(([image, name, city, text]) => (
              <div
                key={name}
                className="group border border-[#B8893B]/10 bg-white/[0.025] backdrop-blur-sm rounded-[28px] p-5 md:p-6 transition-all duration-700 hover:bg-white/[0.04] hover:-translate-y-1"
              >
                <div className="h-[320px] mb-8 overflow-hidden rounded-[22px] bg-[#120b07]">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover block brightness-[0.78] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.92]"
                  />
                </div>

                <p className="text-[#B8893B] text-[10px] tracking-[0.35em] uppercase mb-4">
                  {name} · {city}
                </p>

                <p className="text-white/65 text-sm leading-[1.8]">“{text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
