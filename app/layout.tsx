import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/lib/theme/globals.css";
import { MainContent } from "./main";
import { I18nProvider } from "@/lib/i18n/context";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/lib/components/structured-data/structured-data";
import { Providers } from "./providers/providers";
import { ToastProviderLazy } from "@/lib/components/toast-provider/toast-provider-lazy";
import {
  DEFAULT_METADATA_DESCRIPTION,
  DEFAULT_METADATA_TITLE,
  getSiteUrl,
  SITE_NAME,
  SITE_OG_IMAGE_PATH,
  SITE_TITLE_TEMPLATE,
} from "@/lib/seo/site";
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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: DEFAULT_METADATA_TITLE,
    template: SITE_TITLE_TEMPLATE,
  },
  description: DEFAULT_METADATA_DESCRIPTION,
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development', 'João Aleixo', 'Desenvolvedor Full Stack'],
  authors: [{ name: 'João Vitor Aleixo', url: siteUrl }],
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
    url: siteUrl,
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
    siteName: `${SITE_NAME} — Portfolio`,
    images: [
      {
        url: SITE_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: DEFAULT_METADATA_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: DEFAULT_METADATA_TITLE,
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ANALYTICS!} />
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
      >
        <Providers>
          <MainContent>
            {children}
          </MainContent>
          <ToastProviderLazy />
        </Providers>
      </body>
    </html>
  );
}
