import Image from "next/image";
import { timeline } from "@/data/home-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function TimelineSection() {
  return (
    <section className="section-frame py-4 sm:py-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,251,246,0.95),rgba(248,240,230,0.88))] px-4 py-8 shadow-[0_28px_80px_rgba(81,60,40,0.09)] sm:px-8 sm:py-10">
        <div className="ambient-blur right-0 top-10 h-40 w-40 bg-[#d4e2f6]" />
        <div className="ambient-blur bottom-12 left-0 h-32 w-32 bg-[#f5d6c9]" />

        <Reveal>
          <SectionHeading
            eyebrow="Jornal da semana"
            title="Uma narrativa viva para revisitar os dias com calma"
            description="Mais do que registrar atividades, esta linha do tempo organiza a semana como um diário visual, com ritmo, pausas e memórias que respiram."
          />
        </Reveal>

        <div className="relative mt-10 space-y-5 sm:space-y-6">
          <div className="absolute bottom-0 left-[1.06rem] top-0 w-px bg-[linear-gradient(180deg,rgba(77,90,106,0.1),rgba(77,90,106,0.28),rgba(77,90,106,0.1))] sm:left-6" />

          {timeline.map((entry, index) => (
            <Reveal key={entry.day} delay={index * 0.08}>
              <article className="relative pl-10 sm:pl-16">
                <div
                  className={`absolute left-0 top-6 h-[1.05rem] w-[1.05rem] rounded-full ring-8 ring-white/80 ${entry.accent} sm:left-[0.6rem]`}
                />
                <div className="story-card overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[0.94fr_1.12fr]">
                    <div className="relative min-h-[15rem] overflow-hidden">
                      <Image
                        src={entry.image}
                        alt={entry.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,23,34,0.08),rgba(17,23,34,0.34))]" />
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="inline-flex rounded-full border border-[var(--line)] bg-white/85 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#4d5a6a]">
                        {entry.day}
                      </div>
                      <h3 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[0.97] tracking-[-0.05em] text-[#253043]">
                        {entry.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[var(--muted)]">
                        {entry.text}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
