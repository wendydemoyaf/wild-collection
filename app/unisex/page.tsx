import Link from "next/link";

export default function UnisexPage() {
  const products = [
    {
      name: "AMBER OUD",
      img: "/amber.jpeg",
      price: "$25",
      tagline: "Lujo oriental en su máxima expresión.",
      link: "/unisex/amber-oud",
    },
    {
      name: "HONOR & GLORY",
      img: "/honor.jpeg",
      price: "$25",
      tagline: "Elegancia luminosa y sofisticada.",
      link: "/unisex/honor-glory",
    },
    {
      name: "KHAMRAH",
      img: "/khamrah.jpeg",
      price: "$25",
      tagline: "Dulce, intenso y adictivo.",
      link: "/unisex/khamrah",
    },
    {
      name: "OUD FOR GLORY",
      img: "/oud.jpeg",
      price: "$25",
      tagline: "Poder, misterio y carácter.",
      link: "/unisex/oud-for-glory",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between text-sm tracking-[0.25em] bg-black/40 backdrop-blur-sm">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-24 text-center px-6">
        <p className="text-xs tracking-[0.6em] text-white/50 mb-6">
          COLECCIÓN UNISEX
        </p>

        <h1 className="text-6xl font-serif mb-8">Unisex</h1>

        <p className="max-w-xl mx-auto text-white/60 leading-relaxed">
          Fragancias intensas, sofisticadas y sin género.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="group">
              {/* IMAGEN */}
              <div className="h-[460px] bg-neutral-900 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* INFO */}
              <div className="pt-5 text-center">
                <h2 className="font-serif text-xl">{product.name}</h2>

                <p className="text-white/40 text-xs mt-2 italic">
                  {product.tagline}
                </p>

                <Link
                  href={product.link}
                  className="mt-3 block text-xs tracking-[0.25em] text-white/50 hover:text-white transition uppercase"
                >
                  Descubre la fragancia →
                </Link>

                <p className="text-white/50 text-sm mt-4">{product.price}</p>

                <a
                  href={`https://api.whatsapp.com/send?phone=593963826845&text=Hola,%20quiero%20comprar%20${product.name}%20de%20WILD%20COLLECTION`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-6 border border-white/30 px-8 py-3 text-[11px] tracking-[0.35em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                    COMPRAR
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
