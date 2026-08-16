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
    <main className={`${poppins.className} min-h-screen bg-[#F3EFE8] px-5 text-[#1A1A1A]`}>
      <section className="mx-auto flex min-h-screen w-full max-w-[400px] flex-col items-center justify-center py-8">
        <div className="w-full px-1 py-4 text-center">
          <div className="mx-auto h-[92px] w-[92px] overflow-hidden rounded-full bg-[#FBF8F3] shadow-[0_3px_12px_rgba(26,26,26,0.07)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-collection-logo.webp"
              alt="Wild Collection"
              width="520"
              height="211"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <h1 className="mt-5 text-center text-[21px] leading-[1.28] tracking-[-0.025em] text-[#1A1A1A]">
            <span className="font-semibold">Todo Wild Collection,</span>
            <br />
            <span className="font-normal">en un solo lugar.</span>
          </h1>

          <QRTracking />

          <footer className="mt-9 border-t border-[#9B8875]/20 pt-6 text-center text-[10px] leading-relaxed tracking-[0.1em] text-[#8B7666]">
            <p className="font-medium uppercase">Canales oficiales de Wild Collection</p>
            <p className="mt-0.5 font-normal normal-case tracking-[0.06em]">@wildcollection1</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
