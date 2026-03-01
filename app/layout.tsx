import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../styles/index.css";
import { SITE_METADATA } from "@/shared/constants/site-metadata";
import { Providers } from "@/shared/providers/Providers";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import { BottomNav } from "@/shared/components/layout/BottomNav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  icons: {
    icon: "/logos/andart-dark.png",
    apple: "/logos/andart-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased no-translate overflow-x-hidden overflow-y-hidden`}
      >
        <Providers>
          <Header />
          <main className="h-[100dvh] overflow-y-auto pt-16 pb-16 md:pb-0">
            {children}
            <Footer />
          </main>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
