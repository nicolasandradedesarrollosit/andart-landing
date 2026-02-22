"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/shared/constants/nav-items";
import { ThemeToggle } from "@/shared/components/ui/ThemeToggle";
import { LanguageToggle } from "@/shared/components/ui/LanguageToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const { t } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
        <div className="page-container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logos/andart-light.png"
                alt="Andart"
                width={32}
                height={32}
                className="block dark:hidden"
              />
              <Image
                src="/logos/andart-dark.png"
                alt="Andart"
                width={32}
                height={32}
                className="hidden dark:block"
              />
              <span className="font-bold text-lg hidden sm:inline">
                Andart
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
                >
                  {t(item.label)}
                </Link>
              ))}
              <LanguageToggle />
              <ThemeToggle />
            </nav>

            <button
              className="md:hidden p-3"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
