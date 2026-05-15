import Link from "next/link";

export default function PradaCandyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-black overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] bg-[#f7f5f2]/80 backdrop-blur-md">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/femenino">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 px-10 md:px-20 gap-6 items-center">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.6em] text-black/40 mb-6">
            FRAGANCIA FEMENINA
          </p>

          <h1 className="font-serif text-6xl md:text-7xl leading-none mb-6">
            PRADA <br /> CANDY
          </h1>

          <p className="italic text-black/60 mb-6">
            Elegancia que provoca acercarse.
          </p>

          <p className="text-base leading-relaxed text-black/70 mb-6">
            Su estela suave y envolvente combina sensualidad y delicadeza en una
            fragancia moderna, femenina y absolutamente irresistible.
          </p>

          <div className="grid grid-cols-3 gap-10 mb-6">
            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                AROMA
              </p>

              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Dulce · Floral</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                MOMENTOS WILD
              </p>

              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>

              <p className="text-sm">Día fresco · Cita</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                PERSONALIDAD
              </p>

              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>

              <p className="text-sm">Elegante · Magnética</p>
            </div>
          </div>

          <div className="mb-8 border-t border-black/20 pt-5">
            <p className="text-[10px] tracking-[0.4em] text-black/40 mb-2">
              NOTAS
            </p>
            <p className="font-serif text-2xl">
              Caramelo · Flores blancas · Vainilla · Almizcle
            </p>
          </div>

          <a
            href="https://wa.me/593963826845?text=Hola,%20quiero%20comprar%20PRADA%20CANDY%20de%20WILD%20COLLECTION"
            target="_blank"
          >
            <button className="mt-[-6px] border border-black px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-all duration-500">
              Comprar por WhatsApp
            </button>
          </a>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/fem1.jpeg"
            alt="PRADA CANDY"
            className="max-h-[78vh] w-auto object-contain"
          />
        </div>
      </section>
    </main>
  );
}
