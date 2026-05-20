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

      <section className="min-h-screen px-6 md:px-20 pt-32 md:pt-40 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.6em] text-[#B8893B] mb-6 uppercase">
              Quiénes somos
            </p>

            <h1 className="font-serif text-5xl md:text-8xl leading-none mb-8">
              Lujo accesible. <br /> Oportunidad real.
            </h1>
          </div>

          <div className="border-l border-[#B8893B]/30 pl-6 md:pl-10">
            <p className="text-sm md:text-lg text-white/65 leading-relaxed mb-6">
              Wild Collection nace para democratizar la perfumería de lujo:
              acercar aromas de alta calidad, inspirados en las mejores
              tendencias del mundo, a personas que buscan oler bien, emprender y
              crecer.
            </p>

            <p className="text-sm md:text-lg text-white/60 leading-relaxed">
              Creemos que una fragancia puede ser más que un producto: puede ser
              una herramienta de confianza, ingreso y superación personal.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-28">
        <div className="max-w-7xl mx-auto border-y border-[#B8893B]/25 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            [
              "Emprendimiento",
              "Una oportunidad para empezar sin importar edad, experiencia o condición económica.",
            ],
            [
              "Alta rotación",
              "Productos atractivos, de calidad y pensados para venderse con facilidad.",
            ],
            [
              "Capacitación",
              "Acompañamiento constante para aprender ventas, producto y crecimiento personal.",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="font-serif text-3xl text-[#F0D8A8] mb-4">
                {title}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.45em] text-[#B8893B] mb-6 uppercase">
            Nuestro diferencial
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Calidad, exclusividad y visión
          </h2>

          <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-3xl mx-auto mb-12">
            Nuestros productos son exclusivos de Wild Collection. Somos
            fabricantes, por eso no los encontrarás exhibidos en cualquier
            lugar. Trabajamos para ofrecer calidad garantizada, aromas
            memorables y una oportunidad de negocio con identidad propia.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20un%20perfume%20Wild"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#B8893B] text-black rounded-2xl px-8 py-4 text-[10px] tracking-[0.32em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
                Comprar
              </button>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20al%20mayor%20en%20Wild"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/50 text-[#F0D8A8] border border-[#B8893B]/45 rounded-2xl px-8 py-4 text-[10px] tracking-[0.32em] uppercase hover:border-[#F0D8A8] transition-all duration-500">
                Comprar al mayor
              </button>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20trabajar%20con%20Wild%20Collection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/50 text-[#F0D8A8] border border-[#B8893B]/45 rounded-2xl px-8 py-4 text-[10px] tracking-[0.32em] uppercase hover:border-[#F0D8A8] transition-all duration-500">
                Trabajar con Wild
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
