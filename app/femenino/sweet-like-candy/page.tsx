import Link from "next/link";

export default function SweetLikeCandyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-black overflow-hidden animate-fade">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] bg-[#f7f5f2]/80 backdrop-blur-md">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/femenino">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 px-6 md:px-20 gap-10 md:gap-6 items-center">
        {/* TEXTO */}
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.6em] text-black/40 mb-6">
            FRAGANCIA FEMENINA
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
            SWEET LIKE <br /> CANDY
          </h1>

          <p className="italic text-black/60 mb-6">
            Dulce, juguetona y absolutamente irresistible.
          </p>

          <p className="text-base leading-relaxed text-black/70 mb-6">
            Una fragancia deliciosa que mezcla notas azucaradas, frutales y
            cremosas, creando una esencia femenina, divertida y adictiva.
          </p>

          {/* BLOQUES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-6">
            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                AROMA
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Dulce · Frutal</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                MOMENTOS WILD
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Día · Casual</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                PERSONALIDAD
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Coqueta · Dulce</p>
            </div>
          </div>

          {/* BOTÓN */}
          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20SWEET%20LIKE%20CANDY"
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
            src="/fem2.jpeg"
            alt="SWEET LIKE CANDY"
            className="max-h-[78vh] w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <img
            src="/sweet-notas.png"
            alt="Notas SWEET LIKE CANDY"
            className="absolute max-h-[78vh] w-auto object-contain opacity-0 scale-105 blur-sm transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
          />
        </div>
      </section>
    </main>
  );
}
