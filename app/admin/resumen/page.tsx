"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminShell from "../components/AdminShell";
import styles from "./resumen.module.css";

type Resumen = {
  ventas_dia: number;
  ventas_semana: number;
  ventas_mes: number;
  numero_pedidos: number;
  cantidad_perfumes: number;
  ticket_promedio: number | null;
  facturacion_total: number;
  utilidad_antes_publicidad: number | null;
  estados: { pendientes: number; confirmados: number; enviados: number; entregados: number; cancelados: number };
};

function money(value: number) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(value);
}

function displayMoney(value: number | null) {
  return value === null ? "No disponible" : money(value);
}

export default function AdminResumenPage() {
  const [resumen, setResumen] = useState<Resumen | null>(null);
  const [screen, setScreen] = useState<"loading" | "dashboard" | "login" | "error">("loading");
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  async function loadResumen(manual = false) {
    if (manual) setRefreshing(true);
    setError("");
    try {
      const response = await fetch("/api/admin/resumen", { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (response.status === 401) { setScreen("login"); return; }
      if (!response.ok) { setError(data.error ?? "No pudimos cargar el resumen."); setScreen("error"); return; }
      setResumen(data.resumen);
      setScreen("dashboard");
    } catch {
      setError("No pudimos conectar con el panel. Revisa tu conexión e inténtalo nuevamente.");
      setScreen("error");
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => { void loadResumen(); }, []);

  if (screen === "loading") return <main className={styles.centered}><div className={styles.mark}>WC</div><p>Cargando resumen financiero</p></main>;

  if (screen === "login") return <main className={styles.centered}><section className={styles.notice}><p className={styles.eyebrow}>Acceso privado</p><h1>Inicia sesión para ver el resumen.</h1><p>Usa el acceso existente del panel de pedidos; tu sesión también abre este módulo.</p><Link href="/admin/pedidos">Ir a pedidos →</Link></section></main>;

  if (screen === "error") return <main className={styles.centered}><section className={styles.notice}><p className={styles.eyebrow}>Resumen no disponible</p><h1>No pudimos cargar los datos.</h1><p>{error}</p><button type="button" onClick={() => void loadResumen()}>Intentar de nuevo</button></section></main>;

  return (
    <AdminShell><main className={styles.dashboard}>
      <div className={styles.inner}>
        <section className={styles.intro}>
          <div><p className={styles.eyebrow}>Wild Ads Control</p><h1>El negocio,<br /><em>en perspectiva.</em></h1></div>
          <div><p>Resumen construido con tus pedidos y costos registrados. No incluye pauta ni atribución publicitaria.</p><button type="button" onClick={() => void loadResumen(true)} disabled={refreshing}>{refreshing ? "Actualizando…" : "Actualizar datos"}</button></div>
        </section>

        <section className={styles.section} aria-labelledby="ventas"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Movimiento comercial</p><h2 id="ventas">Ventas</h2></div><p>Pedidos no cancelados</p></div><div className={styles.metrics}>
          <article><span>01</span><small>Ventas del día</small><strong>{money(resumen!.ventas_dia)}</strong></article>
          <article><span>02</span><small>Ventas de la semana</small><strong>{money(resumen!.ventas_semana)}</strong></article>
          <article><span>03</span><small>Ventas del mes</small><strong>{money(resumen!.ventas_mes)}</strong></article>
        </div></section>

        <section className={styles.section} aria-labelledby="negocio"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Base actual</p><h2 id="negocio">Negocio</h2></div><p>Información existente</p></div><div className={styles.metrics}>
          <article><span>04</span><small>Número de pedidos</small><strong>{resumen!.numero_pedidos}</strong></article>
          <article><span>05</span><small>Perfumes vendidos</small><strong>{resumen!.cantidad_perfumes}</strong></article>
          <article><span>06</span><small>Ticket promedio</small><strong>{displayMoney(resumen!.ticket_promedio)}</strong></article>
          <article><span>07</span><small>Facturación total</small><strong>{money(resumen!.facturacion_total)}</strong></article>
          <article className={styles.utility}><span>08</span><small>Utilidad antes de publicidad</small><strong>{displayMoney(resumen!.utilidad_antes_publicidad)}</strong><p>{resumen!.utilidad_antes_publicidad === null ? "Registra el envío de cada pedido no cancelado para calcularla." : "Sin inversión publicitaria atribuida."}</p></article>
        </div></section>

        <section className={styles.section} aria-labelledby="estados"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Operación</p><h2 id="estados">Estado de pedidos</h2></div><p>Según el estado actual</p></div><div className={styles.statuses}>
          <article><small>Pendientes</small><strong>{resumen!.estados.pendientes}</strong><p>Nuevos por revisar</p></article>
          <article><small>Confirmados</small><strong>{resumen!.estados.confirmados}</strong><p>Listos para preparar</p></article>
          <article><small>Enviados</small><strong>{resumen!.estados.enviados}</strong><p>En camino</p></article>
          <article><small>Entregados</small><strong>{resumen!.estados.entregados}</strong><p>Entrega completada</p></article>
          <article><small>Cancelados</small><strong>{resumen!.estados.cancelados}</strong><p>Sin rentabilidad</p></article>
        </div></section>
      </div>
    </main></AdminShell>
  );
}
