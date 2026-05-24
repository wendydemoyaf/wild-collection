"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "Perfumes Masculinos", img: "/men.jpg", link: "/masculino" },
    { name: "Perfumes Femeninos", img: "/women.jpg", link: "/femenino" },
    { name: "Árabes / Unisex", img: "/arabe.jpg", link: "/unisex" },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <img
          src="/logo.png"
          alt="WILD COLLECTION"
          className="w-44 md:w-64 opacity-25 logo-clock object-contain"
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(184,137,59,0.22),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.2),#000)]" />
        <header className="absolute top-0 left-0 w-full z-30 px-5 md:px-10 py-5 md:py-6 flex items-center justify-between text-[9px] md:text-xs tracking-[0.22em] md:tracking-[0.28em] text-[#B8893B]">
          <Link
            href="/"
            className="hover:text-[#F0D8A8] transition-all duration-500"
          >
            WILD COLLECTION
          </Link>

          {/* DESKTOP */}
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

          {/* MÓVIL */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#B8893B] text-xl tracking-normal z-50"
          >
            ☰
          </button>
        </header>
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

            <Link
              href="/unete-a-la-familia-wild"
              onClick={() => setMenuOpen(false)}
            >
              TRABAJA CON NOSOTROS
            </Link>

            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              CONTACTO
            </Link>
          </div>
        )}

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.65em] text-[#B8893B] mb-6 uppercase">
            Perfumería de autor
          </p>

          <h1 className="font-serif text-5xl md:text-8xl leading-tight md:leading-none mb-6">
            WILD <br className="md:hidden" /> COLLECTION
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-lg text-white/70 leading-relaxed mb-10">
            Fragancias que dejan huella.
          </p>

          <Link href="#colecciones">
            <button className="bg-black/60 text-[#F0D8A8] border border-[#B8893B]/50 rounded-2xl px-10 md:px-12 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#B8893B]/20 hover:border-[#F0D8A8] hover:text-white transition-all duration-500">
              Explorar
            </button>
          </Link>
        </div>
      </section>

      <section
        id="colecciones"
        className="relative bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,0.14),transparent_35%),linear-gradient(135deg,#050302,#0B0704,#020202)] py-28 md:py-32 px-6 md:px-10"
      >
        <p className="text-center text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] mb-5 uppercase">
          Elige tu universo
        </p>

        <h2 className="text-center font-serif text-4xl md:text-6xl mb-16">
          Colecciones Wild
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-[#B8893B]/25 bg-black/45 shadow-[0_0_90px_rgba(0,0,0,0.65)]">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group relative"
            >
              <div className="relative h-[460px] md:h-[560px] overflow-hidden bg-black">
                <img
                  src={category.img}
                  alt={category.name}
                  className={`w-full h-full object-cover ${
                    category.name === "Perfumes Femeninos"
                      ? "object-[center_50%]"
                      : "object-[center_50%]"
                  } grayscale opacity-55 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-75 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-all duration-700" />

                <div className="absolute bottom-8 md:bottom-10 left-6 right-6 z-10 text-center">
                  <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight mb-5">
                    {category.name}
                  </h3>

                  <p className="text-[10px] tracking-[0.35em] text-[#F0D8A8] uppercase">
                    Ver colección
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
