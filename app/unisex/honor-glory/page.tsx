import Link from "next/link";

export default function HonorGloryPage() {
  const notas = [
    ["CREMOSO", "100%", "#F2E7D5"],
    ["DULCE", "90%", "#D8C29A"],
    ["VAINILLA", "80%", "#EAD8B8"],
    ["ESPECIADO", "68%", "#C9A45D"],
    ["SUAVE", "58%", "#BFA98F"],
    ["CÁLIDO", "50%", "#8B7563"],
    ["ELEGANTE", "46%", "#3E2F28"],
  ];

  return (
    <main className="min-h-screen text-[#3E2F28] overflow-hidden bg-[radial-gradient(circle_at_70%_35%,rgba(201,164,93,0.22),transparent_30%),radial-gradient(circle_at_30%_75%,rgba(216,194,154,0.32),transparent_35%),radial-gradient(circle_at_50%_45%,rgba(242,231,213,0.72),transparent_42%),linear-gradient(135deg,#F2E7D5,#D8C29A,#BFA98F)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#8B7563] bg-[#F2E7D5]/70 backdrop-blur-md border-b border-[#C9A45D]/30">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#C9A45D]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/unisex"
          className="transition-all duration-500 hover:text-[#C9A45D]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
              HONOR <br /> & GLORY
            </h1>

            <p className="text-[#8B7563]/85 text-base md:text-lg mt-2 mb-8 md:mb-12">
              Refinado & Luminoso.
            </p>

            <div className="bg-[#F2E7D5]/55 border border-[#C9A45D]/35 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-12 md:mb-14 backdrop-blur-sm w-full shadow-[0_0_60px_rgba(201,164,93,0.16)]">
              <p className="text-sm md:text-base leading-relaxed text-[#3E2F28]/85">
                Una fragancia serena, elegante y luminosa. Cremosa, cálida y
                sofisticada, con una presencia suave que no grita: simplemente
                deja una impresión refinada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
              {[
                ["AROMA", "Cremoso · Cálido"],
                ["MOMENTOS WILD", "Día · Elegante"],
                ["PERSONALIDAD", "Refinada · Serena"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#8B7563] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C9A45D]/90 to-transparent mb-2"></div>
                  <p className="text-sm text-[#3E2F28]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20HONOR%20%26%20GLORY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#3E2F28] text-[#F2E7D5] border border-[#C9A45D]/60 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#C9A45D] hover:text-[#3E2F28] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/honor.webp"
              alt="HONOR & GLORY"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-[#F2E7D5]/60 border border-[#C9A45D]/40 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_90px_rgba(201,164,93,0.24)]">
                <p className="text-center text-[11px] md:text-[13px] font-extrabold tracking-[0.25em] text-[#3E2F28] mb-4 uppercase">
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
