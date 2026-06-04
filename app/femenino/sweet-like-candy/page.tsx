import Link from "next/link";

export default function SweetLikeCandyPage() {
  const notas = [
    ["AZÚCAR", "100%", "#F7B6D2"],
    ["VAINILLA", "90%", "#FBE7D4"],
    ["FRUTAL", "80%", "#FF8FB8"],
    ["MORA", "68%", "#B85C9E"],
    ["CREMOSO", "58%", "#F7E9DF"],
    ["DULCE", "50%", "#F4A6C8"],
    ["ALMIZCLE", "46%", "#E8C7D8"],
  ];

  return (
    <main className="min-h-screen text-[#4A1F32] overflow-hidden bg-[radial-gradient(circle_at_78%_38%,rgba(255,143,184,0.30),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(184,92,158,0.18),transparent_32%),radial-gradient(circle_at_55%_60%,rgba(247,233,223,0.85),transparent_38%),linear-gradient(135deg,#FFF7FA,#FBE7F0,#FFF1F6)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B85C9E] bg-[#FFF7FA]/70 backdrop-blur-md border-b border-[#F7B6D2]/40">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#FF5FA2]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/femenino"
          className="transition-all duration-500 hover:text-[#FF5FA2]"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-28 md:pt-24 px-6 md:px-20 gap-12 md:gap-6 items-center">
        <div className="max-w-2xl md:h-[70vh] flex flex-col">
          <div>
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-2">
              SWEET <br /> LIKE CANDY
            </h1>

            <p className="text-[#B85C9E]/80 text-base md:text-lg mt-2 mb-8 md:mb-12">
              Dulce & Encantadora.
            </p>

            <div className="bg-white/45 border border-[#F7B6D2]/50 rounded-2xl px-5 md:px-6 py-4 md:py-3 mb-12 md:mb-14 backdrop-blur-sm w-full">
              <p className="text-sm md:text-base leading-relaxed text-[#4A1F32]/80">
                Una fragancia dulce, cremosa y juguetona, como un recuerdo feliz
                envuelto en vainilla, frutas suaves y una estela femenina que se
                siente tierna, coqueta e irresistible.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
              {[
                ["AROMA", "Dulce · Cremoso"],
                ["MOMENTOS WILD", "Día · Cita"],
                ["PERSONALIDAD", "Coqueta · Tierna"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-[10px] tracking-[0.35em] text-[#FF5FA2] mb-2">
                    {title}
                  </p>
                  <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-[#B85C9E]/80 to-transparent mb-2"></div>
                  <p className="text-sm text-[#4A1F32]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20SWEET%20LIKE%20CANDY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#4A1F32] text-[#FFF7FA] border border-[#F7B6D2]/60 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase hover:bg-[#FF5FA2] hover:border-[#FF5FA2] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mx-auto mb-14 md:mb-10 md:mt-8">
          <div className="relative inline-block group">
            <img
              src="/fem3.webp"
              alt="SWEET LIKE CANDY"
              className="block max-h-[60vh] md:max-h-[70vh] w-auto max-w-full object-contain rounded-3xl transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="w-full h-full bg-white/45 border border-[#F7B6D2]/50 rounded-3xl backdrop-blur-xl px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2 shadow-[0_0_80px_rgba(255,143,184,0.28)]">
                <p className="text-center text-[11px] md:text-[13px] font-extrabold tracking-[0.25em] text-[#4A1F32] mb-4 uppercase">
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
