import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] bg-[#050302] overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between text-[10px] tracking-[0.3em] text-[#B8893B] bg-black/40 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      {/* ================= HERO ================= */}
      <section className="h-screen relative flex items-center justify-center text-center px-6">
        {/* CONTENEDOR IMAGEN */}
        <div className="absolute inset-0 bg-black">
          <div className="w-full h-full bg-gradient-to-b from-black/40 via-black/60 to-black" />
          {/* aquí irá imagen */}
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Más que perfumes. <br />
            Una invitación a descubrir nuevas posibilidades.
          </h1>

          <p className="text-sm md:text-base text-white/65 leading-relaxed mb-10">
            Creamos fragancias de alta calidad inspiradas en algunos de los
            aromas más admirados del mundo y construimos una comunidad para
            quienes creen que siempre existe una posibilidad más.
          </p>

          <Link href="/#colecciones">
            <button className="bg-[#B8893B] text-black px-10 py-4 rounded-2xl text-[10px] tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition">
              Explorar colecciones
            </button>
          </Link>
        </div>
      </section>

      {/* ================= MANIFIESTO WILD ================= */}
      <section className="relative py-32 md:py-44 px-6 md:px-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#F0D8A8]/8 border border-[#B8893B]/25 rounded-3xl px-7 md:px-14 py-12 md:py-16 text-center backdrop-blur-md shadow-[0_0_90px_rgba(184,137,59,0.10)]">
            <div className="absolute -top-10 left-8 font-serif text-[140px] text-[#B8893B]/10 leading-none pointer-events-none">
              “
            </div>

            <h2 className="relative z-10 font-serif text-3xl md:text-5xl leading-tight text-[#F0D8A8] mb-10">
              La mayoría de las personas viven dentro de límites que nunca
              existieron realmente.
            </h2>

            <div className="relative z-10 max-w-3xl mx-auto text-sm md:text-base text-white/65 leading-relaxed space-y-5">
              <p>
                El mundo es mucho más grande de lo que nos enseñaron, las
                oportunidades son más abundantes de lo que imaginamos y muchas
                veces la única diferencia entre la vida que tenemos y la vida
                que soñamos es atrevernos a explorar una posibilidad más.
              </p>

              <p className="pt-6 font-serif text-xl md:text-2xl text-[#F0D8A8]/90 leading-relaxed">
                Ser Wild es cuestionar los límites. Expandir la visión. Elegir
                crecer.
              </p>

              <p className="font-serif text-xl md:text-2xl text-[#F0D8A8]/90 leading-relaxed">
                Y construir una vida alineada con lo que realmente somos capaces
                de alcanzar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN 3 ================= */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            [
              "Calidad que inspira confianza",
              "Desarrollamos fragancias de alta calidad inspiradas en algunos de los aromas más admirados del mundo, buscando ofrecer una experiencia excepcional en cada aplicación.",
            ],
            [
              "Oportunidades que impulsan crecimiento",
              "Creemos que las oportunidades correctas pueden abrir nuevos caminos personales y profesionales.",
            ],
            [
              "Una comunidad que evoluciona",
              "Nos rodeamos de personas que buscan crecer, aprender y construir una mejor versión de sí mismas.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="bg-black/40 border border-[#B8893B]/20 rounded-3xl p-8"
            >
              <h3 className="font-serif text-xl mb-4">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN 4 ================= */}
      <section className="py-32 px-6 md:px-20 text-center">
        {/* IMAGEN */}
        <div className="max-w-4xl mx-auto mb-16 h-[300px] bg-black/40 border border-[#B8893B]/20 rounded-3xl" />

        <h2 className="font-serif text-4xl md:text-6xl mb-8">
          Ser Wild es vivir con libertad.
        </h2>

        <p className="max-w-3xl mx-auto text-white/65 leading-relaxed text-sm md:text-base">
          Para nosotros la libertad no consiste únicamente en tener más.
          <br />
          <br />
          Consiste en tener opciones. La libertad de elegir. La libertad de
          crecer.
          <br />
          <br />
          La libertad de explorar nuevos caminos y construir una vida alineada
          con quien realmente eres.
          <br />
          <br />
          Por eso llamamos Wild a quienes se atreven a expandir sus
          posibilidades y crear una historia propia.
        </p>
      </section>

      {/* ================= SECCIÓN 5 ================= */}
      <section className="py-28 px-6 md:px-20 bg-black">
        <h2 className="text-center font-serif text-3xl md:text-5xl mb-16">
          Lo que hemos construido juntos
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["+100.000", "Clientes"],
            ["+300", "Distribuidores independientes"],
            ["+200", "Líderes formados"],
            ["Colombia y Ecuador", "Presencia internacional"],
          ].map(([num, label]) => (
            <div key={label}>
              <h3 className="font-serif text-3xl md:text-5xl mb-3">{num}</h3>
              <p className="text-[10px] tracking-[0.3em] text-[#B8893B] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN 6 ================= */}
      <section className="py-28 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGEN */}
          <div className="h-[400px] md:h-[500px] bg-black/40 border border-[#B8893B]/20 rounded-3xl" />

          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              Miramos hacia el futuro con la misma convicción que nos trajo
              hasta aquí.
            </h2>

            <p className="text-white/65 text-sm md:text-base leading-relaxed">
              Nuestro objetivo es continuar desarrollando experiencias,
              productos y oportunidades que inspiren a más personas a crecer,
              explorar nuevas posibilidades y descubrir todo aquello que son
              capaces de alcanzar.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-32 px-6 md:px-20 text-center">
        <h2 className="font-serif text-4xl md:text-6xl mb-6">
          ¿Cuál será tu próxima posibilidad?
        </h2>

        <p className="text-white/60 mb-10 text-sm md:text-base">
          Descubre nuestras colecciones o habla con un asesor para conocer más
          sobre Wild Collection.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/#colecciones">
            <button className="bg-[#B8893B] text-black px-8 py-4 rounded-2xl text-[10px] tracking-[0.32em] uppercase hover:bg-[#F0D8A8] transition">
              Explorar perfumes
            </button>
          </Link>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845"
            target="_blank"
          >
            <button className="border border-[#B8893B]/40 text-[#F0D8A8] px-8 py-4 rounded-2xl text-[10px] tracking-[0.32em] uppercase hover:border-[#F0D8A8] transition">
              Hablar con un asesor
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
