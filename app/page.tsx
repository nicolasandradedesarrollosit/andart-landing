import { HeroSection } from "./_sections/HeroSection";
import { SocialProofSection } from "./_sections/SocialProofSection";
import { PortfolioSection } from "./_sections/PortfolioSection";
import { PillarsSection } from "./_sections/PillarsSection";
import { ProcessSection } from "./_sections/ProcessSection";
import { DifferentiatorsSection } from "./_sections/DifferentiatorsSection";
import { CtaFooterSection } from "./_sections/CtaFooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <PortfolioSection />
      <PillarsSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <CtaFooterSection />
    </>
  );
}
