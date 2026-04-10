"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/data/home-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section className="section-frame py-18 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Galeria de fotos"
          title="Imagens tratadas como lembranças, não como anexos"
          description="A galeria foi desenhada para valorizar a atmosfera de cada momento, com ritmo visual limpo, toque editorial e leitura confortável no celular."
        />
      </Reveal>

      <div className="mt-8 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <Reveal key={item.src} delay={index * 0.06}>
            <button
              type="button"
              onClick={() => setActiveImage(index)}
              className={`group relative overflow-hidden rounded-[1.6rem] border border-white/65 bg-white/60 text-left shadow-[0_22px_54px_rgba(84,62,42,0.1)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,32,0.03),rgba(20,24,32,0.36))]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end p-3 sm:p-4">
                <div className="glass-panel rounded-full px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white">
                  ampliar
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeImage !== null && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(17,22,32,0.88)] p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[72svh] w-full max-w-4xl overflow-hidden rounded-[1.8rem] border border-white/10"
            >
              <Image
                src={gallery[activeImage].src}
                alt={gallery[activeImage].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,32,0.02),rgba(18,22,32,0.24))]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                <p className="max-w-lg text-sm leading-6 text-white/84">
                  {gallery[activeImage].alt}
                </p>
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
