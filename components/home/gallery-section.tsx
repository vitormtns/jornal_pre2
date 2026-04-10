import Image from "next/image";
import { gallery } from "@/data/home-content";

export function GallerySection() {
  return (
    <section className="section-paper-strong py-16 text-[var(--ink)]">
      <div className="px-6">
        <p className="section-kicker text-[0.68rem] font-bold uppercase tracking-[0.36em]">
          Caixa de memórias
        </p>
        <h2 className="font-display section-title mt-4 max-w-[7ch] text-[4rem] leading-[0.82] tracking-[-0.075em]">
          Passe com o dedo.
        </h2>
      </div>

      <div className="hide-scrollbar mt-9 flex snap-x snap-mandatory gap-[2px] overflow-x-auto overscroll-x-contain">
        {gallery.map((photo) => (
          <figure
            key={photo.src}
            className={`relative w-[88vw] shrink-0 snap-center overflow-hidden bg-zinc-200 ${photo.size}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="90vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
