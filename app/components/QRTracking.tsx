"use client";

import { useEffect, useRef } from "react";

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

function ChannelIcon({ channel }: { channel: QRChannel }) {
  if (channel === "whatsapp") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
        <path d="M9 8.2c.3 3 2.4 5 5.4 5.7l1-1.1 2 .7c-.2 1.1-1 2.1-2.2 2.3-4.4-.5-7.5-3.4-8-7.8.2-1.2 1.1-2 2.2-2.2l.7 2-1.1.4Z" />
      </svg>
    );
  }

  if (channel === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (channel === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="currentColor">
        <path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a23 23 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.8v8h3.4Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5C9.8 18.2 8.7 15.4 8.7 12S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 opacity-45" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="m7.5 4.5 5 5.5-5 5.5" />
    </svg>
  );
}

export default function QRTracking() {
  const trackedPageViewRef = useRef(false);

  useEffect(() => {
    if (trackedPageViewRef.current) return;
    trackedPageViewRef.current = true;

    const context = getTrackingContext();
    trackMeta("WC_QR_PageView", context);
    void saveOwnEvent("qr_page_view", context, null);
  }, []);

  function handleClick(link: QRLink) {
    try {
      const context = getTrackingContext();
      trackMeta(link.metaEventName, context, link);
      void saveOwnEvent(link.ownEventName, context, link.channel);
    } catch {
      // Native link navigation must always continue, even if tracking fails.
    }
  }

  return (
    <div className="mt-7 flex w-full flex-col gap-3">
      {QR_LINKS.map((link) => (
        <a
          key={link.channel}
          href={link.href}
          onClick={() => handleClick(link)}
          className={`grid min-h-[58px] w-full grid-cols-[22px_1fr_22px] items-center rounded-[19px] border border-transparent px-5 text-sm font-semibold tracking-[0.055em] shadow-[0_2px_9px_rgba(26,26,26,0.055)] transition active:scale-[0.99] ${
            link.primary
              ? "bg-[#1A1A1A] text-[#F6F2EC]"
              : "bg-[#FBF8F3] text-[#1A1A1A]"
          }`}
        >
          <ChannelIcon channel={link.channel} />
          <span>{link.label}</span>
          <ChevronIcon />
        </a>
      ))}
    </div>
  );
}
