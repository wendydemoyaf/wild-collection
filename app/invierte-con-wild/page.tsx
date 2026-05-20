import Link from "next/link";

export default function InvierteConWildPage() {
  return (
    <main className="min-h-screen text-[#F0D8A8] overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(184,137,59,0.22),transparent_30%),radial-gradient(circle_at_20%_75%,rgba(120,70,22,0.20),transparent_35%),linear-gradient(135deg,#050302,#120B06,#020202)]">
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

      <section className="min-h-screen pt-32 md:pt-36 px-6 md:px-20 flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] md:text-xs tracking-[0.6em] text-[#B8893B] mb-6 uppercase">
            Invierte con Wild
          </p>

          <h1 className="font-serif text-5xl md:text-8xl leading-none mb-8 text-[#F0D8A8]">
            Convierte perfumes <br /> en ingresos
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/65 leading-relaxed mb-10">
            Inicia tu negocio con productos de alta rotación, margen atractivo y
            una marca diseñada para vender.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20invertir%20con%20Wild%20Collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black/70 text-[#F0D8A8] border border-[#B8893B]/50 rounded-2xl px-10 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#B8893B]/20 hover:border-[#F0D8A8] hover:text-white transition-all duration-500">
              Quiero empezar
            </button>
          </a>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            [
              "Compra inteligente",
              "Accede a kits donde cada perfume puede salirte desde $3.5.",
            ],
            [
              "Venta rentable",
              "Puedes vender cada unidad hasta en $10, generando una rentabilidad atractiva.",
            ],
            [
              "Acompañamiento Wild",
              "Recibe guía, materiales y próximamente cursos para vender mejor.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="bg-black/35 border border-[#B8893B]/25 rounded-3xl px-7 py-8 backdrop-blur-md shadow-[0_0_70px_rgba(0,0,0,0.35)]"
            >
              <h2 className="font-serif text-2xl text-[#F0D8A8] mb-4">
                {title}
              </h2>

              <p className="text-sm text-white/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 pb-32">
        <div className="max-w-5xl mx-auto bg-[#F0D8A8]/10 border border-[#B8893B]/30 rounded-3xl px-8 md:px-14 py-12 text-center backdrop-blur-md">
          <p className="text-[10px] tracking-[0.45em] text-[#B8893B] mb-5 uppercase">
            Oportunidad Wild
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-[#F0D8A8] mb-6">
            Rentabilidad de hasta 300%
          </h2>

          <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-3xl mx-auto mb-10">
            Wild Collection te permite comprar productos a precio especial para
            revenderlos con margen. La idea es simple: compras mejor, vendes con
            estrategia y conviertes perfumes en una fuente de ingresos.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20información%20sobre%20los%20kits%20Wild"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#B8893B] text-black rounded-2xl px-10 py-4 text-[10px] md:text-xs tracking-[0.35em] uppercase hover:bg-[#F0D8A8] transition-all duration-500">
              Ver kits por WhatsApp
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
