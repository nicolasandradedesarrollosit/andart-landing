"use client";

import { useTranslation } from "react-i18next";
import { Hexagon } from "lucide-react";

export function Footer() {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="page-container py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Hexagon className="w-10 h-10" style={{ color: "var(--color-primary)" }} />
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
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
