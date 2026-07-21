import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedidos | Wild Collection",
  description: "Panel privado de pedidos de Wild Collection.",
  robots: { index: false, follow: false },
};

export default function OrdersAdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
