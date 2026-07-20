"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "../data/products";
import { calculateCartPricing, getCartSuggestion } from "../data/products";

export type CartItem = Product & { quantity: number };

type CartContextValue = {
  cart: CartItem[];
  itemCount: number;
  total: number;
  pricing: ReturnType<typeof calculateCartPricing>;
  suggestion: ReturnType<typeof getCartSuggestion>;
  lastAdded: { product: Product; key: number } | null;
  addToCart: (product: Product) => void;
  decrease: (slug: string) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  dismissAdded: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [lastAdded, setLastAdded] = useState<{ product: Product; key: number } | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("wild-cart-v2");
      if (saved) setCart(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem("wild-cart-v2");
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem("wild-cart-v2", JSON.stringify(cart));
  }, [cart, ready]);

  useEffect(() => {
    if (!lastAdded) return;
    const timer = window.setTimeout(() => setLastAdded(null), 3200);
    return () => window.clearTimeout(timer);
  }, [lastAdded]);

  const addToCart = (product: Product) => {
    setLastAdded({ product, key: Date.now() });
    setCart((current) => {
      const found = current.find((item) => item.slug === product.slug);
      if (found) return current.map((item) => item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const decrease = (slug: string) => {
    setCart((current) => current.flatMap((item) => {
      if (item.slug !== slug) return [item];
      return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : [];
    }));
  };

  const removeFromCart = (slug: string) => setCart((current) => current.filter((item) => item.slug !== slug));
  const clearCart = () => setCart([]);
  const dismissAdded = () => setLastAdded(null);

  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const pricing = useMemo(() => calculateCartPricing(itemCount), [itemCount]);
  const suggestion = useMemo(() => getCartSuggestion(itemCount), [itemCount]);
  const total = pricing.total;

  return (
    <CartContext.Provider value={{ cart, itemCount, total, pricing, suggestion, lastAdded, addToCart, decrease, removeFromCart, clearCart, dismissAdded }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe utilizarse dentro de CartProvider");
  return context;
}
