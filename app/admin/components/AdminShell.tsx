"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import styles from "./admin-shell.module.css";

const navigation = [
  { href: "/admin", label: "Inicio", description: "Centro de operaciones" },
  { href: "/admin/resumen", label: "Panel de control", description: "Vista general" },
  { href: "/admin/pedidos", label: "Ventas", description: "Pedidos y clientes" },
  { href: "/admin/publicidad", label: "Meta Ads", description: "Campañas y resultados" },
  { href: "/admin/cobros-meta", label: "Facturación Meta", description: "Consumo y cobros" },
  { href: "/admin/rentabilidad", label: "Ganancias", description: "Utilidad y ROAS" },
  { href: "/admin/configuracion", label: "Configuración", description: "Estado técnico" },
];

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => undefined);
    setIsOpen(false);
    router.push("/admin/pedidos");
    router.refresh();
  }

  return (
    <div className={styles.shell}>
      <button type="button" className={styles.menuButton} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
        <span /><span /><span />
      </button>
      {isOpen && <button type="button" className={styles.backdrop} aria-label="Cerrar menú" onClick={() => setIsOpen(false)} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
        <Link href="/admin" className={styles.brand} onClick={() => setIsOpen(false)}><span>WC</span><b>Wild Ads Control</b></Link>
        <p className={styles.private}>Centro privado de Wild Collection</p>
        <nav aria-label="Navegación principal" className={styles.navigation}>
          {navigation.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} aria-current={active ? "page" : undefined} className={active ? styles.active : undefined}>
              <b>{item.label}</b><small>{item.description}</small>
            </Link>;
          })}
        </nav>
        <button type="button" className={styles.logout} onClick={() => void logout()}>Cerrar sesión <span>→</span></button>
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
