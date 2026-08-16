import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import QRTracking from "../components/QRTracking";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Canales oficiales | Wild Collection",
  description: "Todo Wild Collection, en un solo lugar.",
};

export default function QRPage() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#F3EFE8] px-6 text-[#1A1A1A]`}>
      <section className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col items-center justify-center py-10">
        <div className="w-full rounded-[32px] px-1 py-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wild-collection-logo.webp"
            alt="Wild Collection"
            width="520"
            height="211"
            className="mx-auto h-auto w-[148px] max-w-[48vw]"
          />

          <h1 className="mt-4 text-center text-[22px] leading-[1.22] tracking-[-0.03em] text-[#1A1A1A]">
            <span className="font-semibold">Todo Wild Collection</span>
            <br />
            <span className="font-normal">en un solo lugar.</span>
          </h1>

          <QRTracking />

          <footer className="mt-11 text-center text-[11px] leading-relaxed tracking-[0.12em] text-[#8B7666]">
            <p className="font-medium uppercase">Canales oficiales de Wild Collection</p>
            <p className="mt-1 font-medium normal-case tracking-[0.08em]">@wildcollection1</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
