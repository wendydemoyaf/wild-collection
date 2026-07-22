"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./rentabilidad.module.css";

type Campaign = { id: string; name: string; status: string; conversations: number; attributed_orders: number; delivered_orders: number; sales: number | null; product_cost: number | null; shipping_cost: number | null; utility: number | null; roas: number | null; has_attributions: boolean };
type Data = { currency: string; campaigns: Campaign[]; unattributed_orders: number; updated_at: string };

const money = (value: number | null, currency: string) => value === null ? "No disponible" : `${currency} ${new Intl.NumberFormat("es-EC", { minimumFractionDigits: currency === "COP" ? 0 : 2, maximumFractionDigits: currency === "COP" ? 0 : 2 }).format(value)}`;
const number = (value: number) => new Intl.NumberFormat("es-EC").format(value);
const timestamp = (value: string) => new Intl.DateTimeFormat("es-EC", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Guayaquil" }).format(new Date(value));
const status = (value: string) => ({ ACTIVE: "Activa", PAUSED: "Pausada", ARCHIVED: "Archivada", DELETED: "Eliminada" }[value] ?? value);

export default function RentabilidadPage() {
  const [data, setData] = useState<Data | null>(null);
  const [screen, setScreen] = useState<"loading" | "ready" | "login" | "error">("loading");
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  async function load(manual = false) {
    if (manual) setRefreshing(true);
    try {
      const response = await fetch("/api/admin/rentabilidad", { cache: "no-store" });
      const body = await response.json().catch(() => ({}));
      if (response.status === 401) { setScreen("login"); return; }
      if (!response.ok) { setError(body.error ?? "No pudimos cargar la rentabilidad."); setScreen("error"); return; }
      setData(body); setScreen("ready");
    } catch { setError("No pudimos conectar con el panel."); setScreen("error"); }
    finally { setRefreshing(false); }
  }

  useEffect(() => { void load(); }, []);
  if (screen === "loading") return <main className={styles.centered}><div className={styles.mark}>WC</div><p>Preparando rentabilidad</p></main>;
  if (screen === "login") return <main className={styles.centered}><section className={styles.notice}><p className={styles.eyebrow}>Acceso privado</p><h1>Inicia sesión para ver la rentabilidad.</h1><Link href="/admin/pedidos">Ir a pedidos →</Link></section></main>;
  if (screen === "error") return <main className={styles.centered}><section className={styles.notice}><p className={styles.eyebrow}>Rentabilidad no disponible</p><h1>No pudimos cargar los datos.</h1><p className={styles.error}>{error}</p><button type="button" onClick={() => void load()}>Intentar de nuevo</button></section></main>;

  return <main className={styles.dashboard}>
    <header className={styles.header}><Link href="/" className={styles.brand}><span>WC</span><b>Wild Collection</b></Link><div className={styles.title}><small>Panel privado</small><strong>Rentabilidad</strong></div><nav><Link href="/admin/resumen">Resumen</Link><Link href="/admin/publicidad">Publicidad</Link><Link href="/admin/pedidos">Pedidos</Link><Link href="/">Ver tienda</Link></nav></header>
    <div className={styles.inner}>
      <section className={styles.intro}><div><p className={styles.eyebrow}>Wild Ads Control</p><h1>Rentabilidad,<br /><em>con atribución real.</em></h1></div><div><p>Solo se muestran pedidos cuando exista una relación explícita con la campaña. Este módulo no infiere ni asigna atribuciones.</p><button type="button" onClick={() => void load(true)} disabled={refreshing}>{refreshing ? "Actualizando…" : "Actualizar datos"}</button><small>Última actualización: {timestamp(data!.updated_at)}</small></div></section>
      <section className={styles.noticeAttribution}><div><p className={styles.eyebrow}>Pedidos sin campaña</p><h2>{number(data!.unattributed_orders)}</h2></div><p><b>Sin atribución.</b> Estos pedidos no se incluyen en ninguna campaña. Kommo podrá completar la relación más adelante.</p></section>
      <section className={styles.section}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Lectura combinada</p><h2>Rentabilidad por campaña</h2></div><p>Moneda de Meta: {data!.currency}</p></div>
        {data!.campaigns.length === 0 ? <div className={styles.empty}>No hay campañas disponibles en esta cuenta publicitaria.</div> : <div className={styles.list}>{data!.campaigns.map((campaign) => <article className={styles.campaign} key={campaign.id}><div className={styles.campaignTop}><div><span className={`${styles.badge} ${campaign.status === "ACTIVE" ? styles.active : ""}`}>{status(campaign.status)}</span><h3>{campaign.name}</h3><p>ID {campaign.id}</p></div><div className={styles.conversations}><small>Conversaciones de Meta</small><b>{number(campaign.conversations)}</b></div></div>{!campaign.has_attributions ? <div className={styles.noAttribution}><b>Aún no existen pedidos atribuidos.</b><p>La rentabilidad se mostrará cuando Kommo u otra fuente confiable registre una relación explícita.</p></div> : <div className={styles.metrics}><div><small>Pedidos atribuidos</small><b>{number(campaign.attributed_orders)}</b></div><div><small>Pedidos entregados</small><b>{number(campaign.delivered_orders)}</b></div><div><small>Ventas</small><b>{money(campaign.sales, data!.currency)}</b></div><div><small>Costo de productos</small><b>{money(campaign.product_cost, data!.currency)}</b></div><div><small>Costo de envío</small><b>{money(campaign.shipping_cost, data!.currency)}</b></div><div><small>Utilidad antes de publicidad</small><b>{money(campaign.utility, data!.currency)}</b></div><div><small>ROAS</small><b>{campaign.roas === null ? "No disponible" : `${campaign.roas.toFixed(2)}x`}</b></div></div>}</article>)}</div>}
      </section>
    </div>
  </main>;
}
