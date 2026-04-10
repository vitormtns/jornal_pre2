import Image from "next/image";
import { headline } from "@/data/home-content";
import { Reveal } from "./reveal";

export function HighlightsSection() {
  return (
    <section className="section-paper-strong relative px-6 py-20 text-[var(--ink)]">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="font-display section-title max-w-[18rem] text-[2rem] italic leading-[1.02] tracking-[-0.04em] text-balance">
            &ldquo;{headline.quote}&rdquo;
          </p>
        </Reveal>

        <div className="relative mt-9">
          <Reveal delay={0.08}>
            <div className="relative h-[70svh] overflow-hidden rounded-[4px] soft-float">
              <Image
                src={headline.image}
                alt={headline.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.18} className="absolute -bottom-10 left-[-0.35rem] z-10 w-[90%]">
            <div className="border border-[#ead8bd] bg-[#fffaf1] px-5 py-5 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.26)]">
              <p className="section-kicker text-[0.64rem] font-bold uppercase tracking-[0.34em]">
                Manchete
              </p>
              <h2 className="font-display section-title mt-3 text-[2.35rem] leading-[0.92] tracking-[-0.055em] text-balance">
                {headline.title}
              </h2>
              <p className="section-copy mt-4 text-[0.92rem] leading-7">
                {headline.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
