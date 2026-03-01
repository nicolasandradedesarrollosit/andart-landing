import { ContactHeroSection } from "./_sections/ContactHeroSection";
import { ContactFormSection } from "./_sections/ContactFormSection";
import { ContactSidebarSection } from "./_sections/ContactSidebarSection";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8 items-start lg:items-stretch">
            <div className="lg:col-span-3 flex">
              <ContactFormSection />
            </div>
            <div className="lg:col-span-2 flex">
              <ContactSidebarSection />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
