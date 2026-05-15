import Link from "next/link";

export default function PradaCandyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-black">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] bg-[#f7f5f2]/80 backdrop-blur-md">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/femenino">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-28">
        <div className="flex items-center px-10 md:px-20">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.6em] text-black/40 mb-8">
              FRAGANCIA FEMENINA
            </p>

            <h1 className="font-serif text-6xl md:text-8xl leading-none mb-8">
              PRADA <br /> CANDY
            </h1>

            <p className="italic text-black/60 mb-10">
              Elegancia que provoca acercarse.
            </p>

            <p className="text-lg leading-relaxed text-black/70 mb-12">
              Su estela suave y envolvente combina sensualidad y delicadeza en
              una fragancia moderna, femenina y absolutamente irresistible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="border-t border-black/20 pt-4">
                <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                  AROMA
                </p>
                <p className="text-sm">Dulce · Floral</p>
              </div>

              <div className="border-t border-black/20 pt-4">
                <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                  OCASIÓN
                </p>
                <p className="text-sm">Día fresco · Cita especial</p>
              </div>

              <div className="border-t border-black/20 pt-4">
                <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                  PERSONALIDAD
                </p>
                <p className="text-sm">Elegante · Magnética</p>
              </div>
            </div>

            <a
              href="https://wa.me/593963826845?text=Hola,%20quiero%20comprar%20PRADA%20CANDY%20de%20WILD%20COLLECTION"
              target="_blank"
            >
              <button className="border border-black px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-black hover:text-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="h-[85vh] md:h-screen overflow-x-auto flex snap-x snap-mandatory">
          <img
            src="/fem1.jpeg"
            alt="PRADA CANDY"
            className="min-w-full h-full object-cover snap-center"
          />

          <img
            src="/fem1.jpeg"
            alt="Notas PRADA CANDY"
            className="min-w-full h-full object-cover snap-center"
          />
        </div>
      </section>

      <section className="px-10 md:px-20 py-28 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <p className="text-xs tracking-[0.5em] text-black/40 mb-8">NOTAS</p>

          <p className="font-serif text-3xl leading-relaxed">
            Caramelo · Flores blancas · Vainilla · Almizcle
          </p>
        </div>

        <div className="text-black/60 leading-relaxed text-lg">
          Una fragancia pensada para una mujer que no necesita imponerse para
          ser recordada. Dulce, elegante y cálida, con una presencia suave pero
          imposible de ignorar.
        </div>
      </section>
    </main>
  );
}
