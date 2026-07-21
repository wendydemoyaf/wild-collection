"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import styles from "./admin.module.css";

const statusOptions = ["nuevo", "confirmado", "preparando", "enviado", "entregado", "cancelado"] as const;
type OrderStatus = (typeof statusOptions)[number];

type OrderItem = {
  slug: string;
  name: string;
  quantity: number;
};

type PricingLine = {
  count: number;
  label: string;
  price: number;
  quantity: number;
};

type OrderRecord = {
  order_id: string;
  created_at: string;
  customer_name: string;
  phone: string;
  city: string;
  province: string;
  address: string;
  reference: string | null;
  items: OrderItem[];
  item_count: number;
  pricing: PricingLine[];
  regular_total: number;
  savings: number;
  total: number;
  status: OrderStatus;
  payment_method: string;
  source: string;
};

const statusLabels: Record<OrderStatus, string> = {
  nuevo: "Nuevo",
  confirmado: "Confirmado",
  preparando: "Preparando",
  enviado: "Enviado",
  entregado: "Entregado",
  cancelado: "Cancelado",
};

const statusStyles: Record<OrderStatus, string> = {
  nuevo: styles.statusNew,
  confirmado: styles.statusConfirmed,
  preparando: styles.statusPreparing,
  enviado: styles.statusSent,
  entregado: styles.statusDelivered,
  cancelado: styles.statusCancelled,
};

function money(value: number) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(Number(value));
}

function dateTime(value: string) {
  return new Intl.DateTimeFormat("es-EC", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Guayaquil",
  }).format(new Date(value));
}

function whatsappUrl(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `593${digits.slice(1)}` : digits;
  return `https://wa.me/${international}?text=${encodeURIComponent("Hola, te escribimos de Wild Collection para confirmar tu pedido.")}`;
}

