"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/shared/components/ui/sonner";
import { I18nProvider } from "./I18nProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <I18nProvider>{children}</I18nProvider>
          <Toaster position="top-right" richColors />
        </LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
