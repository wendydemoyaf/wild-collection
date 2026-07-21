import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import StoreHeader from "../../components/StoreHeader";
import styles from "../../internal.module.css";

const WHATSAPP_URL = "https://wa.me/593963826845?text=Hola,%20quiero%20saber%20cómo%20trabajar%20con%20Wild%20Collection";

export default function UneteWildPage() {
  return (
    <main className={styles.page}>
      <StoreHeader />
      <section className={styles.hero}>
        <Image src="/team-night.webp" alt="Equipo de Wild Collection" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Trabaja con nosotros</p>
          <h1 className={styles.heroTitle}>Tu talento también puede dejar <em>huella.</em></h1>
          <div className={styles.heroLead}>
            <p>Crece en ventas, comunicación y liderazgo dentro de una comunidad que se mueve, aprende y construye en equipo.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.button}>Quiero conocer más</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionMeta}><span>01 / La comunidad</span><span>Crecer también es colectivo</span></div>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>Una experiencia compartida</p>
            <h2 className={styles.display}>No tienes que avanzar <span className={styles.accent}>sola o solo.</span></h2>
          </div>
          <div className={styles.bodyStack}>
            <p>Wild reúne personas con historias, experiencias y talentos distintos. Lo que compartimos es la decisión de aprender, movernos y apoyar a otros mientras crecemos.</p>
            <p>Aquí puedes desarrollar habilidades comerciales, aprender a liderar y construir relaciones que van mucho más allá de una venta.</p>
          </div>
        </div>
      </section>

      <section className={styles.compactSection}>
        <div className={styles.values}>
          <article className={styles.value}><span>01</span><h3>Formación</h3><p>Entrenamientos en ventas, comunicación, liderazgo y crecimiento personal.</p></article>
          <article className={styles.value}><span>02</span><h3>Acompañamiento</h3><p>Personas que comparten herramientas, experiencia y guía durante tu proceso.</p></article>
          <article className={styles.value}><span>03</span><h3>Movimiento</h3><p>Experiencias, retos y espacios para llevar lo aprendido a la acción.</p></article>
        </div>
      </section>

      <section className={styles.wideVisual}>
        <Image src="/wild-experience.webp" alt="Experiencia de la comunidad Wild" fill sizes="100vw" className={styles.coverImage} />
        <div className={styles.wideShade} />
        <div className={styles.wideContent}>
          <p className={styles.eyebrow}>Wild en movimiento</p>
          <h2 className={styles.display}>Las oportunidades cambian cuando decides <span className={styles.accent}>participar.</span></h2>
        </div>
      </section>

      <section className={styles.paperSection}>
        <div className={styles.darkSectionMeta}><span>02 / Tu camino</span><span>Aprender · Aplicar · Liderar</span></div>
        <div className={styles.split}>
          <div className={styles.imagePanel}>
            <Image src="/reunion.webp" alt="Reunión de formación Wild Collection" fill sizes="(max-width: 900px) 100vw, 48vw" className={styles.coverImage} />
            <span className={styles.imageCaption}>Comunidad 01 · Encuentro</span>
          </div>
          <div>
            <p className={styles.darkEyebrow}>Lo que puedes desarrollar</p>
            <h2 className={styles.darkDisplay}>Más confianza para vender. Más criterio para <span className={styles.darkAccent}>liderar.</span></h2>
            <div className={styles.bodyStack}>
              <p>Empiezas conociendo el producto y aprendiendo a conversar con clientes. Con el tiempo puedes asumir nuevos retos, acompañar a otros y fortalecer tu liderazgo.</p>
              <p>No buscamos personas perfectas. Buscamos personas dispuestas a aprender, trabajar en equipo y convertir las oportunidades en acciones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Puede que este sea tu siguiente paso.</h2>
          <p>Escríbenos para conocer cómo funciona la comunidad y qué camino puede adaptarse mejor a ti.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.button}>Hablar con el equipo</a>
          <div><Link href="/invierte-con-wild" className="mt-6 inline-block text-[9px] uppercase tracking-[.2em] underline underline-offset-4">Volver a las opciones</Link></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
