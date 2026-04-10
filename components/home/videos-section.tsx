"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { videos } from "@/data/home-content";

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(wrapperRef, { amount: 0.72 });

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    if (inView) {
      node.play().catch(() => undefined);
    } else {
      node.pause();
    }
  }, [inView]);

  async function expandVideo() {
    const node = videoRef.current;
    if (!node) return;

    node.muted = false;
    await node.play().catch(() => undefined);
    await node.requestFullscreen?.().catch(() => undefined);
  }

  return (
    <motion.article
      ref={wrapperRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 44, damping: 24 }}
      className="space-y-3"
    >
      <button
        type="button"
        onClick={expandVideo}
        className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-zinc-800 text-left"
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.16))]" />
      </button>
      <div>
        <h3 className="font-display text-[2rem] leading-none tracking-[-0.045em] text-zinc-50">
          {video.title}
        </h3>
        <p className="mt-2 text-[0.84rem] leading-6 text-zinc-400">{video.description}</p>
      </div>
    </motion.article>
  );
}

export function VideosSection() {
  return (
    <section className="bg-zinc-900 px-5 py-20 text-white">
      <div className="mx-auto max-w-md">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.36em] text-[#d0ad7f]">
          O documentário
        </p>
        <h2 className="font-display mt-4 max-w-[8ch] text-[4rem] leading-[0.82] tracking-[-0.075em] text-zinc-50">
          Cenas que respiram.
        </h2>

        <div className="mt-12 space-y-12">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
