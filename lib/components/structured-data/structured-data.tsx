import {
  absoluteUrl,
  DEFAULT_METADATA_DESCRIPTION,
  getSiteUrl,
  SITE_OG_IMAGE_PATH,
} from '@/lib/seo/site'

export default function StructuredData() {
  const siteUrl = getSiteUrl()
  const personId = `${siteUrl}/#person`
  const websiteId = `${siteUrl}/#website`

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: 'João Aleixo — Portfolio',
        description: DEFAULT_METADATA_DESCRIPTION,
        inLanguage: ['pt-BR', 'en-US'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'João Vitor Aleixo',
        alternateName: 'João Aleixo',
        description: DEFAULT_METADATA_DESCRIPTION,
        url: siteUrl,
        image: absoluteUrl(SITE_OG_IMAGE_PATH),
        jobTitle: 'Full Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'V4 Company',
        },
        knowsAbout: [
          'React.js',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
          'Tailwind CSS',
          'Redux',
          'React Query',
          'Node.js',
          'Git',
          'GitHub Actions',
          'TurboRepo',
        ],
        sameAs: [
          'https://github.com/jooaodias',
          'https://www.linkedin.com/in/joao-aleixo-dias/',
        ],
        email: 'joaovitordias92040@gmail.com',
        nationality: {
          '@type': 'Country',
          name: 'Brazil',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
