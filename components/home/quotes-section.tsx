"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { quotes } from "@/data/home-content";

export function QuotesSection() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[60svh] overflow-hidden bg-[#9f4b2c] px-5 py-16 text-[#fff8e9]">
      <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-[#e4b06d]/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-[#6c3d2c]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[48svh] max-w-md flex-col justify-center">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.38em] text-white/82">
          Vozes da turma
        </p>

        <div className="relative mt-8 min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={quote.text}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 42, damping: 22 }}
              className="absolute inset-0"
            >
              <p className="font-hand text-[4.6rem] leading-[0.72] tracking-[-0.045em] text-[#fff8e9] drop-shadow-[0_8px_24px_rgba(60,24,14,0.24)]">
                {quote.text}
              </p>
              <p className="mt-8 text-right text-[0.7rem] font-bold uppercase tracking-[0.36em] text-white/82">
                {quote.child}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
