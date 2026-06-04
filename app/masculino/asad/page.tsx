import Link from "next/link";

export default function AsadPage() {
  const notas = [
    ["PIMIENTA NEGRA", "100%", "#2B1710"],
    ["ÁMBAR", "92%", "#9A5A12"],
    ["TABACO", "84%", "#7A3F16"],
    ["VAINILLA", "76%", "#E0B86A"],
    ["CAFÉ", "66%", "#120B06"],
    ["PACHULÍ", "58%", "#4A2A16"],
    ["MADERA SECA", "50%", "#8A5A2B"],
    ["BENJUÍ", "42%", "#C18A2B"],
    ["PIÑA", "34%", "#D6A84A"],
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden animate-fade bg-[radial-gradient(circle_at_78%_38%,rgba(154,90,18,0.35),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(122,63,22,0.28),transparent_30%),radial-gradient(circle_at_55%_60%,rgba(193,138,43,0.22),transparent_35%),linear-gradient(135deg,#120B06,#1B0F08,#050302)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#C18A2B] bg-[#120B06]/45 backdrop-blur-md border-b border-[#C18A2B]/20">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/masculino">VOLVER</Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
            ASAD
          </h1>

          <p className="text-[#E0B86A]/70 text-base md:text-lg mt-2 mb-8 md:mb-12">
            Dominio en cada gota
          </p>

          <div className="bg-black/25 border border-[#C18A2B]/15 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-16 md:mb-20 backdrop-blur-sm w-full">
            <p className="text-sm md:text-base leading-relaxed text-[#F5E2B8]/75">
              Poder árabe embotellado: especias oscuras, ámbar caliente, humo
              suave y una presencia dominante. Una fragancia intensa, seria y
              elegante, creada para imponer respeto sin decir una palabra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-8 md:mb-2">
            {[
              ["AROMA", "Especiado · Ambarado"],
              ["MOMENTOS WILD", "Noche · Autoridad"],
              ["PERSONALIDAD", "Dominante · Imperial"],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="text-[10px] tracking-[0.35em] text-[#E0B86A] mb-2">
                  {title}
                </p>
                <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#C18A2B]/80 to-transparent mb-2"></div>
                <p className="text-sm text-[#F5E2B8]">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-10">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20ASAD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/80 text-[#F5E2B8] border border-[#C18A2B]/30 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#C18A2B]/15 hover:text-[#E0B86A] hover:border-[#E0B86A] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center group w-[320px] md:w-[360px] mx-auto mb-14 md:mb-10 md:mt-8">
          <img
            src="/asad.webp"
            alt="ASAD"
            className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="w-full h-[60vh] md:h-[70vh] bg-black/35 border border-[#C18A2B]/10 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(122,63,22,0.35)]">
              <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.22em] md:tracking-[0.25em] text-[#E0B86A]/85 mb-4 uppercase">
                Acordes principales
              </p>

              {notas.map(([name, width, color], index) => (
                <div key={name} className="w-full flex justify-start">
                  <div
                    className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center justify-start pl-4 md:pl-5 text-[8px] md:text-[10px] font-bold text-white/80 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
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
