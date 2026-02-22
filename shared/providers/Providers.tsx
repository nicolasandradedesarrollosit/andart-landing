"use client";

import { I18nProvider } from "./I18nProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <I18nProvider>{children}</I18nProvider>;
}
