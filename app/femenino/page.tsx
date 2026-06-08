import Link from "next/link";

export default function FemeninoPage() {
  const products = [
    {
      name: "PRADA CANDY",
      img: "/candy-lujo.webp",
      link: "/femenino/prada-candy",
    },
    {
      name: "SCANDAL",
      img: "/scandal-primer-plano.webp",
      link: "/femenino/scandal",
    },
    {
      name: "SWEET LIKE CANDY",
      img: "/sweet-primer-plano.webp",
      link: "/femenino/sweet-like-candy",
    },
    {
      name: "BORN IN ROMA",
      img: "/valentino-femenino.webp",
      link: "/femenino/born-in-roma",
    },
  ];

  return (
    <main className="min-h-screen text-[#2A1418] overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(184,137,59,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(212,20,90,0.10),transparent_30%),linear-gradient(135deg,#FFF7F3,#F7E9DF,#FBEFF3)]">
      <header className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-5 md:py-6 flex justify-between text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] text-[#B8893B] bg-[#FFF7F3]/65 backdrop-blur-md border-b border-[#B8893B]/25">
        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#D4145A] hover:drop-shadow-[0_0_10px_rgba(212,20,90,0.35)]"
        >
          WILD COLLECTION
        </Link>

        <Link
          href="/"
          className="transition-all duration-500 hover:text-[#D4145A] hover:drop-shadow-[0_0_10px_rgba(212,20,90,0.35)]"
        >
          VOLVER
        </Link>
      </header>

      <section className="pt-28 md:pt-32 pb-8 md:pb-10 px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl leading-none mb-4">
          Perfumes Femeninos
        </h1>

        <p className="max-w-xl mx-auto text-sm md:text-base text-[#6F1232]/65 leading-relaxed">
          Fragancias delicadas, envolventes y memorables.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="group text-center">
              <Link href={product.link} className="block">
                <div className="h-[360px] md:h-[390px] overflow-hidden rounded-3xl bg-white/45 border border-[#B8893B]/20 shadow-[0_0_60px_rgba(184,137,59,0.18)]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 group-hover:brightness-105"
                  />
                </div>

                <h2 className="font-serif text-xl md:text-2xl text-[#2A1418] mt-5">
                  {product.name}
                </h2>
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20${product.name}%20de%20WILD%20COLLECTION`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-[#2A1418] text-[#FFF7F3] border border-[#B8893B]/40 rounded-2xl px-8 py-3 text-[10px] tracking-[0.32em] uppercase hover:bg-[#D4145A] hover:border-[#D4145A] hover:text-white transition-all duration-500">
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
