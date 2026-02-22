"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/shared/components/ui/sonner";
import { I18nProvider } from "./I18nProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <I18nProvider>{children}</I18nProvider>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}
