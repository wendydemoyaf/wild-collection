import Link from "next/link";

export default function FemeninoPage() {
  const products = [
    {
      name: "PRADA CANDY",
      img: "/fem1.jpeg",
      price: "$25",
      tagline: "Elegancia que provoca acercarse.",
      link: "/femenino/prada-candy",
    },
    {
      name: "SCANDAL",
      img: "/fem2.jpeg",
      price: "$25",
      tagline: "Hecho para llamar la atención.",
      link: "/femenino/scandal",
    },
    {
      name: "SWEET LIKE CANDY",
      img: "/fem3.jpeg",
      price: "$25",
      tagline: "Dulce como un recuerdo feliz.",
      link: "/femenino/sweet-like-candy",
    },
    {
      name: "BORN IN ROMA",
      img: "/fem4.jpeg",
      price: "$25",
      tagline: "Femenina, elegante e inolvidable.",
      link: "/femenino/born-in-roma",
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
          COLECCIÓN FEMENINA
        </p>

        <h1 className="text-6xl font-serif mb-8">Femenino</h1>

        <p className="max-w-xl mx-auto text-white/60 leading-relaxed">
          Fragancias delicadas, envolventes y memorables.
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

                {/* LINK PREMIUM */}
                <Link
                  href={product.link}
                  target="_blank"
                  className="mt-3 block text-xs tracking-[0.25em] text-white/50 hover:text-white transition uppercase"
                >
                  Descubre la fragancia →
                </Link>

                <p className="text-white/50 text-sm mt-4">{product.price}</p>

                {/* BOTÓN WHATSAPP */}
                <a
                  href={`https://wa.me/593963826845?text=Hola,%20quiero%20comprar%20${product.name}%20de%20WILD%20COLLECTION`}
                  target="_blank"
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
