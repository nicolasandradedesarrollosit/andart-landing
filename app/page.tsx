import { HeroSection } from "./_sections/HeroSection";
import { PillarsSection } from "./_sections/PillarsSection";
import { ProcessSection } from "./_sections/ProcessSection";
import { PortfolioSection } from "./_sections/PortfolioSection";
import { DifferentiatorsSection } from "./_sections/DifferentiatorsSection";
import { TestimonialsSection } from "./_sections/TestimonialsSection";
import { CtaFooterSection } from "./_sections/CtaFooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ProcessSection />
      <PortfolioSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <CtaFooterSection />
    </>
  );
}
