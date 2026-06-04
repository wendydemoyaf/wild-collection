import Link from "next/link";

export default function PradaCandyPage() {
  const notas = [
    ["CARAMELO", "100%", "#D4145A"],
    ["BENJUÍ", "90%", "#B66A50"],
    ["VAINILLA", "80%", "#F7E9DF"],
    ["ALMIZCLE", "68%", "#F2C9D8"],
    ["DULCE", "58%", "#F04C8B"],
    ["ÁMBAR", "48%", "#9A4A38"],
    ["CÁLIDO", "38%", "#C47A7A"],
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden bg-[radial-gradient(circle_at_78%_38%,rgba(212,20,90,0.28),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(240,76,139,0.22),transparent_32%),radial-gradient(circle_at_55%_60%,rgba(182,106,80,0.18),transparent_35%),linear-gradient(135deg,#161214,#2A101B,#080506)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#F7E9DF] bg-[#161214]/60 backdrop-blur-md border-b border-[#D4145A]/20">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#F04C8B]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/femenino"
          className="transition-all duration-500 hover:text-[#F04C8B]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col justify-between md:pb-10">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
              CANDY
            </h1>

            <p className="text-[#F7E9DF]/80 text-base md:text-lg mt-2 mb-8 md:mb-12">
              Dulce & Sofisticada.
            </p>

            <div className="bg-black/25 border border-[#D4145A]/20 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-12 md:mb-14 backdrop-blur-sm w-full">
              <p className="text-sm md:text-base leading-relaxed text-[#F7E9DF]/85">
                Imagina entrar a una pastelería elegante en París mientras el
                aire se llena de caramelo caliente y vainilla cremosa. Dulce,
                sofisticado y tan adictivo que provoca quedarse un poco más.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
              {[
                ["AROMA", "Dulce · Gourmand"],
                ["MOMENTOS WILD", "Cita · Noche suave"],
                ["PERSONALIDAD", "Sofisticada · Adictiva"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#F04C8B] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#B66A50]/90 to-transparent mb-2"></div>
                  <p className="text-sm text-[#F7E9DF]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 md:-mt-10">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20PRADA%20CANDY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/80 text-[#F7E9DF] border border-[#D4145A]/40 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#D4145A]/15 hover:border-[#F04C8B] hover:text-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/fem1.webp"
              alt="CANDY"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-black/40 border border-[#D4145A]/20 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(212,20,90,0.24)]">
                <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.22em] md:tracking-[0.25em] text-[#F7E9DF]/85 mb-4 uppercase">
                  Acordes principales
                </p>

                {notas.map(([name, width, color], index) => (
                  <div key={name} className="w-full flex justify-start">
                    <div
                      className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center justify-start pl-4 md:pl-5 text-[8px] md:text-[10px] font-bold text-black/75 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms]"
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
