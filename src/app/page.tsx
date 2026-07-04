import { DisclaimerModal } from "@/components/site/DisclaimerModal";
import { GrainOverlay } from "@/components/site/GrainOverlay";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { LegacyTimeline } from "@/components/site/LegacyTimeline";
import { PracticeIndex } from "@/components/site/PracticeIndex";
import { Manifesto } from "@/components/site/Manifesto";
import { Advocates } from "@/components/site/Advocates";
import { Capabilities } from "@/components/site/Capabilities";
import { Insights } from "@/components/site/Insights";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <DisclaimerModal />
      <Navbar />

      <main className="flex min-h-screen flex-col">
        <Hero />
        <Marquee />
        <LegacyTimeline />
        <PracticeIndex />
        <Manifesto />
        <Advocates />
        <Capabilities />
        <Insights />
        <Careers />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
