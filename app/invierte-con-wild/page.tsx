import Link from "next/link";

export default function InvierteConWildPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] bg-black overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B] bg-black/45 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link
          href="/"
          className="hover:text-[#F0D8A8] transition-all duration-500"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/"
          className="hover:text-[#F0D8A8] transition-all duration-500"
        >
          VOLVER
        </Link>
      </header>

      <section className="min-h-screen pt-24 md:pt-28 pb-10 px-6 md:px-20 flex items-start md:items-center bg-black">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] mb-6 uppercase">
            Invierte con Wild
          </p>

          <h1 className="font-serif text-3xl md:text-6xl leading-[1.15] mb-5 max-w-5xl mx-auto">
            ¿Cómo quieres formar parte <br className="hidden md:block" />
            de esta historia?
          </h1>

          <p className="text-white/65 text-sm md:text-lg mb-14 md:mb-20">
            Toda transformación comienza con una decisión.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="group relative min-h-[520px] rounded-[32px] overflow-hidden border border-[#B8893B]/20">
              <img
                src="/invierte.jpg"
                alt="Crea tu negocio con Wild"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-110 translate-x-20 group-hover:opacity-100 group-hover:scale-[1.15] group-hover:translate-x-16 transition-all duration-1000"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.65)_45%,rgba(0,0,0,0.20)_100%)] group-hover:bg-[linear-gradient(90deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.15)_100%)] transition-all duration-700" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6">
                  Crea tu negocio <br />
                  con Wild
                </h2>

                <p className="text-white/70 text-sm md:text-base leading-[1.8] mb-8">
                  Empieza con un kit, accede a formación continua
                  <br /> y desarrolla una actividad que puedes hacer crecer a tu
                  ritmo.
                </p>

                <Link href="/invierte-con-wild/crea-tu-negocio">
                  <button className="border border-[#B8893B]/50 text-[#F0D8A8] hover:bg-[#B8893B]/10 rounded-2xl px-8 py-4 text-[10px] tracking-[0.3em] uppercase transition-all duration-500">
                    Explorar esta opción
                  </button>
                </Link>
              </div>
            </div>

            <div className="group relative min-h-[520px] rounded-[32px] overflow-hidden border border-[#B8893B]/20">
              <img
                src="/crece.jpg"
                alt="Crece con Wild"
                className="absolute inset-0 w-full h-full object-cover object-[center_60%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.15)_100%)] group-hover:bg-[linear-gradient(90deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.10)_100%)] transition-all duration-700" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6">
                  Crece <br />
                  con Wild
                </h2>

                <p className="text-white/70 text-sm md:text-base leading-[1.8] mb-8">
                  Desarrolla habilidades comerciales, liderazgo y crecimiento
                  personal mientras formas parte de un equipo que avanza
                  contigo.
                </p>

                <a
                  href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20información%20sobre%20los%20kits%20Wild"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-[#B8893B]/50 text-[#F0D8A8] rounded-2xl px-8 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#B8893B]/10 transition-all duration-500">
                    Quiero saber más
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
