"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "@/shared/constants/nav-items";
import { cn } from "@/shared/lib/cn";

export function BottomNav() {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t">
      <div className="flex items-center justify-around h-16">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 transition-colors",
                isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-secondary)]"
              )}
            >
              {Icon && <Icon className="w-5 h-5" />}
              <span className="text-xs font-medium">{t(item.label)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
