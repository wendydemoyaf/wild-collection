import Link from "next/link";

export default function InvictusVictoryPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden animate-fade bg-[radial-gradient(circle_at_78%_38%,rgba(0,229,255,0.22),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(107,53,255,0.24),transparent_30%),linear-gradient(135deg,#02040A,#050B1A)]">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] text-[#C9D3E6] bg-[#02040A]/35 backdrop-blur-md border-b border-white/10">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/masculino">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 px-6 md:px-20 gap-10 md:gap-6 items-center">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.6em] text-black/40 mb-6">
            FRAGANCIA MASCULINA
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
            INVICTUS <br /> VICTORY
          </h1>

          <p className="italic text-black/60 mb-6">Nacido para ganar.</p>

          <p className="text-base leading-relaxed text-black/70 mb-6">
            Imagina una noche de triunfo, luces doradas y una presencia que
            domina sin esfuerzo. Un aroma vibrante, masculino y envolvente,
            hecho para quien no pasa desapercibido.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-6">
            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                AROMA
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Intenso · Ambarado</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                MOMENTOS WILD
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Noche · Triunfo</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] tracking-[0.35em] text-black/40 mb-2">
                PERSONALIDAD
              </p>
              <div className="w-14 h-[1px] bg-black/30 mb-3"></div>
              <p className="text-sm">Dominante · Seguro</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20INVICTUS%20VICTORY"
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
            src="/invictop.jpg"
            alt="INVICTUS VICTORY"
            className="max-h-[78vh] w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <img
            src="/invicto-notas.png"
            alt="Notas INVICTUS VICTORY"
            className="absolute max-h-[78vh] w-auto object-contain opacity-0 scale-105 blur-sm transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
          />
        </div>
      </section>
    </main>
  );
}
