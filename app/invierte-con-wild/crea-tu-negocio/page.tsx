"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CreaTuNegocioPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 400);
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

      <section className="min-h-screen flex items-center pt-28 px-6 md:px-20 relative">
        <img
          src="/hombre1.jpg"
          alt="Crea tu negocio con Wild"
          className="absolute inset-0 w-full h-full object-cover object-[70%_20%] opacity-80 translate-x-16 md:translate-x-24"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.65)_40%,rgba(0,0,0,0.20)_100%)]" />

        <div className="relative z-10 max-w-3xl pl-6 md:pl-12">
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
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Más de 100.000 personas ya forman parte de Wild Collection
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-20 bg-[#050302]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] mb-6 max-w-[980px]">
            Más que un kit. Una oportunidad en movimiento.
          </h2>

          <p className="text-white/60 text-sm md:text-lg leading-[1.8] max-w-[620px] mb-20">
            Empiezas con productos. Pero también con formación, comunidad y
            herramientas para crecer junto a una marca que sigue avanzando.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-[#B8893B]/0 via-[#B8893B]/40 to-[#B8893B]/0 mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            <p className="mt-24 text-white/40 text-sm md:text-base max-w-[600px]">
              No todos buscan lo mismo. Pero si estás aquí, probablemente estás
              listo para empezar algo propio.
            </p>
            {[
              [
                "01",
                "Formación continua",
                "Aprende ventas, comunicación y desarrollo personal junto a líderes y experiencias que impulsan tu crecimiento.",
              ],
              [
                "02",
                "Comunidad",
                "Rodéate de personas que también decidieron construir algo propio y avanzar más allá de lo conocido.",
              ],
              [
                "03",
                "Productos con identidad",
                "Fragancias diseñadas para conectar con personas y crear experiencias que dejan huella.",
              ],
              [
                "04",
                "Crecimiento real",
                "Desarrolla una actividad que puede crecer a tu ritmo mientras construyes experiencia, relaciones y nuevas oportunidades.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="group transition-all duration-500 hover:-translate-y-1"
              >
                <p className="text-[#B8893B] text-sm tracking-[0.2em] mb-5">
                  {num}
                </p>

                <h3 className="font-serif text-2xl mb-6 relative inline-block">
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
    </main>
  );
}
