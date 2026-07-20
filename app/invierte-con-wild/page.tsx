import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import StoreHeader from "../components/StoreHeader";
import styles from "../internal.module.css";

export default function InvierteConWildPage() {
  return (
    <main className={styles.page}>
      <StoreHeader />
      <section className={styles.hero}>
        <Image src="/team-night.webp" alt="Equipo Wild Collection" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Emprende con Wild</p>
          <h1 className={styles.heroTitle}>Una marca. Dos caminos. Muchas <em>posibilidades.</em></h1>
          <div className={styles.heroLead}>
            <p>Elige cómo quieres formar parte de una comunidad que convierte perfumes, formación y movimiento en nuevas oportunidades.</p>
            <a href="#elige-tu-camino" className={styles.outlineButton}>Elegir mi camino</a>
          </div>
        </div>
      </section>

      <section id="elige-tu-camino" className={styles.paperSection}>
        <div className={styles.darkSectionMeta}><span>01 / Elige tu camino</span><span>Negocio · Comunidad</span></div>
        <div className={styles.choiceGrid}>
          <Link href="/invierte-con-wild/crea-tu-negocio" className={styles.choiceCard}>
            <Image src="/creatn.webp" alt="Crear un negocio con Wild Collection" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.coverImage} />
            <div className={styles.cardShade} />
            <div className={styles.cardContent}>
              <span>Opción 01 · Emprender</span>
              <h2 className={styles.cardTitle}>Crea tu negocio con Wild.</h2>
              <p>Empieza con un kit, referencias en tendencia, formación y acompañamiento para vender a tu ritmo.</p>
              <b className={styles.cardLink}>Conocer los kits</b>
            </div>
          </Link>
          <Link href="/invierte-con-wild/unete-a-la-familia-wild" className={styles.choiceCard}>
            <Image src="/sywventa.webp" alt="Trabajar y crecer con Wild Collection" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.coverImage} />
            <div className={styles.cardShade} />
            <div className={styles.cardContent}>
              <span>Opción 02 · Crecer</span>
              <h2 className={styles.cardTitle}>Trabaja con nosotros.</h2>
              <p>Desarrolla habilidades comerciales y liderazgo mientras formas parte de un equipo que avanza contigo.</p>
              <b className={styles.cardLink}>Conocer la comunidad</b>
            </div>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionMeta}><span>02 / Lo que recibes</span><span>Wild en movimiento</span></div>
        <div className={styles.values}>
          <article className={styles.value}><span>01</span><h3>Producto con identidad</h3><p>Perfumes de 55 ml con una propuesta clara, visual y comercial.</p></article>
          <article className={styles.value}><span>02</span><h3>Formación constante</h3><p>Herramientas de ventas, comunicación, liderazgo y desarrollo personal.</p></article>
          <article className={styles.value}><span>03</span><h3>Comunidad</h3><p>Personas que comparten aprendizajes, experiencias y ganas de avanzar.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
