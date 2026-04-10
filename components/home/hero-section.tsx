"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroMedia } from "@/data/home-content";
import { Reveal } from "./reveal";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#eadfce] sm:min-h-[96svh]">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? undefined : { scale: 1.03 }}
        animate={reduceMotion ? undefined : { scale: 1.09 }}
        transition={reduceMotion ? undefined : { duration: 14, ease: "easeOut" }}
      >
        <Image
          src={heroMedia.image}
          alt="Momento afetivo da turma em atividade ao ar livre."
          fill
          priority
          className="object-cover object-[64%_center] sm:object-[center_28%] lg:object-[center_32%]"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,249,240,0.34),transparent_18%),linear-gradient(180deg,rgba(16,22,32,0.14)_0%,rgba(16,22,32,0.16)_22%,rgba(16,22,32,0.34)_54%,rgba(12,16,24,0.82)_100%)] sm:bg-[radial-gradient(circle_at_68%_20%,rgba(255,250,243,0.3),transparent_20%),linear-gradient(90deg,rgba(9,14,22,0.72)_0%,rgba(9,14,22,0.5)_26%,rgba(9,14,22,0.2)_52%,rgba(9,14,22,0.12)_100%),linear-gradient(180deg,rgba(15,21,31,0.1)_0%,rgba(15,21,31,0.2)_32%,rgba(15,21,31,0.46)_68%,rgba(12,16,24,0.78)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_24%_56%,rgba(10,15,22,0.54),transparent_44%)] sm:w-[62%] sm:bg-[radial-gradient(circle_at_20%_48%,rgba(10,15,22,0.6),transparent_52%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_68%,rgba(10,14,20,0.18)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(251,246,238,0)_0%,rgba(251,246,238,0.9)_100%)] sm:h-32" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[88rem] flex-col justify-between px-4 pb-6 pt-5 sm:min-h-[96svh] sm:px-6 sm:pb-8 sm:pt-6 lg:px-10 lg:pb-10 lg:pt-8">
        <Reveal className="flex items-start justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/92 backdrop-blur-md shadow-[0_10px_30px_rgba(9,14,21,0.16)] sm:px-4 sm:text-[0.72rem]">
            <span className="h-2 w-2 rounded-full bg-[#f2dc93] shadow-[0_0_0_5px_rgba(242,220,147,0.18)]" />
            Edicao da semana 08
          </div>
        </Reveal>

        <div className="flex flex-1 flex-col justify-end pt-16 sm:justify-center sm:pt-24">
          <div className="hero-glow-panel max-w-[24rem] rounded-[2rem] border border-white/10 px-4 py-5 shadow-[0_18px_46px_rgba(8,12,18,0.14)] sm:max-w-[33rem] sm:px-6 sm:py-6 lg:max-w-[38rem] lg:px-7 lg:py-7">
            <Reveal delay={0.08}>
              <div className="space-y-4 sm:space-y-5">
                <p className="hero-text-shadow max-w-[16rem] text-[0.74rem] font-semibold uppercase tracking-[0.26em] text-white/88 sm:max-w-none sm:text-[0.78rem]">
                  Jornal digital da turma do Pre-2
                </p>
                <h1 className="hero-title-shadow balanced-title font-[family-name:var(--font-display)] text-[3.1rem] leading-[0.92] tracking-[-0.05em] text-white sm:text-[4.85rem] sm:leading-[0.9] lg:text-[6.2rem]">
                  Memorias pequenas.
                  <span className="mt-2 block text-[#f8ecd3]">Sentimentos enormes.</span>
                </h1>
                <p className="hero-text-shadow max-w-[21rem] text-[0.98rem] leading-7 text-white/92 sm:max-w-[30rem] sm:text-[1.06rem] sm:leading-8">
                  Um espaco sensivel para revisitar os dias da turma com fotos,
                  videos e descobertas que merecem durar mais do que a semana.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="mt-6 sm:mt-7">
              <div className="flex flex-col items-start gap-3">
                <a
                  href="#semana"
                  className="inline-flex min-h-[3.35rem] items-center justify-center rounded-full bg-white px-6 text-[0.95rem] font-semibold text-[#223044] shadow-[0_16px_34px_rgba(8,12,18,0.24)] transition-transform duration-300 hover:-translate-y-0.5 sm:min-h-14 sm:px-7"
                >
                  Entrar na semana
                </a>
                <p className="hero-text-shadow max-w-[16rem] text-[0.84rem] leading-6 text-white/78 sm:max-w-none sm:text-[0.9rem]">
                  Feito para acompanhar com calma, no ritmo afetuoso do seu dia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.22} className="mt-10 sm:mt-12">
          <div className="max-w-[26rem] rounded-[1.75rem] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] p-4 text-white shadow-[0_22px_50px_rgba(8,12,18,0.22)] backdrop-blur-[24px] sm:max-w-[30rem] sm:rounded-[1.9rem] sm:p-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/14 text-base font-semibold text-white/94 backdrop-blur-md sm:h-12 sm:w-12">
                07
              </div>
              <div className="space-y-2">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/68 sm:text-[0.76rem]">
                  Caderno vivo da turma
                </p>
                <p className="text-[0.95rem] leading-6 text-white/88 sm:text-[1rem] sm:leading-7">
                  Jardim explorado, maos cheias de tinta, frases inesqueciveis e
                  uma semana inteira transformada em lembranca bonita.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
