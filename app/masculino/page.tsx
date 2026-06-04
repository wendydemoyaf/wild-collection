import Link from "next/link";

export default function MasculinoPage() {
  const products = [
    {
      name: "INVICTUS VICTORY",
      img: "/invicto.webp",
      link: "/masculino/invictus-victory",
    },
    { name: "ASAD", img: "/asad.webp", link: "/masculino/asad" },
    { name: "9PM", img: "/9pmp.webp", link: "/masculino/9pm" },
    {
      name: "LE MALE ELIXIR",
      img: "/lemale.webp",
      link: "/masculino/le-male",
    },
  ];

  return (
    <main className="min-h-screen text-white overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,0.14),transparent_32%),linear-gradient(135deg,#050302,#0B0704,#020202)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B] bg-black/45 backdrop-blur-md border-b border-[#B8893B]/20">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#F0D8A8] hover:drop-shadow-[0_0_10px_rgba(184,137,59,0.9)]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#F0D8A8] hover:drop-shadow-[0_0_10px_rgba(184,137,59,0.9)]"
        >
          VOLVER
        </Link>
      </header>

      <section className="pt-28 md:pt-32 pb-8 md:pb-10 px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl leading-none mb-4">
          Perfumes Masculinos
        </h1>

        <p className="max-w-xl mx-auto text-sm md:text-base text-[#F0D8A8]/65 leading-relaxed">
          Fragancias intensas, elegantes y memorables.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="group text-center">
              <Link href={product.link} className="block">
                <div className="h-[360px] md:h-[390px] overflow-hidden rounded-3xl bg-black/40 border border-[#B8893B]/15 shadow-[0_0_70px_rgba(0,0,0,0.45)]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                <h2 className="font-serif text-xl md:text-2xl text-white mt-5">
                  {product.name}
                </h2>
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20${product.name}%20de%20WILD%20COLLECTION`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-black/70 text-[#F0D8A8] border border-[#B8893B]/35 rounded-2xl px-8 py-3 text-[10px] tracking-[0.32em] uppercase hover:bg-[#B8893B]/15 hover:border-[#F0D8A8] hover:text-white transition-all duration-500">
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
