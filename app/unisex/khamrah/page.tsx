import Link from "next/link";

export default function KhamrahPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-black overflow-hidden animate-fade">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] bg-[#f7f5f2]/80 backdrop-blur-md">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/unisex">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 px-6 md:px-20 gap-10 md:gap-6 items-center">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.6em] text-black/40 mb-6">
            FRAGANCIA UNISEX
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
            KHAMRAH
          </h1>

          <p className="italic text-black/60 mb-6">
            Cremoso, envolvente y peligrosamente seductor.
          </p>

          <p className="text-base leading-relaxed text-black/70 mb-6">
            Como un licor especiado servido en una noche de lujo. Cremoso,
            envolvente y peligrosamente seductor, con una estela que roba
            atención sin esfuerzo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-6">
            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                AROMA
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Especiado · Dulce</p>
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
              <p className="text-sm">Seductor · Intenso</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20KHAMRAH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-[-6px] border border-black px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center group">
          <img
            src="/khamrah.jpeg"
            alt="KHAMRAH"
            className="max-h-[78vh] w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <img
            src="/khamrah-notas.png"
            alt="Notas KHAMRAH"
            className="absolute max-h-[78vh] w-auto object-contain opacity-0 scale-105 blur-sm transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
          />
        </div>
      </section>
    </main>
  );
}
