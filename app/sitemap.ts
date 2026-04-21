import { MetadataRoute } from 'next'
import { getAllPublishedPostsForSitemap } from '@/lib/services/blog'
import { getSiteUrl } from '@/lib/seo/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl()
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  let posts: { slug: string; updatedAt: string }[] = []
  try {
    posts = await getAllPublishedPostsForSitemap()
  } catch {
    // Build-time or runtime fetch may fail if the API is unavailable; still emit static URLs.
  }

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogEntries]
}
