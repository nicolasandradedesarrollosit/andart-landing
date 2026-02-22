"use client";

import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";
import { LocationCard } from "@/shared/components/display/LocationCard";

export function LocationSection() {
  const { t } = useTranslation("contact");

  return (
    <Section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container>
        <p className="section-label mb-6">{t("location.section_label")}</p>
        <LocationCard
          label={t("location.hq_label")}
          address={t("location.address")}
          directionsHref="#"
        />
      </Container>
    </Section>
  );
}
