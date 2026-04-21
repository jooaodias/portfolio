import type { Post } from '@/lib/types/blog'
import { absoluteUrl, getSiteUrl, resolveOgImageUrl } from '@/lib/seo/site'

interface BlogPostJsonLdProps {
  post: Post
}

export function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
  const siteUrl = getSiteUrl()
  const postUrl = absoluteUrl(`/blog/${post.slug}`)
  const imageUrl = resolveOgImageUrl(post.coverImage)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.authorName,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'João Vitor Aleixo',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    url: postUrl,
    ...(post.tags.length > 0 ? { keywords: post.tags.join(', ') } : {}),
    inLanguage: 'pt-BR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
