import Link from "next/link";

export default function BornInRomaPage() {
  const notas = [
    ["JAZMÍN", "100%", "#F04F93"],
    ["VAINILLA", "90%", "#F6C6D8"],
    ["CASHMERAN", "80%", "#DED8DC"],
    ["MAGENTA", "68%", "#C2185B"],
    ["FLORAL", "58%", "#F7A7C6"],
    ["AMADERADO", "50%", "#6F1232"],
    ["COUTURE", "46%", "#B85C8A"],
  ];

  return (
    <main className="min-h-screen text-[#111111] overflow-hidden bg-[radial-gradient(circle_at_78%_38%,rgba(240,79,147,0.28),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(194,24,91,0.16),transparent_32%),radial-gradient(circle_at_55%_60%,rgba(246,198,216,0.75),transparent_38%),linear-gradient(135deg,#FFF7FA,#F6C6D8,#DED8DC)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#C2185B] bg-[#FFF7FA]/70 backdrop-blur-md border-b border-[#F04F93]/35">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#F04F93]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/femenino"
          className="transition-all duration-500 hover:text-[#F04F93]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
              ROMA
            </h1>

            <p className="text-[#C2185B]/80 text-base md:text-lg mt-2 mb-8 md:mb-12">
              Chic & Audaz.
            </p>

            <div className="bg-white/45 border border-[#F04F93]/45 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-12 md:mb-14 backdrop-blur-sm w-full">
              <p className="text-sm md:text-base leading-relaxed text-[#111111]/80">
                Rosa vibrante, negro charol y actitud couture. Una fragancia
                moderna, femenina y atrevida, donde el jazmín, la vainilla y el
                cashmeran se sienten chic, audaces y memorables.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
              {[
                ["AROMA", "Floral · Vainilla"],
                ["MOMENTOS WILD", "Noche · Salida"],
                ["PERSONALIDAD", "Chic · Audaz"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#F04F93] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C2185B]/80 to-transparent mb-2"></div>
                  <p className="text-sm text-[#111111]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20BORN%20IN%20ROMA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#111111] text-[#F6C6D8] border border-[#F04F93]/60 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#F04F93] hover:border-[#F04F93] hover:text-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/fem4.webp"
              alt="ROMA"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-white/45 border border-[#F04F93]/45 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(240,79,147,0.26)]">
                <p className="text-center text-[11px] md:text-[13px] font-extrabold tracking-[0.25em] text-[#111111] mb-4 uppercase">
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
