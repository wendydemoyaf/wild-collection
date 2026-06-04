import Link from "next/link";

export default function KhamrahPage() {
  const notas = [
    ["CANELA", "100%", "#8C4B24"],
    ["COÑAC", "90%", "#B56A2D"],
    ["DÁTIL", "80%", "#C68A4A"],
    ["VAINILLA", "70%", "#E7D3B5"],
    ["ÁMBAR", "60%", "#A85F2D"],
    ["DULCE", "52%", "#D49A5B"],
    ["LICOR", "48%", "#5A2E1C"],
  ];

  return (
    <main className="min-h-screen text-[#E7D3B5] overflow-hidden bg-[radial-gradient(circle_at_72%_36%,rgba(198,138,74,0.28),transparent_26%),radial-gradient(circle_at_30%_72%,rgba(140,75,36,0.34),transparent_34%),radial-gradient(circle_at_52%_48%,rgba(181,106,45,0.18),transparent_38%),linear-gradient(135deg,#2A1812,#5A2E1C,#120905)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#C68A4A] bg-[#2A1812]/65 backdrop-blur-md border-b border-[#C68A4A]/25">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#E7D3B5]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/unisex"
          className="transition-all duration-500 hover:text-[#E7D3B5]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2 text-[#E7D3B5]">
              KHAMRAH
            </h1>

            <p className="text-[#C68A4A] text-base md:text-lg mt-2 mb-8 md:mb-12">
              Especiado & Gourmand.
            </p>

            <div className="bg-black/25 border border-[#C68A4A]/35 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-10 md:mb-12 backdrop-blur-sm w-full shadow-[0_0_80px_rgba(181,106,45,0.25)]">
              <p className="text-sm md:text-base leading-relaxed text-[#E7D3B5]/88">
                Canela quemada, ámbar oscuro y un dulzor licoroso que se siente
                cálido, intenso y adictivo. Una fragancia gourmand premium, como
                coñac, especias y humo ámbar en una noche elegante.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 bg-black/20 backdrop-blur-md border border-[#C68A4A]/20 rounded-2xl px-6 py-6 mt-6">
              {[
                ["AROMA", "Canela · Dulce"],
                ["MOMENTOS WILD", "Noche · Invierno"],
                ["PERSONALIDAD", "Intensa · Adictiva"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#C68A4A] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C68A4A]/90 to-transparent mb-2"></div>
                  <p className="text-sm text-[#E7D3B5]/90">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20KHAMRAH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#2A1812] text-[#E7D3B5] border border-[#C68A4A]/60 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#C68A4A] hover:text-[#2A1812] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/khamrah.webp"
              alt="KHAMRAH"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-[#2A1812]/70 border border-[#C68A4A]/45 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_90px_rgba(198,138,74,0.28)]">
                <p className="text-center text-[11px] md:text-[13px] font-extrabold tracking-[0.25em] text-[#E7D3B5] mb-4 uppercase">
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
