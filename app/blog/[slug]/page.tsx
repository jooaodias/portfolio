/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostBySlug } from '@/lib/services/blog'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { Footer } from '@/lib/components/footer/footer'
import { BackLink } from './back-link'
import { PostContent } from './post-content'
import { AuthorSection } from './author-section'
import { BlogFeatureGate } from '@/lib/components/blog-feature-gate/blog-feature-gate'
import { BlogPostJsonLd } from '@/lib/components/structured-data/blog-post-json-ld'
import {
  absoluteUrl,
  resolveOgImageUrl,
  truncateMetaDescription,
} from '@/lib/seo/site'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  let post
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }
  if (!post) {
    notFound()
  }

  const description = truncateMetaDescription(post.excerpt)
  const url = absoluteUrl(`/blog/${post.slug}`)
  const ogImage = resolveOgImageUrl(post.coverImage)

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description,
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.authorName],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  let post
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  if (!post) {
    notFound()
  }

  return (
    <BlogFeatureGate>
      <BlogPostJsonLd post={post} />
      <div className="flex flex-col min-h-screen">
        <article className="grow w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-12">
          <AnimatedContent delay={0} duration={0.4}>
            <BackLink />
          </AnimatedContent>

          <div className="bg-[#111216] border border-white/10 rounded-2xl p-6 sm:p-10">
            <AnimatedContent delay={0.05} duration={0.45}>
              <header className="mb-8">
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/[0.04] border border-white/10 text-zinc-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <PostContent
                  title={post.title}
                  titleEn={post.titleEn}
                  content={post.content}
                  contentEn={post.contentEn}
                  authorName={post.authorName}
                  readingTime={post.readingTime}
                  createdAt={post.createdAt}
                />
              </header>
            </AnimatedContent>

            {post.coverImage && (
              <AnimatedContent delay={0.15} duration={0.45}>
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-white/10 mt-8">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedContent>
            )}
          </div>

          <div className="mt-6">
            <AnimatedContent duration={0.3}>
              <AuthorSection authorName={post.authorName} />
            </AnimatedContent>
          </div>
        </article>

        <Footer />
      </div>
    </BlogFeatureGate>
  )
}
