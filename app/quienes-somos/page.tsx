import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import StoreHeader from "../components/StoreHeader";
import styles from "../internal.module.css";

const values = [
  ["01", "Libertad para elegir", "Creemos en las opciones, en la identidad propia y en la posibilidad de decidir cómo quieres avanzar."],
  ["02", "Crecimiento constante", "No importa dónde empiezas. Importa todo lo que descubres cuando decides moverte."],
  ["03", "Experiencias que dejan huella", "El perfume es nuestro punto de encuentro; la transformación es la historia que construimos alrededor."],
];

export default function QuienesSomosPage() {
  return (
    <main className={styles.page}>
      <StoreHeader />
      <section className={styles.hero}>
        <Image src="/wild-night.webp" alt="Comunidad Wild Collection caminando en la ciudad" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>La maison Wild</p>
          <h1 className={styles.heroTitle}>No vinimos a encajar. Vinimos a abrir <em>posibilidades.</em></h1>
          <div className={styles.heroLead}>
            <p>Wild Collection nació alrededor del perfume y creció como una comunidad para quienes saben que siempre existe una versión más libre de su historia.</p>
            <Link href="/invierte-con-wild" className={styles.outlineButton}>Descubrir la oportunidad</Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionMeta}><span>01 / Nuestra esencia</span><span>Wild Collection</span></div>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>Más que perfumes</p>
            <h2 className={styles.display}>Una marca hecha para <span className={styles.accent}>moverte.</span></h2>
          </div>
          <div className={styles.bodyStack}>
            <p>A veces todo empieza con una decisión pequeña: probar un aroma distinto, comenzar una conversación o aceptar una oportunidad que antes parecía lejana.</p>
            <p>Para nosotros, el perfume no es un accesorio silencioso. Es identidad, memoria y presencia. Y Wild no es solamente una colección: es un espacio para descubrir qué más es posible.</p>
            <blockquote className={styles.quote}>“El mundo es más grande de lo que nos enseñaron.”</blockquote>
          </div>
        </div>
      </section>

      <section className={styles.compactSection}>
        <div className={styles.values}>
          {values.map(([number, title, copy]) => (
            <article className={styles.value} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className={styles.paperSection}>
        <div className={styles.darkSectionMeta}><span>02 / La historia en movimiento</span><span>Perfume · Comunidad · Oportunidad</span></div>
        <div className={styles.split}>
          <div className={styles.imagePanel}>
            <Image src="/vision.webp" alt="Visión de Wild Collection" fill sizes="(max-width: 900px) 100vw, 48vw" className={styles.coverImage} />
            <span className={styles.imageCaption}>Visión 01 · Futuro</span>
          </div>
          <div>
            <p className={styles.darkEyebrow}>Nuestra visión</p>
            <h2 className={styles.darkDisplay}>Esto apenas está <span className={styles.darkAccent}>comenzando.</span></h2>
            <div className={styles.bodyStack}>
              <p>No soñamos con ser una empresa más de perfumería. Queremos construir una marca capaz de acompañar a las personas mientras descubren nuevas posibilidades.</p>
              <p>Hoy avanzamos en Ecuador. Mañana queremos compartir esta visión con muchas más personas, sin perder la cercanía que nos trajo hasta aquí.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.paperSection}>
        <div className={styles.numbers}>
          <div className={styles.numberCard}><strong className={styles.number}>+100K</strong><p>Personas han elegido Wild</p></div>
          <div className={styles.numberCard}><strong className={styles.number}>+300</strong><p>Distribuidores independientes</p></div>
          <div className={styles.numberCard}><strong className={styles.number}>+200</strong><p>Líderes desarrollados</p></div>
          <div className={styles.numberCard}><strong className={styles.number}>01</strong><p>Propósito compartido</p></div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Lo que sigue puede ser tu historia.</h2>
          <p>Elige tus perfumes o conoce la oportunidad de crecer junto a Wild Collection.</p>
          <Link href="/invierte-con-wild" className={styles.button}>Explorar posibilidades</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
