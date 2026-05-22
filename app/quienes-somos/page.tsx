import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] overflow-hidden bg-[linear-gradient(135deg,#030201,#0B0704,#120B06,#020202)]">
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

      {/* BLOQUE 1 HERO */}
      <section className="min-h-screen px-6 md:px-20 pt-32 md:pt-40 flex items-center text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs tracking-[0.6em] text-[#B8893B] mb-6 uppercase">
            Quiénes somos
          </p>

          <h1 className="font-serif text-5xl md:text-8xl leading-none mb-8">
            Más que perfumes. <br /> Una oportunidad para descubrir nuevas
            posibilidades.
          </h1>

          <p className="max-w-3xl mx-auto text-sm md:text-lg text-white/65 leading-relaxed mb-10">
            Desde 2018 acercamos fragancias de alta calidad a miles de personas
            mientras construimos una comunidad basada en crecimiento, libertad y
            oportunidades.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20hablar%20con%20un%20asesor%20de%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#B8893B] text-black rounded-2xl px-10 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
              Hablar con un asesor
            </button>
          </a>
        </div>
      </section>

      {/* BLOQUE 2 HISTORIA */}
      <section className="px-6 md:px-20 py-28 border-y border-[#B8893B]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12">
          <h2 className="font-serif text-4xl md:text-6xl">
            Todo comenzó <br /> con una búsqueda.
          </h2>

          <div className="space-y-4 text-white/65 text-sm md:text-lg leading-relaxed">
            <p>Sebastián tenía 17 años. Quería construir una vida diferente.</p>
            <p>
              Descubrió las ventas y encontró en la perfumería una oportunidad.
            </p>
            <p>
              Llegó a liderar equipos, detectó problemas en el sector y decidió
              construir algo mejor.
            </p>
            <p className="text-[#F0D8A8]">Así nació Wild Collection en 2018.</p>
          </div>
        </div>
      </section>

      {/* BLOQUE 3 POR QUÉ EXISTIMOS */}
      <section className="px-6 md:px-20 py-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] text-[#B8893B] mb-5 uppercase text-center">
            Por qué existimos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [
                "Perfumería accesible",
                "Fragancias inspiradas en los aromas más admirados del mundo a precios accesibles.",
              ],
              [
                "Oportunidades reales",
                "Creemos que una oportunidad puede cambiar una vida.",
              ],
              [
                "Crecimiento constante",
                "Formamos personas en ventas, liderazgo y desarrollo personal.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-black/35 border border-[#B8893B]/25 rounded-3xl px-7 py-8 backdrop-blur-md"
              >
                <h3 className="font-serif text-2xl mb-4">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 4 SER WILD */}
      <section className="px-6 md:px-20 py-28 bg-[#F0D8A8]/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            ¿Qué significa ser Wild?
          </h2>

          <p className="text-xl md:text-3xl text-white/70 leading-relaxed font-serif">
            Ser Wild es vivir con libertad. Tener opciones. Atreverse a crecer.
            Explorar nuevas posibilidades. Construir una vida más grande que las
            circunstancias con las que comenzamos.
          </p>
        </div>
      </section>

      {/* BLOQUE 5 IMPACTO */}
      <section className="px-6 md:px-20 py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["+100.000", "Clientes"],
            ["+300", "Distribuidores independientes"],
            ["+200", "Líderes formados"],
            ["Colombia y Ecuador", "Presencia"],
          ].map(([number, label]) => (
            <div key={label}>
              <h3 className="font-serif text-4xl md:text-6xl mb-3">{number}</h3>
              <p className="text-[10px] tracking-[0.35em] text-[#B8893B] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOQUE 6 HISTORIAS */}
      <section className="px-6 md:px-20 py-28 border-y border-[#B8893B]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl text-center mb-14">
            Historias reales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Wendy", "Mayra", "Nicolás"].map((name) => (
              <div
                key={name}
                className="bg-black/35 border border-[#B8893B]/25 rounded-3xl px-8 py-10 text-center"
              >
                <h3 className="font-serif text-3xl mb-4">{name}</h3>
                <p className="text-sm text-white/50">Próximamente</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE 7 FUTURO */}
      <section className="px-6 md:px-20 py-28">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.45em] text-[#B8893B] mb-6 uppercase">
            Esto apenas comienza
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Una visión latinoamericana
          </h2>

          <p className="text-sm md:text-lg text-white/65 leading-relaxed">
            Nuestro sueño es convertirnos en una referencia latinoamericana de
            perfumería, emprendimiento y crecimiento, desarrollando aromas
            propios y llevando nuestra filosofía a miles de personas más.
          </p>
        </div>
      </section>

      {/* BLOQUE 8 CTA */}
      <section className="px-6 md:px-20 pb-32">
        <div className="max-w-5xl mx-auto bg-[#F0D8A8]/10 border border-[#B8893B]/30 rounded-3xl px-8 md:px-14 py-12 text-center backdrop-blur-md">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            ¿Cuál será tu próxima posibilidad?
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/#colecciones">
              <button className="bg-[#B8893B] text-black rounded-2xl px-8 py-4 text-[10px] tracking-[0.32em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
                Explorar perfumes
              </button>
            </Link>

            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20hablar%20con%20un%20asesor%20de%20Wild%20Collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/50 text-[#F0D8A8] border border-[#B8893B]/45 rounded-2xl px-8 py-4 text-[10px] tracking-[0.32em] uppercase hover:border-[#F0D8A8] transition-all duration-500">
                Hablar con un asesor
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
