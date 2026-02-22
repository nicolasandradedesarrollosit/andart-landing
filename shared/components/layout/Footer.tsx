"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="page-container py-8 pb-20 sm:py-12 md:pb-12">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          <Image src="/logos/andart-light.png" alt="Andart" width={36} height={36} className="block dark:hidden" />
          <Image src="/logos/andart-dark.png" alt="Andart" width={36} height={36} className="hidden dark:block" />
          <p className="text-xs sm:text-sm" style={{ color: "var(--color-text-secondary)" }}>
            {t("footer.tagline")}
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
