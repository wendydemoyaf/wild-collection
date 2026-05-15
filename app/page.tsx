"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);

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

  return (
    <main className="bg-black text-white">
      <section id="dior-scroll" className="relative h-[260vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          <h1 className="absolute top-[2.5%] left-1/2 -translate-x-1/2 text-3xl tracking-[0.35em] font-serif z-50">
            COLECCIÓN SILVESTRE
          </h1>

          {/* VIDEO CENTRAL */}
          <div
            className="absolute overflow-hidden"
            style={{
              width: `${86 - progress * 48}%`,
              height: `${60 + progress * 20}%`,
              top: `${7 + progress * 10}%`,
              left: "50%",
              transform: `translateX(-50%) scale(${1 + progress * 0.04})`,
              transition:
                "width 200ms linear, height 200ms linear, top 200ms linear",
              zIndex: 20,
              transition:
                "width 200ms linear, height 200ms linear, top 200ms linear",
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
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
              }}
            />
          </div>

          {/* FOTO IZQUIERDA */}
          <img
            src="/left.jpg"
            className="absolute left-[4%] top-[24%] w-[25%] h-[70%] object-cover"
            style={{
              opacity: progress > 0.35 ? 0.85 : 0,
              filter: "brightness(0.75)",
              transform: `translateX(${progress > 0.35 ? 0 : -60}px)`,
              transition: "all 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* FOTO DERECHA */}
          <img
            src="/right.jpg"
            className="absolute right-[3%] top-[24%] w-[27%] h-[76%] object-cover"
            style={{
              opacity: progress > 0.35 ? 0.85 : 0,
              filter: "brightness(0.75)",
              transform: `translateX(${progress > 0.35 ? 0 : 60}px)`,
              transition: "all 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
