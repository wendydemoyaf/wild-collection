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

export default function AdminHomePage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("/api/admin/orders", { cache: "no-store" }).then((response) => {
      if (response.status === 401) router.replace("/admin/pedidos");
      else setReady(true);
    }).catch(() => router.replace("/admin/pedidos"));
  }, [router]);

  if (!ready) return <main className={styles.home}><p className={styles.eyebrow}>Abriendo Wild Ads Control</p></main>;
  return <AdminShell><main className={styles.home}><section className={styles.intro}><p className={styles.eyebrow}>Centro de operaciones</p><h1>Todo Wild,<br /><em>en un solo lugar.</em></h1><p>Bienvenida a Wild Ads Control. Desde aquí puedes entrar a cada área sin memorizar enlaces ni depender del botón atrás.</p></section><section className={styles.cards} aria-label="Áreas disponibles">{areas.map((area, index) => <Link href={area.href} className={styles.card} key={area.href}><span>0{index + 1}</span><h2>{area.title}</h2><p>{area.text}</p><b>→</b></Link>)}</section></main></AdminShell>;
}
