import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/lib/theme/globals.css";
import { MainContent } from "./main";
import { I18nProvider } from "@/lib/i18n/context";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Aleixo",
  description: "João Aleixo's personal website - Frontend Developer",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
  },
  openGraph: {
    title: "João Aleixo",
    description: "João Aleixo's personal website - Frontend Developer",
    images: [
      {
        url: "/images/its-me.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Aleixo",
    description: "João Aleixo's personal website - Frontend Developer",
    images: [
      {
        url: "/images/its-me.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA4_ANALYTICS!} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ANALYTICS!} />
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
