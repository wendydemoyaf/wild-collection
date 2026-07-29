"use client";

import { useEffect, useRef } from "react";

type MetaViewContentProps = {
  contentId: string;
  contentName: string;
  contentCategory: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaViewContent({
  contentId,
  contentName,
  contentCategory,
}: MetaViewContentProps) {
  const trackedRef = useRef(false);

  useEffect(() => {
    if (trackedRef.current) return;

    let attempts = 0;
    let timeoutId: number | undefined;

    const trackViewContent = () => {
      if (trackedRef.current) return;

      if (typeof window.fbq === "function") {
        window.fbq("track", "ViewContent", {
          content_ids: [contentId],
          content_name: contentName,
          content_type: "product",
          content_category: contentCategory,
        });
        trackedRef.current = true;
        return;
      }

      attempts += 1;
      if (attempts < 5) {
        timeoutId = window.setTimeout(trackViewContent, 300);
      }
    };

    trackViewContent();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [contentId, contentName, contentCategory]);

  return null;
}
