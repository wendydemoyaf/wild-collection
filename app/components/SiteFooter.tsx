import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/593963826845?text=Hola,%20quiero%20información%20sobre%20Wild%20Collection";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-5 pb-6 pt-14 text-[#F0E8DE] md:px-10 md:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.32em] text-[#B99158]">Wild Collection</p>
          <h2 className="mt-4 max-w-lg font-serif text-4xl leading-[.95] tracking-[-.04em] md:text-6xl">Encuentra la versión de ti que quieres dejar en el aire.</h2>
        </div>
        <nav className="grid content-start gap-3 text-[10px] uppercase tracking-[.18em] text-white/62" aria-label="Colecciones">
          <span className="mb-2 text-[8px] text-[#D6BE98]">Colecciones</span>
          <Link href="/femenino" className="hover:text-white">Mujer</Link>
          <Link href="/masculino" className="hover:text-white">Hombre</Link>
          <Link href="/carrito" className="hover:text-white">Mi selección</Link>
        </nav>
        <nav className="grid content-start gap-3 text-[10px] uppercase tracking-[.18em] text-white/62" aria-label="Wild Collection">
          <span className="mb-2 text-[8px] text-[#D6BE98]">Wild</span>
          <Link href="/quienes-somos" className="hover:text-white">La marca</Link>
          <Link href="/invierte-con-wild" className="hover:text-white">Emprende</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
          <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
        </nav>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-5 text-[8px] uppercase tracking-[.2em] text-white/35 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Wild Collection</span>
        <span>Perfumes que dejan huella.</span>
      </div>
    </footer>
  );
}
