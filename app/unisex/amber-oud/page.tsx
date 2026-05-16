import Link from "next/link";

export default function AmberOudPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-black overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] bg-[#f7f5f2]/80 backdrop-blur-md">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/unisex">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 px-6 md:px-20 gap-10 md:gap-6 items-center">
        {/* TEXTO */}
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.6em] text-black/40 mb-6">
            FRAGANCIA UNISEX
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
            AMBER <br /> OUD
          </h1>

          <p className="italic text-black/60 mb-6">
            Lujo oriental en su máxima expresión.
          </p>

          <p className="text-base leading-relaxed text-black/70 mb-6">
            Imagina mármol negro, luces tenues y un perfume costoso flotando en
            el aire. Una fragancia oriental elegante que transmite lujo desde el
            primer instante.
          </p>

          {/* BLOQUES */}
          <div className="grid grid-cols-3 gap-10 mb-6">
            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                AROMA
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Oriental · Ambarado</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                MOMENTOS WILD
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Noche · Lujo</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                PERSONALIDAD
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Elegante · Poderoso</p>
            </div>
          </div>

          {/* BOTÓN */}
          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20AMBER%20OUD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-[-6px] border border-black px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative flex justify-center items-center group">
          <img
            src="/amber.jpeg"
            alt="AMBER OUD"
            className="max-h-[78vh] w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <img
            src="/amber-notas.png"
            alt="Notas AMBER OUD"
            className="absolute max-h-[78vh] w-auto object-contain opacity-0 scale-105 blur-sm transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
          />
        </div>
      </section>
    </main>
  );
}
