"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "./data/products";
import { useCart } from "./context/CartContext";
import styles from "./home.module.css";

const WHATSAPP_URL =
  "https://wa.me/593963826845?text=Hola,%20quiero%20información%20sobre%20los%20perfumes%20de%20WILD%20COLLECTION";

const collections = [
  {
    number: "01",
    name: "Mujer",
    title: "Perfumes femeninos",
    copy: "Dulces, florales, luminosos y memorables.",
    image: "/women.webp",
    href: "/femenino",
  },
  {
    number: "02",
    name: "Hombre",
    title: "Perfumes masculinos",
    copy: "Frescos, intensos, magnéticos y seguros.",
    image: "/men.webp",
    href: "/masculino",
  },
];

const featuredSlugs = ["la-vie-est-belle", "good-girl", "eros", "million-lucky"];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 30 16" aria-hidden="true">
      <path d="M1 8h27M21 1l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Home() {
  const { itemCount } = useCart();
  const heroRef = useRef<HTMLElement>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const featured = useMemo(
    () => featuredSlugs.map(getProduct).filter((product): product is Product => Boolean(product)),
    [],
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIntroVisible(false), reducedMotion ? 250 : 1750);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    let frame = 0;
    const updateHero = () => {
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      heroRef.current?.style.setProperty("--hero-progress", progress.toFixed(3));
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHero);
    };

    updateHero();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const moveHeroLight = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={styles.home}>
      <div
        className={`${styles.intro} ${introVisible ? "" : styles.introAway}`}
        aria-hidden="true"
      >
        <div className={styles.introMark}>
          <span className={styles.introMonogram}>WC</span>
          <span className={styles.introRule} />
          <span className={styles.introName}>Wild Collection</span>
          <span className={styles.introLoading}>Perfumería de autor</span>
        </div>
      </div>

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Wild Collection, inicio">
          <span className={styles.brandMark}>WC</span>
          <span className={styles.brandName}>Wild Collection</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <a href="#colecciones">Colecciones</a>
          <a href="#promociones">Promociones</a>
          <Link href="/quienes-somos">La marca</Link>
          <Link href="/invierte-con-wild">Emprende</Link>
        </nav>

        <div className={styles.headerActions}>
          <Link href="/carrito" className={styles.cartLink} aria-label={`Carrito con ${itemCount} perfumes`}>
            <span>Selección</span>
            <b key={itemCount}>{String(itemCount).padStart(2, "0")}</b>
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuTop}>
          <span>Wild Collection</span>
          <button type="button" onClick={closeMenu} aria-label="Cerrar menú">Cerrar</button>
        </div>
        <nav aria-label="Navegación móvil">
          <a href="#colecciones" onClick={closeMenu}><span>01</span>Colecciones</a>
          <a href="#promociones" onClick={closeMenu}><span>02</span>Promociones</a>
          <Link href="/quienes-somos" onClick={closeMenu}><span>03</span>La marca</Link>
          <Link href="/invierte-con-wild" onClick={closeMenu}><span>04</span>Emprende</Link>
          <Link href="/carrito" onClick={closeMenu}><span>05</span>Mi selección ({itemCount})</Link>
        </nav>
        <p>Perfumes de 55 ml · Pago contra entrega · Ecuador</p>
      </div>

      <section
        ref={heroRef}
        className={styles.hero}
        onPointerMove={moveHeroLight}
        style={{ "--hero-progress": 0, "--pointer-x": "50%", "--pointer-y": "45%" } as CSSProperties}
      >
        <video
          className={styles.heroVideo}
          src="/video.mp4"
          poster="/luxury-p.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Perfume Wild Collection en una escena urbana nocturna"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroLight} />

        <div className={styles.heroCoordinates} aria-hidden="true">
          <span>WILD / 00°10&apos;S</span>
          <span>EC / 78°28&apos;W</span>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Perfumería · Identidad · Ecuador</p>
          <h1>
            Tu aroma
            <span>llega primero.</span>
          </h1>
          <div className={styles.heroLead}>
            <p>
              Perfumes de 55 ml para cambiar de energía sin cambiar quién eres.
              Elige libre. Paga cuando recibas.
            </p>
            <div className={styles.heroCtas}>
              <a href="#colecciones" className={styles.primaryCta}>
                Descubrir la colección <Arrow />
              </a>
              <a href="#promociones" className={styles.textCta}>Ver promociones</a>
            </div>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <p><span>01</span> Una colección. Muchas versiones de ti.</p>
          <a href="#identidad" aria-label="Bajar a la sección identidad">
            Scroll <i />
          </a>
        </div>
      </section>

      <section id="identidad" className={styles.manifesto}>
        <div className={styles.sectionMeta}>
          <span>01 / Identidad</span>
          <span>Wild Collection · 2026</span>
        </div>

        <Reveal className={styles.manifestoHeading}>
          <p>No es solo lo que llevas puesto.</p>
          <h2>
            Es lo que queda
            <span>cuando ya te fuiste.</span>
          </h2>
        </Reveal>

        <div className={styles.manifestoStory}>
          <Reveal className={styles.manifestoImage}>
            <Image
              src="/luxury-p.webp"
              alt="Perfume Wild Collection iluminado en tonos champagne"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.coverImage}
            />
            <div className={styles.imageScan} />
            <span>Objeto 01 · Presencia</span>
          </Reveal>

          <Reveal className={styles.manifestoCopy} delay={120}>
            <span className={styles.copyIndex}>W / C</span>
            <h3>No diseñamos una sola versión de ti.</h3>
            <p>
              Hay días luminosos, noches intensas y momentos que piden algo inesperado.
              Tu perfume también puede cambiar contigo.
            </p>
            <Link href="/quienes-somos" className={styles.lineLink}>
              Conoce nuestra visión <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className={styles.marquee} aria-hidden="true">
          <div>
            <span>ANTES DE VERTE · TE SIENTEN · </span>
            <span>ANTES DE VERTE · TE SIENTEN · </span>
          </div>
        </div>
      </section>

      <section id="colecciones" className={styles.collections}>
        <div className={styles.sectionMetaDark}>
          <span>02 / Colecciones</span>
          <span>Elige tu energía</span>
        </div>

        <Reveal className={styles.collectionsIntro}>
          <p>Dos mundos. Ninguna etiqueta.</p>
          <h2>¿Cómo quieres llegar hoy?</h2>
        </Reveal>

        <div className={styles.collectionGrid}>
          {collections.map((collection, index) => (
            <Reveal key={collection.name} delay={index * 120}>
              <Link href={collection.href} className={styles.collectionCard}>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className={styles.collectionImage}
                />
                <div className={styles.collectionWash} />
                <div className={styles.collectionNumber}>{collection.number}</div>
                <div className={styles.collectionContent}>
                  <p>{collection.name}</p>
                  <h3>{collection.title}</h3>
                  <span>{collection.copy}</span>
                  <b>Explorar <Arrow /></b>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.edit}>
        <div className={styles.sectionMeta}>
          <span>03 / The Wild Edit</span>
          <span>Selección actual</span>
        </div>

        <Reveal className={styles.editHeading}>
          <p>Cuatro maneras de empezar</p>
          <h2>Encuentra tu próxima firma.</h2>
          <a href="#colecciones" className={styles.lineLink}>Explorar colecciones <Arrow /></a>
        </Reveal>

        <div className={styles.productRail}>
          {featured.map((product, index) => (
            <Reveal key={product.slug} delay={index * 90} className={styles.productReveal}>
              <Link href={`/perfumes/${product.slug}`} className={styles.productCard}>
                <div className={styles.productMedia}>
                  <Image
                    src={product.image}
                    alt={`Perfume ${product.name} de Wild Collection`}
                    fill
                    sizes="(max-width: 680px) 78vw, (max-width: 1100px) 42vw, 24vw"
                    className={styles.productImage}
                  />
                  <span className={styles.productOrder}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.productDiscover}>Descubrir universo <Arrow /></span>
                </div>
                <div className={styles.productInfo}>
                  <div>
                    <p>{product.family}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <span>$19,90</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="promociones" className={styles.promotions}>
        <div className={styles.sectionMetaDark}>
          <span>04 / Promociones actuales</span>
          <span>Aplicación automática</span>
        </div>

        <div className={styles.promoIntro}>
          <Reveal>
            <p>Elige sin hacer cuentas</p>
            <h2>Tu colección se adapta a ti.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.promoDescription}>
              Lleva 1, 3, 10 o los perfumes que quieras. El sistema combina las promociones y aplica siempre el total más conveniente.
            </p>
          </Reveal>
        </div>

        <div className={styles.promoLayout}>
          <Reveal className={styles.promoHero}>
            <span className={styles.promoTag}>Promoción del momento</span>
            <p>Compra 1</p>
            <h3>Recibe el segundo <em>gratis.</em></h3>
            <div className={styles.promoPrice}>
              <span>$</span>19<sup>,90</sup>
            </div>
            <p className={styles.promoSmall}>2 perfumes de 55 ml · Combínalos como quieras</p>
          </Reveal>

          <div className={styles.promoOptions}>
            <Reveal className={styles.promoOption} delay={100}>
              <div><span>05</span><p>Perfumes</p></div>
              <strong>$45</strong>
              <p>Para compartir</p>
            </Reveal>
            <Reveal className={`${styles.promoOption} ${styles.promoOptionGold}`} delay={180}>
              <div><span>07</span><p>Perfumes</p></div>
              <strong>$59</strong>
              <p>Un aroma para cada día</p>
            </Reveal>
            <Reveal className={styles.individualPrice} delay={240}>
              <span>Precio individual</span>
              <p><b>1 perfume</b><strong>$19,90</strong></p>
            </Reveal>
          </div>
        </div>

        <Reveal className={styles.promoFooter}>
          <p>* Promociones válidas por tiempo limitado o hasta agotar existencias.</p>
          <a href="#colecciones" className={styles.darkCta}>Elegir mis perfumes <Arrow /></a>
        </Reveal>
      </section>

      <section className={styles.experience}>
        <div className={styles.sectionMeta}>
          <span>05 / Experiencia Wild</span>
          <span>Simple por diseño</span>
        </div>
        <Reveal className={styles.experienceTitle}>
          <p>Sin complicaciones</p>
          <h2>Elige. Combina. Recibe.</h2>
        </Reveal>
        <div className={styles.steps}>
          {[
            ["01", "Explora", "Entra en cada universo y descubre sus notas, personalidad y momento ideal."],
            ["02", "Combina", "Selecciona la cantidad y las referencias que realmente quieres llevar."],
            ["03", "Recibe", "Confirma tus datos y paga contra entrega cuando llegue tu pedido."],
          ].map(([number, title, copy], index) => (
            <Reveal className={styles.step} delay={index * 100} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.trustBar}>
          <span>55 ml cada perfume</span>
          <span>Pago contra entrega</span>
          <span>Envíos en Ecuador</span>
          <span>Mejor precio automático</span>
        </div>
      </section>

      <section className={styles.entrepreneur}>
        <Image
          src="/invierte.webp"
          alt="Emprende con Wild Collection"
          fill
          sizes="100vw"
          className={styles.entrepreneurImage}
        />
        <div className={styles.entrepreneurShade} />
        <Reveal className={styles.entrepreneurContent}>
          <p>Wild también puede ser tu negocio</p>
          <h2>Tu próxima oportunidad puede empezar con un aroma.</h2>
          <span>Conoce nuestros kits y el acompañamiento para comenzar.</span>
          <Link href="/invierte-con-wild" className={styles.lightCta}>Quiero emprender <Arrow /></Link>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLead}>
          <p>¿Lista o listo para dejar huella?</p>
          <h2>Encuentra tu Wild.</h2>
          <a href="#colecciones" className={styles.footerCircle} aria-label="Explorar colecciones"><Arrow /></a>
        </div>
        <div className={styles.footerGrid}>
          <div><span>Wild Collection</span><p>Perfumería · Ecuador</p></div>
          <nav aria-label="Enlaces del pie de página">
            <Link href="/femenino">Mujer</Link>
            <Link href="/masculino">Hombre</Link>
            <Link href="/carrito">Carrito</Link>
            <Link href="/privacidad">Privacidad</Link>
          </nav>
          <div className={styles.footerContact}>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/wildcollection1/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Wild Collection</span>
          <span>Perfumes que dejan huella.</span>
        </div>
      </footer>
    </main>
  );
}
