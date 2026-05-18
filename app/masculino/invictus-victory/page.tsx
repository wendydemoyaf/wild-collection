import Link from "next/link";

export default function InvictusVictoryPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden animate-fade bg-[radial-gradient(circle_at_78%_38%,rgba(0,229,255,0.18),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(107,53,255,0.18),transparent_30%),radial-gradient(circle_at_60%_60%,rgba(201,133,43,0.22),transparent_35%),linear-gradient(135deg,#02040A,#0B1A24)]">
      <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex justify-between text-xs tracking-[0.35em] text-[#B8893A] bg-[#02040A]/35 backdrop-blur-md border-b border-[#B8893A]/20">
      <Link
  href="/"
  className="relative text-[#B8893A] transition-all duration-500 hover:text-[#EAF3F8] hover:drop-shadow-[0_0_10px_rgba(184,137,58,0.9)]"
>
  WILD COLLECTION
</Link>

<Link
  href="/masculino"
  className="relative text-[#B8893A] transition-all duration-500 hover:text-[#EAF3F8] hover:drop-shadow-[0_0_10px_rgba(184,137,58,0.9)]"
>
  VOLVER
</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 px-6 md:px-20 gap-10 md:gap-6 items-center">
      <div className="max-w-2xl">
          <p className="text-xs tracking-[0.6em] text-black/40 mb-6">
            FRAGANCIA MASCULINA
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-1">
            INVICTUS <br /> VICTORY
          </h1>

          <p className="text-[#EAF3F8]/55 text-lg mt-2 mb-12">
  Nacido para ganar.
</p>

<div className="bg-black/20 border border-black/20 rounded-2xl px-6 py-3 mb-14 backdrop-blur-sm w-full">
<p className="text-base leading-relaxed text-[#EAF3F8]/75">
    Imagina una noche de triunfo, luces doradas y una presencia que
    domina sin esfuerzo. Un aroma vibrante, masculino y envolvente,
    hecho para quien no pasa desapercibido.
  </p>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-6">
            <div className="pt-4">
            <p className="text-[10px] tracking-[0.35em] text-[#EAF3F8] mb-2">
                AROMA
              </p>
              <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#EAF3F8]/80 to-transparent mb-3"></div>
              <p className="text-sm text-[#EAF3F8]">Intenso · Ambarado</p>
            </div>

            <div className="pt-4">
            <p className="text-[10px] tracking-[0.35em] text-[#EAF3F8] mb-2">
                MOMENTOS WILD
              </p>
              <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#EAF3F8]/80 to-transparent mb-3"></div>
              <p className="text-sm text-[#EAF3F8]">Noche · Triunfo</p>
            </div>

            <div className="pt-4">
            <p className="text-[10px] tracking-[0.35em] text-[#EAF3F8] mb-2">
                PERSONALIDAD
              </p>
              <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#EAF3F8]/80 to-transparent mb-3"></div>
              <p className="text-sm text-[#EAF3F8]">Dominante · Seguro</p>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20INVICTUS%20VICTORY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-[-6px] bg-black/80 text-white border border-black/80 rounded-2xl px-10 py-4 text-xs tracking-[0.35em] uppercase hover:bg-white/10 hover:backdrop-blur-md hover:text-[#EAF3F8] hover:border-white transition-all duration-500">
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
