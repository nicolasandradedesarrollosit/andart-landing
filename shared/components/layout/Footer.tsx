"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "@/shared/constants/nav-items";

export function Footer() {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="page-container py-8 pb-20 sm:py-12 md:pb-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Image src="/logos/andart-light.png" alt="Andart" width={36} height={36} className="block dark:hidden" />
            <Image src="/logos/andart-dark.png" alt="Andart" width={36} height={36} className="hidden dark:block" />
            <p className="text-sm font-medium text-[var(--color-text-secondary)]">
              {t("footer.tagline")}
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-[var(--color-text-muted)]">
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
