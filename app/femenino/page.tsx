import Link from "next/link";

export default function FemeninoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between text-sm tracking-[0.25em] bg-black/40 backdrop-blur-sm">
        <Link href="/">WILD COLLECTION</Link>
        <Link href="/">VOLVER</Link>
      </header>

      <section className="pt-40 pb-24 text-center px-6">
        <p className="text-xs tracking-[0.6em] text-white/50 mb-6">
          COLECCIÓN FEMENINA
        </p>

        <h1 className="text-6xl font-serif mb-8">Femenino</h1>

        <p className="max-w-xl mx-auto text-white/60 leading-relaxed">
          Fragancias delicadas, envolventes y memorables. Una selección creada
          para resaltar elegancia, dulzura y presencia.
        </p>
      </section>

      <section className="px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: "VIP Rose", img: "/fem1.jpeg", price: "$19.99" },
            { name: "Sweet Candy", img: "/fem2.jpeg", price: "$25" },
            { name: "Pink Touch", img: "/fem3.jpeg", price: "$25" },
            { name: "Floral Essence", img: "/fem4.jpeg", price: "$25" },
          ].map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="h-[430px] bg-neutral-900 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-5 text-center">
                <h2 className="font-serif text-xl">{product.name}</h2>
                <p className="text-white/50 text-sm mt-2">{product.price}</p>

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
