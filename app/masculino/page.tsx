import Link from "next/link";

export default function MasculinoPage() {
  const products = [
    {
      name: "INVICTUS VICTORY",
      img: "/invicto.jpeg",
      price: "$25",
      tagline: "Nacido para ganar.",
      link: "/masculino/invictus-victory",
    },
    {
      name: "ASAD",
      img: "/asad.jpeg",
      price: "$25",
      tagline: "Poder oriental absoluto.",
      link: "/masculino/asad",
    },
    {
      name: "LE MALE ELIXIR",
      img: "/male.jpeg",
      price: "$25",
      tagline: "Intenso, elegante e irresistible.",
      link: "/masculino/le-male",
    },
    {
      name: "9PM",
      img: "/9pm.jpeg",
      price: "$25",
      tagline: "El momento perfecto para seducir.",
      link: "/masculino/9pm",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between text-sm tracking-[0.25em] bg-black/40 backdrop-blur-sm">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      <section className="pt-40 pb-24 text-center px-6">
        <p className="text-xs tracking-[0.6em] text-white/50 mb-6">
          COLECCIÓN MASCULINA
        </p>

        <h1 className="text-6xl font-serif mb-8">Masculino</h1>

        <p className="max-w-xl mx-auto text-white/60 leading-relaxed">
          Fragancias intensas, elegantes y memorables.
        </p>
      </section>

      <section className="px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="h-[460px] bg-neutral-900 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

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
