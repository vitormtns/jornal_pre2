import { GallerySection } from "@/components/home/gallery-section";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { QuotesSection } from "@/components/home/quotes-section";
import { SiteFooter } from "@/components/home/site-footer";
import { TimelineSection } from "@/components/home/timeline-section";
import { VideosSection } from "@/components/home/videos-section";

export default function Home() {
  return (
    <main className="page-shell pb-6">
      <HeroSection />
      <HighlightsSection />
      <TimelineSection />
      <GallerySection />
      <VideosSection />
      <QuotesSection />
      <SiteFooter />
    </main>
  );
}
