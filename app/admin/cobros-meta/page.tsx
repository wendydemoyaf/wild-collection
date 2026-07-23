"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminShell from "../components/AdminShell";
import styles from "./cobros-meta.module.css";

type Data = {
  currency: string;
  consumption: { today: number; week: number; month: number; accumulated: number; daily: Array<{ date: string; spend: number; active_campaigns: number }>; charges_available: false; charges_message: string };
  charges: Array<{ date: string; amount: number; status: "Cobrado" | "Pendiente" | "No conciliado" }>;
  reconciliation: { consumption_accumulated: number; charges_accumulated: number | null; difference: number | null; reconciled: boolean | null };
  updated_at: string;
};

const money = (value: number | null, currency: string) => value === null ? "No disponible" : `${currency} ${new Intl.NumberFormat("es-EC", { minimumFractionDigits: currency === "COP" ? 0 : 2, maximumFractionDigits: currency === "COP" ? 0 : 2 }).format(value)}`;
const date = (value: string) => new Intl.DateTimeFormat("es-EC", { dateStyle: "medium", timeZone: "America/Guayaquil" }).format(new Date(`${value}T12:00:00-05:00`));
const timestamp = (value: string) => new Intl.DateTimeFormat("es-EC", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Guayaquil" }).format(new Date(value));

export default function CobrosMetaPage() {
  const [data, setData] = useState<Data | null>(null);
  const [screen, setScreen] = useState<"loading" | "ready" | "login" | "error">("loading");
  const [error, setError] = useState("");
  const [, setRefreshing] = useState(false);

  async function load(manual = false) {
    if (manual) setRefreshing(true);
    try {
      const response = await fetch("/api/admin/cobros-meta", { cache: "no-store" });
      const body = await response.json().catch(() => ({}));
      if (response.status === 401) { setScreen("login"); return; }
      if (!response.ok) { setError(body.error ?? "No pudimos cargar los datos."); setScreen("error"); return; }
      setData(body); setScreen("ready");
    } catch { setError("No pudimos conectar con el panel."); setScreen("error"); }
    finally { setRefreshing(false); }
  }

  useEffect(() => { void load(); }, []);
  useEffect(() => {
    const refresh = () => void load(true);
    window.addEventListener("wild-admin-refresh", refresh);
    return () => window.removeEventListener("wild-admin-refresh", refresh);
  }, []);
  if (screen === "loading") return <main className={styles.centered}><div className={styles.mark}>WC</div><p>Consultando consumo de Meta</p></main>;
  if (screen === "login") return <main className={styles.centered}><section className={styles.notice}><p className={styles.eyebrow}>Acceso privado</p><h1>Inicia sesión para ver los cobros.</h1><Link href="/admin/pedidos">Ir a pedidos →</Link></section></main>;
  if (screen === "error") return <main className={styles.centered}><section className={styles.notice}><p className={styles.eyebrow}>Cobros de Meta no disponibles</p><h1>No pudimos cargar los datos.</h1><p className={styles.error}>{error}</p><button type="button" onClick={() => void load()}>Intentar de nuevo</button></section></main>;

  const consumption = data!.consumption;
  const reconciliation = data!.reconciliation;
  return <AdminShell><main className={styles.dashboard}>
    <div className={styles.inner}>
      <section className={styles.intro}><div><p className={styles.eyebrow}>Wild Ads Control</p><h1>Consumo y cobros,<br /><em>sin confundirlos.</em></h1></div><div><p>El consumo publicitario viene de Meta Ads. Los cobros a la tarjeta se muestran por separado y nunca se estiman.</p><small>Última actualización: {timestamp(data!.updated_at)}</small></div></section>

      <section className={styles.section}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Bloque 1</p><h2>Consumo publicitario</h2></div><p>Dinero gastado en anuncios · Moneda: {data!.currency}</p></div><div className={styles.metrics}><article><small>Consumo hoy</small><strong>{money(consumption.today, data!.currency)}</strong></article><article><small>Consumo semana</small><strong>{money(consumption.week, data!.currency)}</strong></article><article><small>Consumo mes</small><strong>{money(consumption.month, data!.currency)}</strong></article></div><div className={styles.tableWrap}><table><thead><tr><th>Fecha</th><th>Consumo</th><th>Número de campañas activas</th></tr></thead><tbody>{consumption.daily.map((row) => <tr key={row.date}><td>{date(row.date)}</td><td>{money(row.spend, data!.currency)}</td><td>{row.active_campaigns}</td></tr>)}</tbody></table></div><p className={styles.note}>Las campañas se cuentan cuando Meta registra actividad publicitaria para esa fecha.</p></section>

      <section className={styles.section}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Bloque 2</p><h2>Cobros realizados por Meta</h2></div><p>Tarjeta o método de pago</p></div><div className={styles.unavailable}><p>{consumption.charges_message}</p><span>No se han inventado ni simulado cobros.</span></div><div className={styles.tableWrap}><table><thead><tr><th>Fecha</th><th>Valor cobrado</th><th>Estado</th></tr></thead><tbody><tr><td colSpan={3} className={styles.empty}>No disponible</td></tr></tbody></table></div></section>

      <section className={styles.section}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Bloque 3</p><h2>Conciliación</h2></div><p>Consumo vs. cobros</p></div><div className={styles.reconciliation}><article><small>Consumo acumulado</small><strong>{money(reconciliation.consumption_accumulated, data!.currency)}</strong></article><article><small>Cobros acumulados</small><strong>{money(reconciliation.charges_accumulated, data!.currency)}</strong></article><article><small>Diferencia</small><strong>{money(reconciliation.difference, data!.currency)}</strong></article><div className={styles.pending}><b>⚠ Existe una diferencia pendiente por conciliar.</b><p>No es posible determinarla hasta contar con cobros reales. {consumption.charges_message}</p></div></div></section>
    </div>
  </main></AdminShell>;
}