function csvCell(value: unknown) {
  let text = String(value ?? "").replace(/\r?\n/g, " ");
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

function StatusSelect({
  order,
  updating,
  onChange,
}: {
  order: OrderRecord;
  updating: boolean;
  onChange: (orderId: string, status: OrderStatus) => void;
}) {
  return (
    <label className={styles.statusControl}>
      <span className="sr-only">Estado del pedido {order.order_id}</span>
      <select
        value={order.status}
        disabled={updating}
        onChange={(event) => onChange(order.order_id, event.target.value as OrderStatus)}
        className={`${styles.statusSelect} ${statusStyles[order.status]}`}
      >
        {statusOptions.map((status) => (
          <option value={status} key={status}>{statusLabels[status]}</option>
        ))}
      </select>
      {updating && <span className={styles.statusSaving}>Guardando…</span>}
    </label>
  );
}

export default function OrdersAdminPage() {
  const [screen, setScreen] = useState<"loading" | "login" | "dashboard">("loading");
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"todos" | OrderStatus>("todos");
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);
  const [updatingOrder, setUpdatingOrder] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  async function loadOrders(showRefresh = false) {
    if (showRefresh) setRefreshing(true);
    setError("");
    try {
      const response = await fetch("/api/admin/orders", { cache: "no-store" });
      const data = await response.json().catch(() => ({}));
      if (response.status === 401) {
        setScreen("login");
        return;
      }
      if (!response.ok) {
        setError(data.error ?? "No pudimos cargar los pedidos.");
        setScreen("login");
        return;
      }
      setOrders(data.orders ?? []);
      setScreen("dashboard");
    } catch {
      setError("No pudimos conectar con el panel. Revisa tu conexión e inténtalo nuevamente.");
      setScreen("login");
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    void loadOrders();
  }, []);

  useEffect(() => {
    if (!selectedOrder) return;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedOrder(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [selectedOrder]);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.normalize("NFKC").trim() }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error ?? "No pudimos iniciar sesión.");
        return;
      }
      setPassword("");
      setScreen("loading");
      await loadOrders();
    } catch {
      setError("No pudimos iniciar sesión. Revisa tu conexión.");
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => undefined);
    setOrders([]);
    setPassword("");
    setScreen("login");
  }

  async function updateStatus(orderId: string, status: OrderStatus) {
    setUpdatingOrder(orderId);
    setError("");
    try {
      const response = await fetch("/api/admin/orders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.status === 401) {
        setScreen("login");
        return;
      }
      if (!response.ok) {
        setError(data.error ?? "No pudimos cambiar el estado.");
        return;
      }
      setOrders((current) => current.map((order) => order.order_id === orderId ? { ...order, status } : order));
      setSelectedOrder((current) => current?.order_id === orderId ? { ...current, status } : current);
    } catch {
      setError("No pudimos guardar el nuevo estado.");
    } finally {
      setUpdatingOrder("");
    }
  }

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("es");
    return orders.filter((order) => {
      const matchesStatus = statusFilter === "todos" || order.status === statusFilter;
      const haystack = [order.order_id, order.customer_name, order.phone, order.city, order.province]
        .join(" ")
        .toLocaleLowerCase("es");
      return matchesStatus && (!query || haystack.includes(query));
    });
  }, [orders, search, statusFilter]);

  const metrics = useMemo(() => ({
    total: orders.length,
    newOrders: orders.filter((order) => order.status === "nuevo").length,
    active: orders.filter((order) => ["confirmado", "preparando", "enviado"].includes(order.status)).length,
    sales: orders.filter((order) => order.status !== "cancelado").reduce((sum, order) => sum + Number(order.total), 0),
  }), [orders]);

  function exportCsv() {
    const headings = ["Pedido", "Fecha", "Cliente", "Teléfono", "Ciudad", "Provincia", "Dirección", "Referencia", "Perfumes", "Cantidad", "Ahorro", "Total", "Estado"];
    const rows = filteredOrders.map((order) => [
      order.order_id,
      dateTime(order.created_at),
      order.customer_name,
      order.phone,
      order.city,
      order.province,
      order.address,
      order.reference ?? "",
      order.items.map((item) => `${item.quantity} × ${item.name}`).join(" | "),
      order.item_count,
      Number(order.savings).toFixed(2),
      Number(order.total).toFixed(2),
      statusLabels[order.status],
    ]);
    const csv = [headings, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
    const href = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = href;
    link.download = `wild-pedidos-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(href);
  }

  if (screen === "loading") {
    return (
      <main className={styles.centeredPage}>
        <div className={styles.gridBackdrop} />
        <div className={styles.loaderMark}>WC</div>
        <p className={styles.loadingText}>Abriendo tu panel privado</p>
      </main>
    );
  }

  if (screen === "login") {
    return (
      <main className={styles.loginPage}>
        <div className={styles.gridBackdrop} />
        <div className={styles.loginGlow} />
        <Link href="/" className={styles.loginBrand}><span>WC</span> Wild Collection</Link>
        <section className={styles.loginCard}>
          <p className={styles.eyebrow}>Gestión privada</p>
          <h1>Pedidos,<br /><em>bajo control.</em></h1>
          <p className={styles.loginLead}>Consulta clientes, organiza entregas y acompaña cada pedido desde un solo lugar.</p>
          <form onSubmit={login} className={styles.loginForm}>
            <label>
              <span>Contraseña del panel</span>
              <span className={styles.passwordField}>
                <input
                  required
                  minLength={10}
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Escribe tu contraseña"
                />
                <button type="button" onClick={() => setShowPassword((current) => !current)}>
                  {showPassword ? "Ocultar" : "Ver"}
                </button>
              </span>
            </label>
            {error && <p role="alert" className={styles.error}>{error}</p>}
            <button type="submit">Entrar al panel <span>→</span></button>
          </form>
          <p className={styles.securityNote}>Acceso protegido · Los datos de tus clientes no se muestran públicamente</p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.dashboard}>
      <header className={styles.adminHeader}>
        <Link href="/" className={styles.adminBrand}><span>WC</span><b>Wild Collection</b></Link>
        <div className={styles.headerTitle}><small>Panel privado</small><strong>Pedidos</strong></div>
        <nav>
          <Link href="/">Ver tienda</Link>
          <button type="button" onClick={() => void logout()}>Cerrar sesión</button>
        </nav>
      </header>

      <div className={styles.dashboardInner}>
        <section className={styles.dashboardIntro}>
          <div>
            <p className={styles.eyebrow}>Operación Wild</p>
            <h1>Pedidos que avanzan.<br /><em>Clientes que recuerdas.</em></h1>
          </div>
          <p>Organiza cada entrega desde “nuevo” hasta “entregado”. El sistema guarda tus cambios directamente en Supabase.</p>
        </section>

        {error && <div role="alert" className={styles.dashboardError}>{error}<button type="button" onClick={() => setError("")}>Cerrar</button></div>}

        <section className={styles.metrics} aria-label="Resumen de pedidos">
          <article><span>01</span><small>Pedidos registrados</small><strong>{metrics.total}</strong></article>
          <article><span>02</span><small>Nuevos por revisar</small><strong>{metrics.newOrders}</strong></article>
          <article><span>03</span><small>En proceso</small><strong>{metrics.active}</strong></article>
          <article><span>04</span><small>Valor registrado</small><strong>{money(metrics.sales)}</strong></article>
        </section>

        <section className={styles.ordersSection}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>Lista de clientes</p><h2>Todos los pedidos</h2></div>
            <p>{filteredOrders.length} resultado{filteredOrders.length === 1 ? "" : "s"}</p>
          </div>

          <div className={styles.toolbar}>
            <label className={styles.searchBox}>
              <span className="sr-only">Buscar pedido o cliente</span>
              <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar pedido, cliente, teléfono o ciudad" />
            </label>
            <label className={styles.filterBox}>
              <span className="sr-only">Filtrar por estado</span>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as "todos" | OrderStatus)}>
                <option value="todos">Todos los estados</option>
                {statusOptions.map((status) => <option value={status} key={status}>{statusLabels[status]}</option>)}
              </select>
            </label>
            <button type="button" className={styles.toolButton} onClick={() => void loadOrders(true)} disabled={refreshing}>{refreshing ? "Actualizando…" : "Actualizar"}</button>
            <button type="button" className={styles.exportButton} onClick={exportCsv} disabled={!filteredOrders.length}>Exportar CSV</button>
          </div>

          {filteredOrders.length ? (
            <>
              <div className={styles.tableWrap}>
                <table>
                  <thead><tr><th>Pedido</th><th>Cliente</th><th>Destino</th><th>Selección</th><th>Total</th><th>Estado</th><th><span className="sr-only">Acciones</span></th></tr></thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.order_id}>
                        <td><strong>{order.order_id}</strong><small>{dateTime(order.created_at)}</small></td>
                        <td><b>{order.customer_name}</b><a href={whatsappUrl(order.phone)} target="_blank" rel="noreferrer">{order.phone} · WhatsApp</a></td>
                        <td><b>{order.city}</b><small>{order.province}</small></td>
                        <td><b>{order.item_count} perfume{order.item_count === 1 ? "" : "s"}</b><small>{order.items.map((item) => `${item.quantity}× ${item.name}`).join(" · ")}</small></td>
                        <td><strong className={styles.orderTotal}>{money(order.total)}</strong>{Number(order.savings) > 0 && <small>Ahorró {money(order.savings)}</small>}</td>
                        <td><StatusSelect order={order} updating={updatingOrder === order.order_id} onChange={updateStatus} /></td>
                        <td><button type="button" className={styles.viewButton} onClick={() => setSelectedOrder(order)}>Ver detalle</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.mobileOrders}>
                {filteredOrders.map((order) => (
                  <article key={order.order_id} className={styles.mobileCard}>
                    <div className={styles.mobileCardTop}><div><small>{dateTime(order.created_at)}</small><strong>{order.order_id}</strong></div><span className={`${styles.statusPill} ${statusStyles[order.status]}`}>{statusLabels[order.status]}</span></div>
                    <h3>{order.customer_name}</h3>
                    <p>{order.city}, {order.province} · {order.item_count} perfume{order.item_count === 1 ? "" : "s"}</p>
                    <div className={styles.mobileTotal}><span>Total</span><strong>{money(order.total)}</strong></div>
                    <div className={styles.mobileActions}><a href={whatsappUrl(order.phone)} target="_blank" rel="noreferrer">WhatsApp</a><button type="button" onClick={() => setSelectedOrder(order)}>Ver pedido</button></div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.emptyState}><span>WC</span><h3>No encontramos pedidos</h3><p>Prueba otro término o cambia el filtro seleccionado.</p></div>
          )}
        </section>
      </div>

      {selectedOrder && (
        <div className={styles.drawerBackdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedOrder(null); }}>
          <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label={`Detalle del pedido ${selectedOrder.order_id}`}>
            <div className={styles.drawerTop}><div><p className={styles.eyebrow}>Detalle del pedido</p><h2>{selectedOrder.order_id}</h2><small>{dateTime(selectedOrder.created_at)}</small></div><button type="button" onClick={() => setSelectedOrder(null)} aria-label="Cerrar detalle">×</button></div>
            <div className={styles.drawerStatus}><span>Estado actual</span><StatusSelect order={selectedOrder} updating={updatingOrder === selectedOrder.order_id} onChange={updateStatus} /></div>
            <section className={styles.detailSection}><h3>Cliente y entrega</h3><dl><div><dt>Cliente</dt><dd>{selectedOrder.customer_name}</dd></div><div><dt>WhatsApp</dt><dd><a href={whatsappUrl(selectedOrder.phone)} target="_blank" rel="noreferrer">{selectedOrder.phone} ↗</a></dd></div><div><dt>Destino</dt><dd>{selectedOrder.city}, {selectedOrder.province}</dd></div><div><dt>Dirección</dt><dd>{selectedOrder.address}</dd></div>{selectedOrder.reference && <div><dt>Referencia</dt><dd>{selectedOrder.reference}</dd></div>}</dl></section>
            <section className={styles.detailSection}><h3>Perfumes elegidos</h3><ul className={styles.itemList}>{selectedOrder.items.map((item) => <li key={item.slug}><span>{item.quantity.toString().padStart(2, "0")}</span><div><strong>{item.name}</strong><small>{item.slug}</small></div></li>)}</ul></section>
            <section className={styles.detailSection}><h3>Resumen económico</h3><div className={styles.priceRows}>{selectedOrder.pricing.map((line) => <p key={`${line.quantity}-${line.label}`}><span>{line.count} × {line.label}</span><b>{money(line.count * Number(line.price))}</b></p>)}<p><span>Precio sin promociones</span><b>{money(selectedOrder.regular_total)}</b></p>{Number(selectedOrder.savings) > 0 && <p className={styles.savings}><span>Ahorro aplicado</span><b>−{money(selectedOrder.savings)}</b></p>}<p className={styles.grandTotal}><span>Total contra entrega</span><b>{money(selectedOrder.total)}</b></p></div></section>
            <a className={styles.whatsappButton} href={whatsappUrl(selectedOrder.phone)} target="_blank" rel="noreferrer">Confirmar por WhatsApp <span>↗</span></a>
          </aside>
        </div>
      )}
    </main>
  );
}
