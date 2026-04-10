import { ClosingFooter } from "@/components/home/closing-footer";
import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { QuotesSection } from "@/components/home/quotes-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { VideosSection } from "@/components/home/videos-section";

export default function Home() {
  return (
    <div className="relative bg-[var(--dark)]">
      <div className="relative z-10 overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
        <HeroSection />
        <HighlightsSection />
        <TimelineSection />
        <GallerySection />
        <VideosSection />
        <QuotesSection />
      </div>
      <div className="relative z-10 h-[100svh] bg-transparent" aria-hidden="true" />
      <ClosingFooter />
    </div>
  );
}
