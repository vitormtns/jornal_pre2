import Image from "next/image";
import { highlights } from "@/data/home-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function HighlightsSection() {
  return (
    <section id="semana" className="section-frame px-0 py-18 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Destaques da semana"
          title="Os momentos que fizeram a turma brilhar mais forte"
          description="Uma leitura rápida, visual e gentil dos capítulos que mais marcaram os dias do Pré-2."
        />
      </Reveal>

      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="story-card group overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[1.55rem]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.tint} opacity-95`}
                />
                <div className="relative aspect-[0.98] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,38,0.04),rgba(15,21,31,0.46))]" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/84 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#4b5969] backdrop-blur-sm">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="px-2 pb-2 pt-4">
                <h3 className="font-[family-name:var(--font-display)] text-[1.7rem] leading-[1.02] tracking-[-0.04em] text-[#253043]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
