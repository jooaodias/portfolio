import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/lib/theme/globals.css";
import { MainContent } from "./main";
import { I18nProvider } from "@/lib/i18n/context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Vitor",
  description: "João Vitor's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
      >
        <I18nProvider>
          <MainContent>
            {children}
          </MainContent>
        </I18nProvider>
      </body>
    </html>
  );
}
