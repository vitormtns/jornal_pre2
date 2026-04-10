import Image from "next/image";
import { videos } from "@/data/home-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function VideosSection() {
  return (
    <section className="section-frame py-4 sm:py-8">
      <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(202,222,195,0.18),rgba(255,250,244,0.82))] px-4 py-8 shadow-[0_24px_62px_rgba(79,63,45,0.08)] sm:px-8 sm:py-10">
        <Reveal>
          <SectionHeading
            eyebrow="Momentos em vídeo"
            title="Clipes curtos para ouvir o ritmo e a atmosfera da turma"
            description="Em vez de embeds pesados, a seção se comporta como uma coleção de cenas: elegante, leve e pronta para receber os vídeos reais da semana."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {videos.map((video, index) => (
            <Reveal key={video.title} delay={index * 0.08}>
              <article className="story-card group overflow-hidden p-3">
                <div className="relative aspect-[0.95] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,32,0.08),rgba(20,24,32,0.54))]" />
                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
                    <div className="glass-panel rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white">
                      vídeo
                    </div>
                    <div className="rounded-full bg-white/18 px-3 py-1 text-[0.75rem] font-semibold text-white backdrop-blur-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/18 bg-white/16 text-white shadow-[0_16px_36px_rgba(10,16,22,0.24)] backdrop-blur-sm">
                      <div className="ml-1 h-0 w-0 border-b-[9px] border-l-[14px] border-t-[9px] border-b-transparent border-l-white border-t-transparent" />
                    </div>
                  </div>
                </div>
                <div className="px-2 pb-2 pt-4">
                  <h3 className="font-[family-name:var(--font-display)] text-[1.65rem] leading-[1.02] tracking-[-0.04em] text-[#253043]">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[var(--muted)]">
                    {video.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
