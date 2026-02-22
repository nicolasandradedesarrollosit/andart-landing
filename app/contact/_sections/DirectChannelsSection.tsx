"use client";

import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";
import { ChannelCard } from "@/shared/components/display/ChannelCard";
import { directChannels } from "@/features/contact/data/channels";

export function DirectChannelsSection() {
  const { t } = useTranslation("contact");

  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <p className="section-label mb-6">{t("channels.section_label")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
          {directChannels.map((channel) => (
            <ChannelCard
              key={channel.titleKey}
              icon={channel.icon}
              title={t(channel.titleKey)}
              description={t(channel.descriptionKey)}
              href={channel.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
