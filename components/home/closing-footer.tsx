import Image from "next/image";
import { closing } from "@/data/home-content";

export function ClosingFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[100svh] overflow-hidden bg-black text-white">
      <Image
        src={closing.image}
        alt="Retrato final da turma em clima de fim de tarde."
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.34)_42%,rgba(0,0,0,0.72))]" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-12">
        <p className="font-display max-w-[10ch] text-[3.6rem] leading-[0.82] tracking-[-0.07em] text-balance">
          Fim de tarde.
        </p>
        <p className="mt-5 max-w-[18rem] text-[0.86rem] uppercase leading-6 tracking-[0.24em] text-white/72">
          {closing.text}
        </p>
      </div>
    </footer>
  );
}
