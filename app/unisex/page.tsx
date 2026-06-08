import Link from "next/link";

export default function UnisexPage() {
  const products = [
    {
      name: "AMBER OUD",
      img: "/amber-diamante.webp",
      link: "/unisex/amber-oud",
    },
    {
      name: "HONOR & GLORY",
      img: "/honor-desde-abajo.webp",
      link: "/unisex/honor-glory",
    },
    {
      name: "KHAMRAH",
      img: "/khamrah-fragmentado.webp",
      link: "/unisex/khamrah",
    },
    {
      name: "OUD FOR GLORY",
      img: "/oud-puerta.webp",
      link: "/unisex/oud-for-glory",
    },
  ];

  return (
    <main className="min-h-screen text-[#F4E6C8] overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(212,160,70,0.18),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(94,44,18,0.28),transparent_34%),radial-gradient(circle_at_20%_75%,rgba(184,137,59,0.14),transparent_35%),linear-gradient(135deg,#120B06,#2A160B,#050302)]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#C8963E] bg-[#120B06]/65 backdrop-blur-md border-b border-[#C8963E]/25">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-10 text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl leading-none mb-4 text-[#F4E6C8]">
          Arabes/Unisex
        </h1>

        <p className="max-w-xl mx-auto text-sm md:text-base text-[#D9B46A]/70 leading-relaxed">
          Fragancias orientales, profundas y sofisticadas.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="group text-center">
              <Link href={product.link} className="block">
                <div className="h-[360px] md:h-[390px] overflow-hidden rounded-3xl bg-black/35 border border-[#C8963E]/25 shadow-[0_0_70px_rgba(184,137,59,0.18)]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <h2 className="font-serif text-xl md:text-2xl text-[#F4E6C8] mt-5">
                  {product.name}
                </h2>
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20${product.name}%20de%20WILD%20COLLECTION`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-black/70 text-[#F4E6C8] border border-[#C8963E]/40 rounded-2xl px-8 py-3 text-[10px] tracking-[0.32em] uppercase hover:bg-[#C8963E]/20 hover:border-[#F4E6C8] hover:text-white transition-all duration-500">
                  Comprar
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
