"use client";

import { useEffect, useMemo, useRef } from "react";

type CheckoutItem = {
  slug: string;
  quantity: number;
};

type MetaInitiateCheckoutProps = {
  cart: CheckoutItem[];
  itemCount: number;
  total: number;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "wild-initiate-checkout-signature";

function getStoredSignature() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredSignature(signature: string) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, signature);
  } catch {
    // Pixel tracking must never block checkout.
  }
}

export default function MetaInitiateCheckout({ cart, itemCount, total }: MetaInitiateCheckoutProps) {
  const trackedSignatureRef = useRef<string | null>(null);

  const contents = useMemo(
    () =>
      cart
        .filter((item) => typeof item.slug === "string" && item.slug.length > 0 && Number.isFinite(item.quantity) && item.quantity > 0)
        .map((item) => ({ id: item.slug, quantity: item.quantity }))
        .sort((first, second) => first.id.localeCompare(second.id) || first.quantity - second.quantity),
    [cart]
  );

  const signature = useMemo(
    () => JSON.stringify({ contents, itemCount, total }),
    [contents, itemCount, total]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (itemCount < 1 || contents.length < 1) return;
    if (trackedSignatureRef.current === signature) return;

    const storedSignature = getStoredSignature();
    if (storedSignature === signature) {
      trackedSignatureRef.current = signature;
      return;
    }

    let attempts = 0;
    let timeoutId: number | undefined;

    const trackInitiateCheckout = () => {
      if (trackedSignatureRef.current === signature) return;
      if (getStoredSignature() === signature) {
        trackedSignatureRef.current = signature;
        return;
      }

      if (typeof window.fbq === "function") {
        window.fbq("track", "InitiateCheckout", {
          content_ids: contents.map((item) => item.id),
          contents,
          content_type: "product",
          num_items: itemCount,
          value: total,
          currency: "USD",
        });
        setStoredSignature(signature);
        trackedSignatureRef.current = signature;
        return;
      }

      attempts += 1;
      if (attempts < 5) {
        timeoutId = window.setTimeout(trackInitiateCheckout, 300);
      }
    };

    trackInitiateCheckout();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [contents, itemCount, signature, total]);

  return null;
}
