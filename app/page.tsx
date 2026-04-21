import type { Metadata } from 'next'
import HomePageClient from './home-page-client'
import {
  DEFAULT_METADATA_DESCRIPTION,
  DEFAULT_METADATA_TITLE,
  getSiteUrl,
  SITE_OG_IMAGE_PATH,
} from '@/lib/seo/site'

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_METADATA_TITLE,
  },
  description: DEFAULT_METADATA_DESCRIPTION,
  alternates: {
    canonical: getSiteUrl(),
  },
  openGraph: {
    url: getSiteUrl(),
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
    images: [{ url: SITE_OG_IMAGE_PATH, width: 1200, height: 630, alt: DEFAULT_METADATA_TITLE }],
  },
}

export default function Home() {
  return <HomePageClient />
}
