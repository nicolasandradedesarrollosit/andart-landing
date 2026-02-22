"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";
import { SectorHeader } from "@/shared/components/display/SectorHeader";
import { CapabilityCard } from "@/shared/components/display/CapabilityCard";
import { PillarToggle } from "@/shared/components/forms/PillarToggle";
import { softwareCapabilities } from "@/features/services-listing/data/software-capabilities";
import { designCapabilities } from "@/features/services-listing/data/design-capabilities";
import { Code, Palette } from "lucide-react";

const PILLARS = [
  { key: "software", labelKey: "toggle.software" },
  { key: "design", labelKey: "toggle.design" },
];

export function CapabilitiesSection() {
  const { t } = useTranslation("services-listing");
  const [active, setActive] = useState("software");

  const capabilities = active === "software" ? softwareCapabilities : designCapabilities;
  const sectorLabel = active === "software" ? t("software.sector_label") : t("design.sector_label");
  const sectorTitle = active === "software" ? t("software.title") : t("design.title");
  const sectorIcon = active === "software" ? Code : Palette;

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center mb-6 sm:mb-10 gap-4 sm:gap-6">
          <h1 className="section-title text-center">{t("header")}</h1>
          <PillarToggle
            options={PILLARS.map((p) => ({ key: p.key, label: t(p.labelKey) }))}
            activeKey={active}
            onChange={setActive}
            className="w-full sm:w-64"
          />
        </div>

        <SectorHeader sectorLabel={sectorLabel} title={sectorTitle} trailingIcon={sectorIcon} className="mb-5 sm:mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <CapabilityCard
              key={cap.codeId}
              icon={cap.icon}
              codeId={cap.codeId}
              title={t(cap.titleKey)}
              description={t(cap.descriptionKey)}
              tags={cap.tags}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
