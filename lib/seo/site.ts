/** Canonical site origin without trailing slash */
export const DEFAULT_SITE_URL = 'https://joaoaleixo.dev'

export const SITE_NAME = 'João Aleixo'

export const SITE_TITLE_TEMPLATE = `%s | ${SITE_NAME}`

export const DEFAULT_METADATA_TITLE = `${SITE_NAME} - Full Stack Developer`

export const DEFAULT_METADATA_DESCRIPTION =
  'Desenvolvedor Full Stack especializado em React.js e Next.js com 5+ anos de experiência. Apaixonado por criar aplicações web modernas e escaláveis.'

export const SITE_OG_IMAGE_PATH = '/images/its-me.jpeg'

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_SITE_URL
  return raw.replace(/\/+$/, '')
}

export function absoluteUrl(pathname: string): string {
  const base = getSiteUrl()
  if (!pathname || pathname === '/') return base
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${base}${path}`
}

export function truncateMetaDescription(text: string, max = 155): string {
  const normalized = text.trim().replace(/\s+/g, ' ')
  if (normalized.length <= max) return normalized
  return `${normalized.slice(0, max - 1).trimEnd()}…`
}

export function resolveOgImageUrl(image?: string | null): string {
  if (!image) return absoluteUrl(SITE_OG_IMAGE_PATH)
  if (image.startsWith('http://') || image.startsWith('https://')) return image
  return absoluteUrl(image.startsWith('/') ? image : `/${image}`)
}
