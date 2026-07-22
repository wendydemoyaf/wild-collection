"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminShell from "./components/AdminShell";
import styles from "./admin-home.module.css";

const areas = [
  { href: "/admin/resumen", title: "Panel de control", text: "Revisa ventas, pedidos, facturación y utilidad general." },
  { href: "/admin/pedidos", title: "Ventas", text: "Consulta pedidos, clientes, estados y costos." },
  { href: "/admin/publicidad", title: "Meta Ads", text: "Revisa campañas, gasto, resultados y costo por conversación." },
  { href: "/admin/cobros-meta", title: "Facturación Meta", text: "Compara consumo publicitario y cobros de Meta." },
  { href: "/admin/rentabilidad", title: "Ganancias", text: "Analiza utilidad y rentabilidad sin inventar atribuciones." },
];

type ExecutiveData = {
  currency: string;
  today: { sales: number; orders: number; meta_spend: number; conversations: number; estimated_profit: number | null };
  week: { sales: number; orders: number; meta_spend: number; conversations: number };
  alerts: string[];
};

function money(value: number | null, currency = "USD") {
  if (value === null) return "No disponible";
  const decimals = currency === "COP" ? 0 : 2;
  return `${currency} ${new Intl.NumberFormat("es-EC", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value)}`;
}

export default function AdminHomePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [data, setData] = useState<ExecutiveData | null>(null);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => { void load(); }, [router]);

  async function load(manual = false) {
    if (manual) setRefreshing(true);
    setError("");
    try {
      const response = await fetch("/api/admin/ejecutivo", { cache: "no-store" });
      const body = await response.json().catch(() => ({}));
      if (response.status === 401) { router.replace("/admin/pedidos"); return; }
      if (!response.ok) { setError(body.error ?? "No pudimos cargar el Panel Ejecutivo."); return; }
      setData(body); setReady(true);
    } catch { setError("No pudimos conectar con el Panel Ejecutivo."); }
    finally { setRefreshing(false); }
  }

  if (!ready && !error) return <main className={styles.home}><p className={styles.eyebrow}>Abriendo Wild Ads Control</p></main>;
  if (error && !data) return <AdminShell><main className={styles.home}><section className={styles.error}><p className={styles.eyebrow}>Panel Ejecutivo no disponible</p><h1>No pudimos cargar los datos.</h1><p>{error}</p><button type="button" onClick={() => void load()}>{refreshing ? "Actualizando…" : "Intentar de nuevo"}</button></section></main></AdminShell>;
  const weekCost = data!.week.conversations > 0 ? data!.week.meta_spend / data!.week.conversations : null;
  return <AdminShell><main className={styles.home}>
    <section className={styles.intro}><div><p className={styles.eyebrow}>Wild Ads Control · Panel Ejecutivo</p><h1>El negocio,<br /><em>en movimiento.</em></h1><p>Una lectura rápida de lo que pasó hoy y esta semana, usando únicamente los datos que ya existen.</p></div><button type="button" onClick={() => void load(true)} disabled={refreshing}>{refreshing ? "Actualizando…" : "Actualizar datos"}</button></section>
    <section className={styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>Sección 1</p><h2>Resumen de hoy</h2></div><p>Ventas en USD · Publicidad en {data!.currency}</p></div><div className={styles.metrics}><article><small>Ventas de hoy</small><strong>{money(data!.today.sales)}</strong></article><article><small>Pedidos de hoy</small><strong>{data!.today.orders}</strong></article><article><small>Gasto Meta hoy</small><strong>{money(data!.today.meta_spend, data!.currency)}</strong></article><article><small>Conversaciones hoy</small><strong>{data!.today.conversations}</strong></article><article><small>Utilidad estimada</small><strong>{money(data!.today.estimated_profit)}</strong><p>{data!.today.estimated_profit === null ? "Disponible cuando los costos estén completos y las monedas coincidan." : "Costos registrados menos gasto Meta de hoy."}</p></article></div></section>
    <section className={styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>Sección 2</p><h2>Resumen semanal</h2></div><p>De lunes hasta hoy</p></div><div className={styles.metrics}><article><small>Ventas</small><strong>{money(data!.week.sales)}</strong></article><article><small>Pedidos</small><strong>{data!.week.orders}</strong></article><article><small>Gasto</small><strong>{money(data!.week.meta_spend, data!.currency)}</strong></article><article><small>Conversaciones</small><strong>{data!.week.conversations}</strong></article><article><small>Costo por conversación</small><strong>{money(weekCost, data!.currency)}</strong></article></div></section>
    <section className={styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>Sección 3</p><h2>Alertas</h2></div><p>Solo información comprobada</p></div><div className={styles.alerts}>{data!.alerts.length ? data!.alerts.map((alert) => <p key={alert}>⚠ {alert}</p>) : <p className={styles.noAlerts}>No hay alertas.</p>}</div></section>
    <section className={styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>Sección 4</p><h2>Accesos rápidos</h2></div><p>Entra directamente a cada área</p></div><div className={styles.cards} aria-label="Accesos rápidos">{areas.map((area, index) => <Link href={area.href} className={styles.card} key={area.href}><span>0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p><b>→</b></Link>)}</div></section>
  </main></AdminShell>;
}