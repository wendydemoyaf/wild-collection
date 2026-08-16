"use client";

import { useEffect, useRef, useState } from "react";

type QRChannel = "whatsapp" | "instagram" | "facebook" | "website";

type QRLink = {
  label: string;
  href: string;
  channel: QRChannel;
  metaEventName: string;
  ownEventName: string;
  primary?: boolean;
};

type TrackingContext = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  page_path: "/qr";
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const QR_LINKS: QRLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/message/GCHZP5LUVP4PF1",
    channel: "whatsapp",
    metaEventName: "WC_QR_Click_WhatsApp",
    ownEventName: "qr_click_whatsapp",
    primary: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wildcollection1/",
    channel: "instagram",
    metaEventName: "WC_QR_Click_Instagram",
    ownEventName: "qr_click_instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/wildcollectionparfums/",
    channel: "facebook",
    metaEventName: "WC_QR_Click_Facebook",
    ownEventName: "qr_click_facebook",
  },
  {
    label: "Página web",
    href: "https://www.wildcollection.com/",
    channel: "website",
    metaEventName: "WC_QR_Click_Website",
    ownEventName: "qr_click_website",
  },
];

function cleanParam(value: string | null, maxLength: number) {
  if (!value) return null;
  const cleaned = value.trim().slice(0, maxLength);
  return cleaned || null;
}

function getTrackingContext(): TrackingContext {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: cleanParam(params.get("utm_source"), 80),
    utm_medium: cleanParam(params.get("utm_medium"), 80),
    utm_campaign: cleanParam(params.get("utm_campaign"), 120),
    page_path: "/qr",
  };
}

function trackMeta(eventName: string, context: TrackingContext, link?: QRLink) {
  if (typeof window.fbq !== "function") return;

  window.fbq("trackCustom", eventName, {
    page_path: context.page_path,
    source_context: "official_qr_page",
    destination_channel: link?.channel ?? null,
    destination_url: link?.href ?? null,
    utm_source: context.utm_source,
    utm_medium: context.utm_medium,
    utm_campaign: context.utm_campaign,
  });
}

async function saveOwnEvent(eventName: string, context: TrackingContext, channel: QRChannel | null) {
  try {
    await fetch("/api/qr-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        channel,
        utm_source: context.utm_source,
        utm_medium: context.utm_medium,
        utm_campaign: context.utm_campaign,
        page_path: context.page_path,
      }),
      keepalive: true,
    });
  } catch {
    // QR measurement must never block navigation.
  }
}

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), milliseconds);
  });
}

export default function QRTracking() {
  const trackedPageViewRef = useRef(false);
  const [pendingChannel, setPendingChannel] = useState<QRChannel | null>(null);

  useEffect(() => {
    if (trackedPageViewRef.current) return;
    trackedPageViewRef.current = true;

    const context = getTrackingContext();
    trackMeta("WC_QR_PageView", context);
    void saveOwnEvent("qr_page_view", context, null);
  }, []);

  async function handleClick(link: QRLink) {
    if (pendingChannel) return;
    setPendingChannel(link.channel);

    const context = getTrackingContext();
    trackMeta(link.metaEventName, context, link);

    await Promise.race([
      saveOwnEvent(link.ownEventName, context, link.channel),
      wait(450),
    ]);

    window.location.assign(link.href);
  }

  return (
    <div className="mt-10 flex w-full flex-col gap-3">
      {QR_LINKS.map((link) => (
        <button
          key={link.channel}
          type="button"
          onClick={() => void handleClick(link)}
          disabled={Boolean(pendingChannel)}
          className={`flex min-h-[56px] w-full items-center justify-center rounded-[18px] border px-5 text-sm font-semibold tracking-[0.08em] text-[#1A1A1A] transition disabled:cursor-wait disabled:opacity-70 ${
            link.primary
              ? "border-[#1A1A1A] bg-[#F8F4EE]"
              : "border-[#8B7666]/55 bg-transparent hover:border-[#1A1A1A]"
          }`}
        >
          {pendingChannel === link.channel ? "Abriendo…" : link.label}
        </button>
      ))}
    </div>
  );
}
