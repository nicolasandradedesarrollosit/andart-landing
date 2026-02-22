"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Hexagon, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/shared/constants/nav-items";
import { cn } from "@/shared/lib/cn";

export function Header() {
  const { t } = useTranslation("common");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="page-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Hexagon className="w-8 h-8" style={{ color: "var(--color-primary)" }} />
            <span className="font-bold text-lg hidden sm:inline">
              Digital Factory
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
