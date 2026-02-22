"use client";

import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("es") ? "es" : "en";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 p-2 rounded-lg border transition-colors hover:border-[var(--color-border-hover)]"
          style={{ borderColor: "var(--color-border)" }}
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" />
          <span className="text-xs font-bold uppercase">{currentLang}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[70]">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="flex items-center justify-between gap-4"
          >
            {lang.label}
            {currentLang === lang.code && <Check className="w-4 h-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
