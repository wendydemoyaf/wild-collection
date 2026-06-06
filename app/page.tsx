"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
/* ===================================== */
/* REVEAL ANIMATION */
/* Animación de entrada al hacer scroll */
/* ===================================== */
function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.96]"
      }`}
    >
      {children}
    </div>
  );
}
/* ===================================== */
/* HOME PAGE */
/* Página principal Wild Collection */
/* ===================================== */
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "Perfumes Masculinos", img: "/men.webp", link: "/masculino" },
    { name: "Perfumes Femeninos", img: "/women.webp", link: "/femenino" },
    { name: "Árabes / Unisex", img: "/arabe.webp", link: "/unisex" },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <img
          src="/logo.webp"
          alt="WILD COLLECTION"
          className="w-44 md:w-64 opacity-25 logo-clock object-contain"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* ===================================== */}
      {/* HERO PRINCIPAL */}
      {/* ===================================== */}
      <section className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[heroZoom_18s_ease-in-out_infinite_alternate]"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(240,216,168,0.22),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.85))]" />
        <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#B8893B]/20 blur-[90px] animate-pulse" />
        {/* HEADER / NAVEGACIÓN */}
        <header className="absolute top-0 left-0 w-full z-30 px-5 md:px-10 py-5 md:py-6 flex items-center justify-between text-[9px] md:text-xs tracking-[0.22em] md:tracking-[0.28em] text-[#B8893B]">
          <Link
            href="/"
            className="hover:text-[#F0D8A8] transition-all duration-500"
          >
            WILD COLLECTION
          </Link>

          <nav className="hidden md:flex gap-7 items-center">
            <Link
              href="/quienes-somos"
              className="hover:text-[#F0D8A8] transition-all duration-500"
            >
              QUIÉNES SOMOS
            </Link>
            <Link
              href="/invierte-con-wild"
              className="hover:text-[#F0D8A8] transition-all duration-500"
            >
              EMPRENDE
            </Link>
            <Link
              href="/contacto"
              className="hover:text-[#F0D8A8] transition-all duration-500"
            >
              CONTACTO
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#B8893B] text-xl tracking-normal z-50"
          >
            ☰
          </button>
        </header>
        {/* MENÚ MÓVIL */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 text-[#B8893B] text-sm tracking-[0.3em]">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl"
            >
              ✕
            </button>

            <Link href="/quienes-somos" onClick={() => setMenuOpen(false)}>
              QUIÉNES SOMOS
            </Link>
            <Link href="/invierte-con-wild" onClick={() => setMenuOpen(false)}>
              EMPRENDE CON WILD
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              CONTACTO
            </Link>
          </div>
        )}
        {/* CONTENIDO HERO */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-[heroFade_1.6s_ease-out_0.3s_both]">
          <p className="text-[10px] md:text-xs tracking-[0.7em] text-[#F0D8A8] mb-6 uppercase">
            Perfumería de autor
          </p>

          <h1 className="font-serif text-5xl md:text-8xl leading-tight md:leading-none mb-6 drop-shadow-[0_0_35px_rgba(240,216,168,0.18)]">
            WILD <br className="md:hidden" /> COLLECTION
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-lg text-white/75 leading-relaxed mb-10">
            Fragancias que dejan huella.
          </p>

          <a href="#colecciones" className="inline-flex">
            <span className="relative flex overflow-hidden rounded-full bg-[#B8893B]/15 text-[#F0D8A8] border border-[#B8893B]/60 px-10 md:px-12 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#B8893B]/30 hover:border-[#F0D8A8] hover:text-white transition-all duration-500 shadow-[0_0_35px_rgba(184,137,59,0.16)]">
              <span className="relative z-10">Explorar el universo Wild</span>
              <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-[buttonShine_8s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
        {/* ANIMACIONES GLOBALES */}
        <style jsx global>{`
          @keyframes heroZoom {
            from {
              transform: scale(1.04);
            }
            to {
              transform: scale(1.12);
            }
          }

          @keyframes heroFade {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes buttonShine {
            0% {
              transform: translateX(-150%);
              opacity: 0;
            }

            5% {
              opacity: 1;
            }

            35% {
              transform: translateX(350%);
              opacity: 1;
            }

            40% {
              opacity: 0;
            }

            100% {
              transform: translateX(350%);
              opacity: 0;
            }
          }

          @keyframes identityImage {
            from {
              transform: scale(1.03);
            }
            to {
              transform: scale(1.1);
            }
          }

          @keyframes goldReflection {
            0% {
              transform: translateX(-120%);
            }

            35% {
              transform: translateX(120%);
            }

            100% {
              transform: translateX(120%);
            }
          }

          @keyframes ambientGlow {
            0% {
              opacity: 0.6;
            }

            50% {
              opacity: 1;
            }

            100% {
              opacity: 0.6;
            }
          }
        `}</style>
      </section>
      {/* ===================================== */}
      {/* SECCIÓN IDENTIDAD */}
      {/* El perfume habla antes que tú */}
      {/* ===================================== */}
      <section className="relative bg-black pt-24 md:pt-36 pb-32 md:pb-44 px-6 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* TEXTO PRINCIPAL */}
          <Reveal>
            <div className="text-center mb-20 md:mb-24">
              <p className="text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] uppercase mb-5">
                IDENTIDAD
              </p>

              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
                El perfume habla antes que tú.
              </h2>

              <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-lg leading-relaxed">
                Una fragancia no se recuerda por cómo se ve.
                <br />
                Se recuerda por cómo hizo sentir a alguien.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ===================================== */}
      {/* COLECCIONES WILD */}
      {/* ===================================== */}
      <section
        id="colecciones"
        className="relative bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,0.14),transparent_35%),linear-gradient(135deg,#050302,#0B0704,#020202)] pt-24 md:pt-28 pb-28 md:pb-32 px-6 md:px-10"
      >
        {/* TÍTULO DE SECCIÓN */}
        <Reveal delay={120}>
          <p className="text-center text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] mb-5 uppercase">
            Elige tu universo
          </p>

          <h2 className="text-center font-serif text-4xl md:text-6xl mb-16">
            Colecciones Wild
          </h2>
        </Reveal>
        {/* TARJETAS DE COLECCIONES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[#B8893B]/25 bg-black/45 shadow-[0_0_90px_rgba(0,0,0,0.65)]">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={260 + index * 140}>
              <Link
                href={category.link}
                className="group relative block transition-all duration-700 hover:z-10"
              >
                <div className="relative h-[460px] md:h-[560px] overflow-hidden bg-black transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(184,137,59,0.18)]">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover object-[center_50%] grayscale opacity-55 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-[1.08]"
                  />

                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-all duration-700" />

                  <div className="absolute bottom-8 md:bottom-10 left-6 right-6 z-10 text-center">
                    <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-5 transition-all duration-700 group-hover:text-[#F0D8A8] group-hover:drop-shadow-[0_0_20px_rgba(240,216,168,0.18)]">
                      {category.name}
                    </h3>

                    <p className="text-[10px] tracking-[0.35em] text-[#F0D8A8]/80 uppercase transition-all duration-700 group-hover:text-[#F0D8A8] group-hover:tracking-[0.42em]">
                      Ver colección
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
