"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // LOADER TIMER
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // SCROLL HERO
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("dior-scroll");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const value = Math.min(Math.max(-rect.top / total, 0), 1);

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ANIMACIÓN SCROLL
  useEffect(() => {
    if (loading) return;

    const elements = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  const categories = [
    {
      name: "Femenino",
      img: "/femenino.jpeg",
      link: "/femenino",
    },
    {
      name: "Masculino",
      img: "/masculino.jpeg",
      link: "/masculino",
    },
    {
      name: "Unisex",
      img: "/unisex.jpeg",
      link: "/unisex",
    },
  ];

  // 🔥 LOADER (BIEN PUESTO)
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <img
          src="/logo.png"
          alt="WILD COLLECTION"
          className="w-44 md:w-64 opacity-40 logo-clock object-contain"
        />
      </div>
    );
  }

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section id="dior-scroll" className="relative h-[260vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          <h1 className="absolute top-[3.5%] left-1/2 -translate-x-1/2 text-3xl tracking-[0.35em] font-serif z-50">
            WILD COLLECTION
          </h1>

          <div
            className="absolute overflow-hidden"
            style={{
              width: `${86 - progress * 46}%`,
              height: `${60 + progress * 18}%`,
              top: `${10 + progress * 10}%`,
              left: "50%",
              transform: `translateX(-50%) scale(${1 + progress * 0.04})`,
              transition:
                "width 200ms linear, height 200ms linear, top 200ms linear",
              zIndex: 20,
            }}
          >
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center shadow-2xl"
            />
          </div>

          <img
            src="/left.jpg"
            alt="Wild Collection"
            className="absolute left-[4%] top-[20%] w-[25%] h-[70%] object-cover hidden md:block"
            style={{
              opacity: progress > 0.35 ? 0.85 : 0,
              filter: "brightness(0.75)",
              transform: `translateX(${progress > 0.35 ? 0 : -60}px)`,
              transition: "all 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <img
            src="/right.jpg"
            alt="Wild Collection"
            className="absolute right-[3%] top-[24%] w-[27%] h-[76%] object-cover hidden md:block"
            style={{
              opacity: progress > 0.35 ? 0.85 : 0,
              filter: "brightness(0.75)",
              transform: `translateX(${progress > 0.35 ? 0 : 60}px)`,
              transition: "all 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          <div
            className="absolute bottom-[4%] left-1/2 text-center z-50"
            style={{
              opacity: progress > 0.55 ? 1 : 0,
              transform: `translate(-50%, ${progress > 0.55 ? 0 : 30}px)`,
              transition: "all 1000ms ease",
            }}
          >
            <p className="text-sm tracking-[0.5em] mb-3 text-white/70">
              WILD COLLECTION
            </p>

            <h2 className="text-4xl font-serif tracking-[0.25em]">VIP ROSE</h2>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-black text-white py-32 px-8 fade-section">
        <p className="text-center text-sm tracking-[0.5em] text-white/50 mb-6">
          CATÁLOGO
        </p>

        <h2 className="text-center text-5xl font-serif mb-20">
          Explora por categoría
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link key={category.name} href={category.link} className="group">
              <div className="relative h-[420px] md:h-[520px] overflow-hidden bg-neutral-900 cursor-pointer">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-700" />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10">
                  <h3 className="text-2xl md:text-3xl font-serif">
                    {category.name}
                  </h3>

                  <p className="text-xs tracking-[0.35em] text-white/60 mt-3 uppercase">
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
