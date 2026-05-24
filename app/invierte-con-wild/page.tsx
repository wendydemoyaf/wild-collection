import Link from "next/link";

export default function InvierteConWildPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] bg-black overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B] bg-black/45 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link href="/" className="hover:text-[#F0D8A8] transition-all duration-500">
          WILD COLLECTION
        </Link>
  
        <Link href="/" className="hover:text-[#F0D8A8] transition-all duration-500">
          VOLVER
        </Link>
      </header>
  
      <section className="min-h-screen pt-28 px-6 md:px-20 flex items-center bg-[radial-gradient(circle_at_50%_40%,rgba(184,137,59,0.16),transparent_35%),linear-gradient(135deg,#050302,#120B06,#020202)]">
        <div className="max-w-7xl mx-auto w-full text-center">
          <p className="text-[10px] md:text-xs tracking-[0.55em] text-[#B8893B] mb-6 uppercase">
            Invierte con Wild
          </p>
  
          <h1 className="font-serif text-3xl md:text-6xl leading-[1.15] mb-5">
            ¿Cómo quieres formar parte <br className="hidden md:block" />
            de esta historia?
          </h1>
  
          <p className="text-white/65 text-sm md:text-lg mb-20">
            Toda transformación comienza con una decisión.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-left">
            <div className="border-t border-[#B8893B]/35 pt-8">
              <p className="text-[10px] tracking-[0.35em] text-[#B8893B] uppercase mb-5">
                Lado izquierdo
              </p>
  
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6">
                Crea tu negocio <br />
                con Wild
              </h2>
  
              <p className="text-white/65 text-sm md:text-base leading-[1.8] mb-8">
                Empieza tu propio negocio junto a una comunidad que comparte
                conocimientos, experiencias y oportunidades para crecer.
              </p>
  
              <a
                href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20invertir%20con%20Wild%20Collection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#B8893B] text-black rounded-2xl px-8 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
                  Explorar esta opción
                </button>
              </a>
            </div>
  
            <div className="border-t border-[#B8893B]/35 pt-8">
              <p className="text-[10px] tracking-[0.35em] text-[#B8893B] uppercase mb-5">
                Lado derecho
              </p>
  
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-6">
                Crece <br />
                con Wild
              </h2>
  
              <p className="text-white/65 text-sm md:text-base leading-[1.8] mb-8">
                Desarrolla habilidades comerciales, liderazgo y crecimiento
                personal mientras formas parte de un equipo que avanza junto a ti.
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
      </section>
    </main>
  );