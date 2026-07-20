import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import StoreHeader from "../../components/StoreHeader";
import styles from "../../internal.module.css";

const WHATSAPP_URL = "https://wa.me/593963826845?text=Hola,%20quiero%20conocer%20los%20kits%20para%20emprender%20con%20Wild%20Collection";

const steps = [
  ["01", "Conoce la oportunidad", "Habla con un asesor y elige el kit que mejor se adapta a tu meta."],
  ["02", "Recibe tus perfumes", "Obtienes referencias en tendencia y las herramientas para empezar."],
  ["03", "Comienza a vender", "Comparte, asesora y construye una cartera de clientes a tu ritmo."],
];

const faqs = [
  ["¿Necesito experiencia vendiendo?", "No. Recibes orientación para conocer el producto, conversar con clientes y comenzar paso a paso."],
  ["¿Puedo hacerlo en mi tiempo libre?", "Sí. Puedes adaptar la actividad a tu disponibilidad y hacerla crecer progresivamente."],
  ["¿Puedo elegir las referencias?", "El equipo te ayuda a combinar referencias en tendencia según disponibilidad y público."],
  ["¿Cómo obtengo mi ganancia?", "Compras tu kit a precio especial y generas margen al vender cada perfume."],
];

export default function CreaTuNegocioPage() {
  return (
    <main className={styles.page}>
      <StoreHeader />
      <section className={styles.hero}>
        <Image src="/sywventa2.webp" alt="Emprender con Wild Collection" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Crea tu negocio con Wild</p>
          <h1 className={styles.heroTitle}>Construye algo propio con una marca en <em>movimiento.</em></h1>
          <div className={styles.heroLead}>
            <p>Empieza con perfumes, formación comercial y una comunidad que te acompaña desde el primer paso.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.button}>Hablar con un asesor</a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionMeta}><span>01 / La oportunidad</span><span>Producto · Formación · Comunidad</span></div>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.eyebrow}>Más que un kit</p>
            <h2 className={styles.display}>Un punto de partida para algo <span className={styles.accent}>tuyo.</span></h2>
          </div>
          <div className={styles.bodyStack}>
            <p>Comienzas con un producto fácil de mostrar, probar y recomendar. Pero también recibes acompañamiento para aprender a vender, comunicar y crear relaciones comerciales.</p>
            <p>No tienes que saberlo todo antes de empezar. La idea es que avances mientras aprendes y construyes una actividad que puede crecer a tu ritmo.</p>
          </div>
        </div>
      </section>

      <section className={styles.wideVisual}>
        <Image src="/sebas-walk.webp" alt="Wild Collection en movimiento" fill sizes="100vw" className={styles.coverImage} />
        <div className={styles.wideShade} />
        <div className={styles.wideContent}>
          <p className={styles.eyebrow}>Decidir moverse</p>
          <h2 className={styles.display}>Hay personas que esperan. Y otras que <span className={styles.accent}>empiezan.</span></h2>
        </div>
      </section>

      <section className={styles.paperSection}>
        <div className={styles.darkSectionMeta}><span>02 / Kits para comenzar</span><span>A mayor cantidad, menor costo</span></div>
        <div className={styles.introGrid}>
          <div>
            <p className={styles.darkEyebrow}>Elige tu nivel</p>
            <h2 className={styles.darkDisplay}>Empieza según la meta que quieres <span className={styles.darkAccent}>construir.</span></h2>
          </div>
          <div className={styles.bodyStack}>
            <p>Todos los kits están pensados como oportunidad de negocio y se arman con referencias disponibles y en tendencia.</p>
          </div>
        </div>
        <div className={styles.kits} style={{ marginTop: "4rem" }}>
          <article className={styles.kit}><span>Genera</span><h3>24 perfumes</h3><strong>$119</strong><p>Un inicio práctico para conocer el producto, probar tu mercado y comenzar a vender.</p></article>
          <article className={`${styles.kit} ${styles.kitFeatured}`}><span className={styles.kitBadge}>Más elegido</span><span>Crece</span><h3>48 perfumes</h3><strong>$199</strong><p>Más variedad y mejor costo por perfume para construir una oferta comercial más completa.</p></article>
          <article className={styles.kit}><span>Escala</span><h3>72 perfumes</h3><strong>$299</strong><p>Para quien quiere comenzar con mayor inventario y una visión de crecimiento más amplia.</p></article>
        </div>
      </section>

      <section id="como-empezar" className={styles.compactSection}>
        <div className={styles.sectionMeta}><span>03 / Cómo empiezas</span><span>Tres pasos</span></div>
        <div className={styles.steps}>
          {steps.map(([number, title, copy]) => <article className={styles.step} key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionMeta}><span>04 / Preguntas frecuentes</span><span>Antes de comenzar</span></div>
        <div className={styles.faqGrid}>
          {faqs.map(([question, answer]) => <article className={styles.faq} key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Tu negocio puede empezar hoy.</h2>
          <p>Habla con nuestro equipo, resuelve tus dudas y elige el kit que tiene sentido para ti.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={styles.button}>Quiero información</a>
          <div><Link href="/invierte-con-wild" className="mt-6 inline-block text-[9px] uppercase tracking-[.2em] underline underline-offset-4">Volver a las opciones</Link></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
