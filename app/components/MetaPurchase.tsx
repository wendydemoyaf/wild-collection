"use client";

import { useEffect, useRef } from "react";

export type MetaPurchasePayload = {
  content_ids: string[];
  contents: Array<{
    id: string;
    quantity: number;
    item_price: number;
  }>;
  content_type: "product";
  num_items: number;
  value: number;
  currency: "USD";
};

type MetaPurchaseProps = {
  orderId: string;
  payload: MetaPurchasePayload | null;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const STORAGE_PREFIX = "wild-purchase-tracked-order:";

function getStorageKey(orderId: string) {
  return `${STORAGE_PREFIX}${orderId}`;
}

function hasTrackedPurchase(orderId: string) {
  try {
    return window.sessionStorage.getItem(getStorageKey(orderId)) === "1";
  } catch {
    return false;
  }
}

function markTrackedPurchase(orderId: string) {
  try {
    window.sessionStorage.setItem(getStorageKey(orderId), "1");
  } catch {
    // Pixel tracking must never block order confirmation.
  }
}

export default function MetaPurchase({ orderId, payload }: MetaPurchaseProps) {
  const trackedOrderRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!orderId || !payload || payload.num_items < 1 || payload.contents.length < 1) return;
    if (trackedOrderRef.current === orderId) return;

    if (hasTrackedPurchase(orderId)) {
      trackedOrderRef.current = orderId;
      return;
    }

    let attempts = 0;
    let timeoutId: number | undefined;

    const trackPurchase = () => {
      if (trackedOrderRef.current === orderId) return;
      if (hasTrackedPurchase(orderId)) {
        trackedOrderRef.current = orderId;
        return;
      }

      if (typeof window.fbq === "function") {
        window.fbq("track", "Purchase", payload);
        markTrackedPurchase(orderId);
        trackedOrderRef.current = orderId;
        return;
      }

      attempts += 1;
      if (attempts < 5) {
        timeoutId = window.setTimeout(trackPurchase, 300);
      }
    };

    trackPurchase();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [orderId, payload]);

  return null;
}
