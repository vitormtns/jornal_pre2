"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/data/home-content";
import { Reveal } from "./reveal";

function ChalkLeaf({ className, reverse = false }: { className: string; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reverse ? [40, -80] : [-70, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], reverse ? [12, -16] : [-14, 18]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{ y: reduceMotion ? 0 : y, rotate: reduceMotion ? 0 : rotate }}
      className={`pointer-events-none absolute opacity-50 ${className}`}
    >
      <svg width="64" height="88" viewBox="0 0 64 88" fill="none">
        <path
          d="M32 82C29 60 26 44 9 20C31 26 45 39 54 64C45 61 39 67 32 82Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M31 77C32 55 34 37 42 15" stroke="currentColor" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

export function TimelineSection() {
  return (
    <section className="section-paper relative overflow-hidden px-5 pb-24 pt-28 text-[var(--ink)]">
      <ChalkLeaf className="-left-7 top-20 text-[#9e6f45]" />
      <ChalkLeaf className="-right-5 top-[46rem] text-[#657c58]" reverse />

      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="section-kicker text-[0.68rem] font-bold uppercase tracking-[0.36em]">
            O caminho
          </p>
          <h2 className="font-display section-title mt-4 max-w-[9ch] text-[4rem] leading-[0.82] tracking-[-0.07em]">
            Jornal sem linha reta.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16">
          {timeline.map((item, index) => (
            <Reveal key={item.day} delay={index * 0.04}>
              <article className={`w-[78%] ${item.align}`}>
                <div className={`relative overflow-hidden rounded-[5px] soft-float ${item.shape}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="80vw"
                  />
                </div>
                <div className="mt-4">
                  <p className="section-kicker text-[0.63rem] font-bold uppercase tracking-[0.32em]">
                    {item.day}
                  </p>
                  <h3 className="font-display section-title mt-2 text-[2rem] leading-[0.95] tracking-[-0.045em]">
                    {item.title}
                  </h3>
                  <p className="section-copy mt-3 text-[0.88rem] leading-7">
                    {item.text}
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
