import Link from "next/link";

export default function NinePMPage() {
  const notas = [
    ["VAINILLA", "100%", "#C9D3E6"],
    ["DULCE", "92%", "#8B5CFF"],
    ["PERA", "84%", "#D8E6F7"],
    ["CANELA", "74%", "#A66A45"],
    ["LAVANDA", "64%", "#B8A7FF"],
    ["ÁMBAR", "56%", "#B8893A"],
    ["BERGAMOTA", "48%", "#7FEAFF"],
    ["TONKA", "40%", "#6B35FF"],
    ["FRESCO", "34%", "#AEEFFF"],
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden bg-[linear-gradient(135deg,#02040A,#050B1A,#02040A)]">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#C9D3E6] bg-[#02040A]/60 backdrop-blur-md border-b border-[#6B35FF]/20">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#00E5FF] hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.9)]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/masculino"
          className="transition-all duration-500 hover:text-[#00E5FF] hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.9)]"
        >
          VOLVER
        </Link>
      </header>

      {/* CONTENT */}
      <section className="grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] pt-24 md:pt-24 px-6 md:px-20 gap-10 md:gap-6 items-center">

        {/* TEXTO */}
        <div className="max-w-2xl">

          {/* FIX: menos margen arriba en móvil */}
          <h1 className="font-serif text-4xl md:text-7xl leading-none mb-2">
            9PM
          </h1>

          <p className="text-[#C9D3E6] text-base md:text-lg mb-8 md:mb-12">
            Nocturno & Magnético.
          </p>

          {/* FIX: mejor contraste */}
          <div className="bg-white/5 border border-[#6B35FF]/20 rounded-2xl px-5 py-4 mb-12 md:mb-20 backdrop-blur-sm">
            <p className="text-sm md:text-base leading-relaxed text-white/85">
              Una fragancia de noche, dulce, fresca y provocadora. Luces frías,
              música intensa, ropa impecable y una presencia urbana que no
              necesita hablar demasiado para hacerse notar.
            </p>
          </div>

          {/* ATRIBUTOS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 md:mb-2">
            {[
              ["AROMA", "Dulce · Fresco"],
              ["MOMENTOS WILD", "Noche · Cita"],
              ["PERSONALIDAD", "Magnético · Urbano"],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="text-[10px] tracking-[0.35em] text-white/70 mb-2">
                  {title}
                </p>
                <div className="w-14 h-[1px] bg-[#6B35FF]/70 mb-2"></div>
                <p className="text-sm text-white">{text}</p>
              </div>
            ))}
          </div>

          {/* BOTÓN - FIX: no tan abajo en móvil */}
          <div className="flex justify-center md:justify-start mt-6 md:mt-10">
            <a
              href="https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%209PM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black/80 text-white border border-[#6B35FF]/40 rounded-2xl px-8 md:px-10 py-4 text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-[#6B35FF]/15 hover:border-[#00E5FF] transition-all duration-500">
                Comprar por WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative flex justify-center items-center group w-[300px] md:w-[360px] mx-auto mt-6 md:mt-8">

          {/* FIX: imagen aparece antes en móvil */}
          <img
            src="/9pmp.jpg"
            alt="9PM"
            className="max-h-[55vh] md:max-h-[70vh] w-auto object-contain transition-all duration-1000 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm"
          />

          {/* HOVER */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="w-full h-[55vh] md:h-[70vh] bg-black/40 border border-[#6B35FF]/20 rounded-3xl backdrop-blur-xl px-6 md:px-10 py-10 md:py-14 flex flex-col justify-center gap-2">

              <p className="text-center text-[11px] md:text-[13px] font-bold tracking-[0.25em] text-white/80 mb-4 uppercase">
                Acordes principales
              </p>

              {notas.map(([name, width, color], index) => (
                <div key={name}>
                  <div
                    className="h-7 md:h-8 rounded-r-xl rounded-l-sm flex items-center pl-4 text-[9px] md:text-[10px] font-bold text-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1200ms]"
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