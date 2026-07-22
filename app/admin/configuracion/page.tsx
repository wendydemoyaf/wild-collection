"use client";

import { useCallback, useEffect, useState } from "react";
import AdminShell from "../components/AdminShell";
import styles from "./configuracion.module.css";

type Integration = { name: string; status: "Conectado" | "Error" | "Pendiente"; verified_at: string | null; description: string; detail?: string };
type Data = { current: Integration[]; future: string[]; system: { version: string; environment: string; last_deployment: string; last_commit: string }; updated_at: string };

function date(value: string | null) {
  if (!value) return "No disponible";
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : new Intl.DateTimeFormat("es-EC", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Guayaquil" }).format(parsed);
}

export default function ConfiguracionPage() {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setRefreshing(true); setError("");
    try {
      const response = await fetch("/api/admin/configuracion", { cache: "no-store" });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error ?? "No pudimos cargar el estado técnico.");
      setData(body);
    } catch (cause) { setError(cause instanceof Error ? cause.message : "No pudimos cargar el estado técnico."); }
    finally { setRefreshing(false); }
  }, []);

  useEffect(() => { void load(); }, [load]);

  return <AdminShell><main className={styles.dashboard}>
    <header className={styles.header}><div><p className={styles.eyebrow}>Wild Ads Control</p><h1>Configuración e<br /><em>integraciones.</em></h1><p>Consulta el estado técnico actual del sistema. Esta sección es solo de lectura.</p></div><button type="button" onClick={() => void load()} disabled={refreshing}>{refreshing ? "Verificando…" : "Verificar ahora"}</button></header>
    {error && <section className={styles.error}><p>{error}</p><button type="button" onClick={() => void load()}>Intentar de nuevo</button></section>}
    {!data && !error && <p className={styles.loading}>Comprobando integraciones…</p>}
    {data && <>
      <section><div className={styles.sectionTitle}><p className={styles.eyebrow}>Estado actual</p><h2>Integraciones actuales</h2></div><div className={styles.grid}>{data.current.map((item) => <article className={styles.card} key={item.name}><div className={styles.cardTop}><h3>{item.name}</h3><span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>{item.status}</span></div><p>{item.description}</p><dl><div><dt>Última verificación</dt><dd>{date(item.verified_at)}</dd></div></dl>{item.detail && <small>{item.detail}</small>}</article>)}</div></section>
      <section><div className={styles.sectionTitle}><p className={styles.eyebrow}>Próximamente</p><h2>Integraciones futuras</h2></div><div className={styles.future}>{data.future.map((name) => <article key={name}><span>Pendiente</span><h3>{name}</h3><p>Todavía no forma parte del sistema.</p></article>)}</div></section>
      <section className={styles.system}><div className={styles.sectionTitle}><p className={styles.eyebrow}>Referencia técnica</p><h2>Información del sistema</h2></div><dl><div><dt>Versión del panel</dt><dd>{data.system.version}</dd></div><div><dt>Entorno</dt><dd>{data.system.environment}</dd></div><div><dt>Último despliegue</dt><dd>{date(data.system.last_deployment === "No disponible" ? null : data.system.last_deployment)}</dd></div><div><dt>Último commit</dt><dd>{data.system.last_commit}</dd></div></dl><small>Actualizado: {date(data.updated_at)}</small></section>
    </>}
  </main></AdminShell>;
}
