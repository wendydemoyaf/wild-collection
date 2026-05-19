import Link from "next/link";

export default function ScandalPage() {
  const notas = [
    ["MIEL", "100%", "#D89A2B"],
    ["GARDENIA", "90%", "#D9A5AF"],
    ["DULCE", "80%", "#F5EBDD"],
    ["PACHULÍ", "68%", "#6F1232"],
    ["CEREZA", "58%", "#B0143B"],
    ["FLORAL", "48%", "#E8B8C2"],
    ["ÁMBAR", "38%", "#B66A2B"],
  ];

  return (
    <main className="min-h-screen text-[#2A0815] overflow-hidden bg-[radial-gradient(circle_at_78%_38%,rgba(216,154,43,0.30),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(176,20,59,0.16),transparent_32%),radial-gradient(circle_at_55%_60%,rgba(245,235,221,0.80),transparent_38%),linear-gradient(135deg,#F5EBDD,#E8C8B5,#F5EBDD)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#6F1232] bg-[#F5EBDD]/65 backdrop-blur-md border-b border-[#D89A2B]/25">
        <Link href="/" className="transition-all duration-500 hover:text-[#B0143B]">
          WILD COLLECTION
        </Link>

        <Link href="/femenino" className="transition-all duration-500 hover:text-[#B0143B]">
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col justify-between md:pb-10">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
              SCANDAL
            </h1>

            <p className="text-[#6F1232]/80 text-base md:text-lg mt-2 mb-8 md:mb-12">
              Atrevida & Adictiva.
            </p>

            <div className="bg-white/35 border border-[#D89A2B]/35 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-12 md:mb-14 backdrop-blur-sm w-full">
              <p className="text-sm md:text-base leading-relaxed text-[#2A0815]/80">
                Miel dorada, flor blanca y una profundidad sensual. Una fragancia
                atrevida, dulce y lujosa, hecha para provocar miradas y dejar una
                estela imposible de ignorar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
              {[
                ["AROMA", "Miel · Floral"],
                ["MOMENTOS WILD", "Noche · Fiesta"],
                ["PERSONALIDAD", "Atrevida · Sensual"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#B0143B] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#D89A2B]/90 to-transparent mb-2"></div>
                  <p className="text-sm text-[#6F1232]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 md:-mt-10">
            <a href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20SCANDAL" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#6F1232] text-[#F5EBDD] border border-[#D89A2B]/50 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#B0143B] hover:border-[#D89A2B] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/fem3.jpeg"
              alt="SCANDAL"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-[#6F1232]/85 border border-[#D89A2B]/30 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(216,154,43,0.24)]">
                <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.22em] md:tracking-[0.25em] text-[#F5EBDD]/90 mb-4 uppercase">
                  Acordes principales
                </p>

                {notas.map(([name, width, color], index) => (
                  <div key={name} className="w-full flex justify-start">
                    <div
                      className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center justify-start pl-4 md:pl-5 text-[8px] md:text-[10px] font-bold text-black/75 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms]"
                      style={{ width, backgroundColor: color, transitionDelay: `${index * 90}ms` }}
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