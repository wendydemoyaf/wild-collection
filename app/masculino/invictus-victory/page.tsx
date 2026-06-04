import Link from "next/link";

export default function InvictusVictoryPage() {
  const notas = [
    ["AVAINILLADO", "100%", "#F5EE7A"],
    ["ÁMBAR", "92%", "#B65317"],
    ["DULCE", "62%", "#F17A82"],
    ["AROMÁTICO", "58%", "#8FD0C5"],
    ["ESPECIADO", "50%", "#E4A286"],
    ["LAVANDA", "45%", "#E8D9F1"],
    ["ATALCADO", "39%", "#EFE8DA"],
    ["FRESCO", "35%", "#B7E889"],
    ["CÍTRICO", "31%", "#F1ED78"],
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden animate-fade bg-[radial-gradient(circle_at_78%_38%,rgba(0,229,255,0.18),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(107,53,255,0.18),transparent_30%),radial-gradient(circle_at_60%_60%,rgba(201,133,43,0.22),transparent_35%),linear-gradient(135deg,#02040A,#0B1A24)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893A] bg-[#02040A]/35 backdrop-blur-md border-b border-[#B8893A]/20">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#EAF3F8] hover:drop-shadow-[0_0_10px_rgba(184,137,58,0.9)]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/masculino"
          className="transition-all duration-500 hover:text-[#EAF3F8] hover:drop-shadow-[0_0_10px_rgba(184,137,58,0.9)]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-xs tracking-[0.45em] md:tracking-[0.6em] text-black/40 mb-5">
            FRAGANCIA MASCULINA
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
            INVICTUS <br /> VICTORY
          </h1>

          <p className="text-[#EAF3F8]/55 text-base md:text-lg mt-2 mb-8 md:mb-12">
            Nacido para ganar
          </p>

          <div className="bg-black/20 border border-black/20 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-12 md:mb-16 backdrop-blur-sm w-full">
            <p className="text-sm md:text-base leading-relaxed text-[#EAF3F8]/75">
              Imagina una noche de triunfo, luces doradas y una presencia que
              domina sin esfuerzo. Un aroma vibrante, masculino y envolvente,
              hecho para quien no pasa desapercibido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-8 md:mb-2 md:-translate-y-8">
            {[
              ["AROMA", "Intenso · Ambarado"],
              ["MOMENTOS WILD", "Noche · Triunfo"],
              ["PERSONALIDAD", "Dominante · Seguro"],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="text-[10px] tracking-[0.35em] text-[#EAF3F8] mb-2">
                  {title}
                </p>
                <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#EAF3F8]/80 to-transparent mb-2"></div>
                <p className="text-sm text-[#EAF3F8]">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:mt-0">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20INVICTUS%20VICTORY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/80 text-white border border-black/80 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-white/10 hover:backdrop-blur-md hover:text-[#EAF3F8] hover:border-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center group w-[320px] md:w-[360px] mx-auto mb-10 md:mb-0 md:mt-14">
          <img
            src="/invicto.webp"
            alt="INVICTUS VICTORY"
            className="max-h-[60vh] md:max-h-[73vh] w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="w-full h-[60vh] md:h-[73vh] bg-black/30 border border-white/5 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
              <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.22em] md:tracking-[0.25em] text-[#EAF3F8]/80 mb-4 uppercase">
                Acordes principales
              </p>

              {notas.map(([name, width, color], index) => (
                <div key={name} className="w-full flex justify-start">
                  <div
                    className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center justify-start pl-4 md:pl-5 text-[9px] md:text-[11px] font-bold text-black/70 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width,
                      backgroundColor: color,
                      transitionDelay: `${index * 90}ms`,
                    }}
                  >
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
