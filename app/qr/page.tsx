import type { Metadata } from "next";
import QRTracking from "../components/QRTracking";

const WILD_COLLECTION_LOGO_SRC = "data:image/webp;base64,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";

export const metadata: Metadata = {
  title: "Canales oficiales | Wild Collection",
  description: "Todo Wild Collection, en un solo lugar.",
};

export default function QRPage() {
  return (
    <main className="min-h-screen bg-[#F6F2EC] px-6 text-[#1A1A1A]">
      <section className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col items-center justify-center py-10">
        <div className="w-full rounded-[32px] px-1 py-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={WILD_COLLECTION_LOGO_SRC}
            alt="Wild Collection"
            width="520"
            height="211"
            className="mx-auto h-auto w-[238px] max-w-[76vw]"
          />

          <h1 className="mt-9 text-center text-[22px] font-medium leading-[1.22] tracking-[-0.03em] text-[#1A1A1A]">
            Todo Wild Collection,
            <br />
            en un solo lugar.
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