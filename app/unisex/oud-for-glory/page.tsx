import Link from "next/link";

export default function OudForGloryPage() {
  const notas = [
    ["OUD", "100%", "#A97A2B"],
    ["MADERA", "90%", "#6A431C"],
    ["HUMO", "80%", "#23201D"],
    ["ÁMBAR", "70%", "#D8C3A1"],
    ["ESPECIAS", "60%", "#8A5A24"],
    ["OSCURO", "52%", "#3A2A1D"],
    ["GLORY", "48%", "#C69A45"],
  ];

  return (
    <main className="min-h-screen text-[#D8C3A1] overflow-hidden bg-[radial-gradient(circle_at_72%_34%,rgba(169,122,43,0.22),transparent_26%),radial-gradient(circle_at_30%_72%,rgba(106,67,28,0.30),transparent_35%),radial-gradient(circle_at_50%_50%,rgba(35,32,29,0.45),transparent_42%),linear-gradient(135deg,#0A0A0A,#23201D,#050403)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#A97A2B] bg-[#0A0A0A]/70 backdrop-blur-md border-b border-[#A97A2B]/25">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#D8C3A1]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/unisex"
          className="transition-all duration-500 hover:text-[#D8C3A1]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2 text-[#D8C3A1]">
              OUD FOR <br /> GLORY
            </h1>

            <p className="text-[#A97A2B] text-base md:text-lg mt-2 mb-8 md:mb-12">
              Oscuro & Majestuoso.
            </p>

            <div className="bg-black/35 border border-[#A97A2B]/35 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-10 md:mb-12 backdrop-blur-sm w-full shadow-[0_0_90px_rgba(169,122,43,0.24)]">
              <p className="text-sm md:text-base leading-relaxed text-[#D8C3A1]/88">
                Oud profundo, humo denso y oro envejecido. Una fragancia
                poderosa, elegante y misteriosa, con presencia de templo árabe
                moderno y lujo oscuro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 bg-black/25 backdrop-blur-md border border-[#A97A2B]/20 rounded-2xl px-6 py-6 mt-6">
              {[
                ["AROMA", "Oud · Humo"],
                ["MOMENTOS WILD", "Noche · Poder"],
                ["PERSONALIDAD", "Misteriosa · Cara"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#A97A2B] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#A97A2B]/90 to-transparent mb-2"></div>
                  <p className="text-sm text-[#D8C3A1]/90">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20OUD%20FOR%20GLORY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0A0A0A] text-[#D8C3A1] border border-[#A97A2B]/60 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#A97A2B] hover:text-[#0A0A0A] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/oud1.webp"
              alt="OUD FOR GLORY"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-[#0A0A0A]/75 border border-[#A97A2B]/45 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_100px_rgba(169,122,43,0.30)]">
                <p className="text-center text-[11px] md:text-[13px] font-extrabold tracking-[0.25em] text-[#D8C3A1] mb-4 uppercase">
                  Acordes principales
                </p>

                {notas.map(([name, width, color], index) => (
                  <div key={name} className="w-full flex justify-start">
                    <div
                      className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center justify-start pl-3 md:pl-4 text-[8px] md:text-[10px] font-extrabold tracking-[0.08em] uppercase text-black/80 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms]"
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
