import { quotes } from "@/data/home-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function QuotesSection() {
  return (
    <section className="section-frame py-18 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Falas da turma"
          title="Frases pequenas que guardam mundos inteiros"
          description="Esse é o pedaço mais afetivo do jornal: observações espontâneas, imaginativas e profundamente memoráveis."
          align="center"
        />
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {quotes.map((quote, index) => (
          <Reveal key={quote.child} delay={index * 0.08}>
            <article className="story-card relative overflow-hidden p-6 sm:p-7">
              <div className="ambient-blur right-0 top-0 h-24 w-24 bg-[#d4e2f6]" />
              <div className="ambient-blur bottom-0 left-0 h-24 w-24 bg-[#f5d6c9]" />
              <div className="relative">
                <div className="font-[family-name:var(--font-display)] text-[3.5rem] leading-none tracking-[-0.08em] text-[#d0b08b]">
                  &ldquo;
                </div>
                <p className="-mt-4 text-[1.16rem] leading-8 text-[#334051]">
                  {quote.text}
                </p>
                <div className="mt-5 inline-flex rounded-full border border-[var(--line)] bg-white/72 px-4 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#5b6878]">
                  {quote.child}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
