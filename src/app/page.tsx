import { NavBar } from "@/components/sections/NavBar";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { SocialProofCards } from "@/components/sections/SocialProofCards";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { BentoServices } from "@/components/sections/BentoServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const GRAIN =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-deep-slate">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
        style={{ backgroundImage: GRAIN }}
        aria-hidden
      />

      <NavBar />

      <main>
        <HeroCarousel />
        <SocialProofCards />
        <ProjectShowcase />
        <BentoServices />
        <ProcessTimeline />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
