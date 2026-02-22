"use client";

import { useTranslation } from "react-i18next";
import { socialLinks } from "@/features/contact/data/social-links";

export function ContactSidebarSection() {
  const { t } = useTranslation("contact");

  return (
    <div className="contact-sidebar w-full">
      <div>
        <p className="section-label mb-3">{t("social.section_label")}</p>
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card flex items-center gap-3"
              >
                <div className="icon-box-sm shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
