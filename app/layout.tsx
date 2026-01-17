import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/lib/theme/globals.css";
import { MainContent } from "./main";
import { I18nProvider } from "@/lib/i18n/context";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import StructuredData from "@/lib/components/structured-data/structured-data";
import { ToastProvider } from "@/lib/components/toast-provider/toast-provider";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://joaoaleixo.dev'),
  title: {
    default: "João Aleixo - Full Stack Developer",
    template: "%s | João Aleixo"
  },
  description: "Desenvolvedor Full Stack especializado em React.js e Next.js com 5+ anos de experiência. Apaixonado por criar aplicações web modernas e escaláveis.",
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development', 'João Aleixo', 'Desenvolvedor Full Stack'],
  authors: [{ name: 'João Vitor Aleixo' }],
  creator: 'João Vitor Aleixo',
  publisher: 'João Vitor Aleixo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: "João Aleixo - Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em React.js e Next.js com 5+ anos de experiência.",
    siteName: 'João Aleixo Portfolio',
    images: [
      {
        url: "/images/its-me.jpeg",
        width: 1200,
        height: 630,
        alt: "João Aleixo - Full Stack Developer"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "João Aleixo - Full Stack Developer",
    description: "Desenvolvedor Full Stack especializado em React.js e Next.js com 5+ anos de experiência.",
    images: [
      {
        url: "/images/its-me.jpeg",
        width: 1200,
        height: 630,
        alt: "João Aleixo - Full Stack Developer"
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA4_ANALYTICS!} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ANALYTICS!} />
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
      >
        <I18nProvider>
          <MainContent>
            {children}
          </MainContent>
          <ToastProvider />
        </I18nProvider>
      </body>
    </html>
  );
}
