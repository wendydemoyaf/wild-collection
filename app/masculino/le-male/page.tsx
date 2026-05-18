import Link from "next/link";

export default function LeMalePage() {
  const notas = [
    ["MIEL", "100%", "#C47A17"],
    ["VAINILLA", "92%", "#F0D8A8"],
    ["TONKA", "82%", "#B8893B"],
    ["TABACO", "72%", "#8A3F0A"],
    ["BENJUÍ", "62%", "#A65A12"],
    ["LAVANDA", "52%", "#B8A7D8"],
    ["MENTA", "44%", "#9FD6C0"],
    ["ÁMBAR", "36%", "#7A3F16"],
    ["ESPECIADO", "30%", "#D49A4A"],
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden bg-[radial-gradient(circle_at_78%_38%,rgba(196,122,23,0.24),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(138,63,10,0.26),transparent_32%),radial-gradient(circle_at_55%_60%,rgba(240,216,168,0.10),transparent_35%),linear-gradient(135deg,#120C07,#1A0E06,#050302)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B] bg-[#120C07]/60 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link href="/" className="transition-all duration-500 hover:text-[#F0D8A8] hover:drop-shadow-[0_0_10px_rgba(196,122,23,0.9)]">
          WILD COLLECTION
        </Link>

        <Link href="/masculino" className="transition-all duration-500 hover:text-[#F0D8A8] hover:drop-shadow-[0_0_10px_rgba(196,122,23,0.9)]">
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.95] mb-2">
            LE MALE <br /> ELIXIR
          </h1>

          <p className="text-[#F0D8A8]/80 text-base md:text-lg mt-2 mb-8 md:mb-12">
            Dorado & Seductor.
          </p>

          <div className="bg-black/25 border border-[#B8893B]/20 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-10 md:mb-14 backdrop-blur-sm w-full">
            <p className="text-sm md:text-base leading-relaxed text-[#F0D8A8]/85">
              Miel oscura bajo luz dorada: sensual, denso, cálido y envolvente.
              Una fragancia masculina, dulce y peligrosa con elegancia, hecha
              para dejar una estela memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mb-8 md:mb-2">
            {[
              ["AROMA", "Miel · Vainilla"],
              ["MOMENTOS WILD", "Noche · Deseo"],
              ["PERSONALIDAD", "Seductor · Intenso"],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="text-[10px] tracking-[0.35em] text-[#C47A17] mb-2">
                  {title}
                </p>
                <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#F0D8A8]/80 to-transparent mb-2"></div>
                <p className="text-sm text-[#F0D8A8]">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20LE%20MALE%20ELIXIR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/80 text-[#F0D8A8] border border-[#B8893B]/40 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#C47A17]/15 hover:border-[#F0D8A8] hover:text-white transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center group w-[320px] md:w-[360px] mx-auto mb-14 md:mb-10 md:mt-8">
          <img
            src="/lemalep.jpg"
            alt="LE MALE ELIXIR"
            className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="w-full h-[60vh] md:h-[70vh] bg-black/40 border border-[#B8893B]/20 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(196,122,23,0.22)]">
              <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.22em] md:tracking-[0.25em] text-[#F0D8A8]/85 mb-4 uppercase">
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
      </section>
    </main>
  );
}