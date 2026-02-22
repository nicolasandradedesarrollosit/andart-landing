"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "@/shared/constants/nav-items";
import { ThemeToggle } from "@/shared/components/ui/ThemeToggle";
import { LanguageToggle } from "@/shared/components/ui/LanguageToggle";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { t } = useTranslation("common");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <nav className="absolute right-0 top-0 h-full w-[80vw] max-w-sm p-6 flex flex-col gap-6 border-l"
        style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 text-sm font-medium py-2 hover:text-[var(--color-primary)] transition-colors"
              >
                <Icon className="w-5 h-5" />
                {t(item.label)}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
