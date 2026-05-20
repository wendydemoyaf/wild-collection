"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "Masculino", img: "/masculino.jpeg", link: "/masculino" },
    { name: "Femenino", img: "/femenino.jpeg", link: "/femenino" },
    { name: "Árabes / Unisex", img: "/unisex.jpeg", link: "/unisex" },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        <header className="absolute top-0 left-0 w-full z-30 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B]">
          <Link
            href="/"
            className="hover:text-[#F0D8A8] transition-all duration-500"
          >
            WILD COLLECTION
          </Link>

          <Link
            href="#colecciones"
            className="hover:text-[#F0D8A8] transition-all duration-500"
          >
            COLECCIONES
          </Link>
        </header>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.65em] text-[#B8893B] mb-6 uppercase">
            Perfumería de autor
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-none mb-6">
            WILD <br className="md:hidden" /> COLLECTION
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-lg text-white/70 leading-relaxed mb-10">
            Fragancias que dejan huella.
          </p>

          <Link href="#colecciones">
            <button className="bg-black/60 text-[#F0D8A8] border border-[#B8893B]/50 rounded-2xl px-9 md:px-12 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#B8893B]/20 hover:border-[#F0D8A8] hover:text-white transition-all duration-500">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Link key={category.name} href={category.link} className="group">
              <div className="relative h-[420px] md:h-[540px] overflow-hidden rounded-3xl bg-black border border-[#B8893B]/20 shadow-[0_0_70px_rgba(0,0,0,0.55)]">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
                    {category.name}
                  </h3>

                  <p className="text-[10px] tracking-[0.35em] text-[#F0D8A8]/75 uppercase">
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
