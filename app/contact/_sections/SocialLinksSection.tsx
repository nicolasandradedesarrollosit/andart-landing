"use client";

import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";
import { SocialLinkBar } from "@/shared/components/forms/SocialLinkBar";
import { socialLinks } from "@/features/contact/data/social-links";

export function SocialLinksSection() {
  const { t } = useTranslation("contact");

  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <p className="section-label mb-6">{t("social.section_label")}</p>
        <SocialLinkBar links={socialLinks} />
      </Container>
    </Section>
  );
}
