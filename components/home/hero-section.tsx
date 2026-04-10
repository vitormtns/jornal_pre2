"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroMedia } from "@/data/home-content";

const organic = {
  type: "spring" as const,
  stiffness: 46,
  damping: 24,
  mass: 1.1,
};

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.6]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-black">
      <motion.video
        aria-hidden="true"
        className="absolute inset-0 h-[112%] w-full object-cover"
        style={{ y: reduceMotion ? 0 : videoY }}
        autoPlay
        muted
        loop
        playsInline
        poster={heroMedia.poster}
        preload="metadata"
      >
        <source src={heroMedia.video} type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.5)_100%)]" />
      <motion.div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...organic, delay: 0.42 }}
          className="cinema-text text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-white/82"
        >
          Jornal digital do Pré-2
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...organic, delay: 0.58 }}
          className="cinema-text font-display mt-5 max-w-[9ch] text-[4.7rem] leading-[0.78] tracking-[-0.075em] text-balance"
        >
          O Respiro
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ ...organic, delay: 0.76 }}
          className="cinema-text mt-6 max-w-[18rem] text-[0.84rem] font-medium uppercase leading-6 tracking-[0.24em] text-white/76"
        >
          Uma semana inteira guardada como cena, gesto e memória.
        </motion.p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 h-12 w-px -translate-x-1/2 overflow-hidden bg-white/20">
        <motion.div
          className="h-5 w-px bg-white"
          animate={reduceMotion ? undefined : { y: [0, 48] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
