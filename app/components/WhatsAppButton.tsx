"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/593963826845?text=Hola,%20quiero%20información%20sobre%20los%20perfumes%20de%20WILD%20COLLECTION"
      target="_blank"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.888.755 5.71 2.188 8.2L.247 32l7.57-1.984a15.93 15.93 0 008.183 2.242h.007c8.835 0 16-7.164 16-16 0-4.27-1.664-8.284-4.688-11.308A15.89 15.89 0 0016 .396zm0 29.25h-.006a13.2 13.2 0 01-6.73-1.85l-.483-.287-4.49 1.176 1.198-4.376-.314-.51a13.16 13.16 0 01-2.02-6.94c0-7.29 5.93-13.22 13.22-13.22 3.53 0 6.85 1.374 9.34 3.864a13.13 13.13 0 013.87 9.34c0 7.29-5.93 13.22-13.22 13.22zm7.28-9.9c-.398-.2-2.35-1.16-2.713-1.29-.364-.132-.63-.198-.896.2-.265.397-1.03 1.29-1.26 1.555-.232.265-.464.298-.862.1-.397-.2-1.68-.62-3.2-1.98-1.18-1.05-1.98-2.35-2.21-2.75-.232-.397-.025-.612.174-.81.18-.178.397-.464.596-.696.2-.232.265-.397.397-.662.132-.265.066-.497-.033-.696-.1-.2-.896-2.16-1.23-2.96-.325-.78-.655-.67-.896-.68-.232-.01-.497-.01-.762-.01s-.696.1-1.06.497c-.364.397-1.39 1.36-1.39 3.31 0 1.95 1.42 3.84 1.62 4.11.2.265 2.8 4.27 6.78 5.99.95.41 1.69.65 2.27.83.95.3 1.81.26 2.49.16.76-.11 2.35-.96 2.68-1.88.33-.93.33-1.73.23-1.88-.1-.16-.36-.26-.76-.46z" />
      </svg>
    </a>
  );
}
