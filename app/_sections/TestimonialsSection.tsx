"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/components/display/SectionHeader";
import { TestimonialCard } from "@/shared/components/display/TestimonialCard";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { testimonials } from "@/features/landing/data/testimonials";

export function TestimonialsSection() {
  const { t } = useTranslation("landing");

  return (
    <Section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          label={t("testimonials.label")}
          title={t("testimonials.title")}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              avatarSrc={testimonial.avatarSrc}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
