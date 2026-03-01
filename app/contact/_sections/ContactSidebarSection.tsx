"use client";

import { m, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { socialLinks } from "@/features/contact/data/social-links";

export function ContactSidebarSection() {
  const { t } = useTranslation("contact");
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className="contact-sidebar w-full"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
    >
      <div>
        <p className="section-label mb-3">{t("social.section_label")}</p>
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <m.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card flex items-center gap-3"
                whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="icon-box-sm shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-sm font-medium">{link.label}</span>
              </m.a>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}
