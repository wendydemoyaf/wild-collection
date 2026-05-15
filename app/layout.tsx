import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WILD COLLECTION",
  description: "Perfumes Wild Collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <a
          href="https://wa.me/593963826845?text=Hola,%20quiero%20información%20sobre%20los%20perfumes%20de%20WILD%20COLLECTION"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-all duration-500 animate-pulse hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0012.05 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.6 5.94L0 24l6.37-1.67a11.82 11.82 0 005.68 1.45h.01c6.53 0 11.85-5.32 11.85-11.86 0-3.17-1.24-6.15-3.49-8.44zM12.06 21.6h-.01a9.7 9.7 0 01-4.94-1.35l-.35-.21-3.78.99 1.01-3.68-.23-.38a9.68 9.68 0 01-1.49-5.11c0-5.36 4.36-9.72 9.72-9.72 2.6 0 5.04 1.01 6.88 2.85a9.66 9.66 0 012.85 6.87c0 5.36-4.36 9.72-9.72 9.72zm5.34-7.27c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.51.07-.78.36-.26.29-1.03 1.01-1.03 2.47s1.06 2.87 1.21 3.07c.15.19 2.09 3.19 5.06 4.47.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
