import Link from "next/link";

export default function AmberOudPage() {
  const notas = [
    ["ÁMBAR", "100%", "#C89B3C"],
    ["ORIENTAL", "90%", "#E7D2A2"],
    ["MIEL", "78%", "#A86A1F"],
    ["MADERA", "68%", "#4B382A"],
    ["RESINA", "58%", "#D6A94E"],
    ["CÁLIDO", "50%", "#F6EFE4"],
    ["OUD", "46%", "#8A5A24"],
  ];

  return (
    <main className="min-h-screen text-[#F6EFE4] overflow-hidden bg-[radial-gradient(circle_at_72%_38%,rgba(200,155,60,0.28),transparent_26%),radial-gradient(circle_at_30%_72%,rgba(168,106,31,0.28),transparent_34%),linear-gradient(135deg,#2A160B,#4B382A,#120B06)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#C89B3C] bg-[#120B06]/60 backdrop-blur-md border-b border-[#C89B3C]/25">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#F6EFE4]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/unisex"
          className="transition-all duration-500 hover:text-[#F6EFE4]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2 text-[#F6EFE4]">
              AMBER <br /> OUD
            </h1>

            <p className="text-[#C89B3C] text-base md:text-lg mt-2 mb-8 md:mb-12">
              Ámbar & Lujo Oriental.
            </p>

            <div className="bg-black/25 border border-[#C89B3C]/35 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-10 md:mb-12 backdrop-blur-sm w-full shadow-[0_0_70px_rgba(200,155,60,0.22)]">
              <p className="text-sm md:text-base leading-relaxed text-[#F6EFE4]/85">
                Una fragancia cálida, elegante y envolvente. Ámbar dorado, miel
                resinosa y maderas suaves se mezclan como reflejos de whisky en
                una noche sofisticada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 bg-black/20 backdrop-blur-md border border-[#C89B3C]/20 rounded-2xl px-6 py-6 mt-6">
              {[
                ["AROMA", "Ámbar · Oud"],
                ["MOMENTOS WILD", "Noche · Elegante"],
                ["PERSONALIDAD", "Sofisticada · Cálida"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#C89B3C] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/90 to-transparent mb-2"></div>
                  <p className="text-sm text-[#F6EFE4]/90">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20AMBER%20OUD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#4B382A] text-[#F6EFE4] border border-[#C89B3C]/60 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#C89B3C] hover:text-[#4B382A] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/amber.webp"
              alt="AMBER OUD"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-[#F6EFE4]/55 border border-[#C89B3C]/45 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_90px_rgba(200,155,60,0.28)]">
                <p className="text-center text-[11px] md:text-[13px] font-extrabold tracking-[0.25em] text-[#4B382A] mb-4 uppercase">
                  Acordes principales
                </p>

                {notas.map(([name, width, color], index) => (
                  <div key={name} className="w-full flex justify-start">
                    <div
                      className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center justify-start pl-3 md:pl-4 text-[8px] md:text-[10px] font-extrabold tracking-[0.08em] uppercase text-black/75 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms]"
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
        </div>
      </section>
    </main>
  );
}
