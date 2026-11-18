import type { Metadata } from 'next'
import { PostList } from '@/lib/components/blog'
import { getPosts } from '@/lib/services/blog'
import { Footer } from '@/lib/components/footer/footer'
import { BookOpen } from 'lucide-react'
import { BlogHeader } from './blog-header'
import { BlogFeatureGate } from '@/lib/components/blog-feature-gate/blog-feature-gate'
import { absoluteUrl, SITE_TITLE_TEMPLATE } from '@/lib/seo/site'

const BLOG_DESCRIPTION =
  'Artigos sobre desenvolvimento web, React, Next.js e engenharia de software por João Aleixo.'

export const metadata: Metadata = {
  title: 'Blog',
  description: BLOG_DESCRIPTION,
  alternates: {
    canonical: absoluteUrl('/blog'),
  },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/blog'),
    title: SITE_TITLE_TEMPLATE.replace('%s', 'Blog'),
    description: BLOG_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_TEMPLATE.replace('%s', 'Blog'),
    description: BLOG_DESCRIPTION,
  },
}

export default async function BlogPage() {
  const { data: posts } = await getPosts({ published: true })

  return (
    <BlogFeatureGate>
      <div className="flex flex-col min-h-screen">
        <article className="grow w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12">
          <header className="bg-[#111216] border border-white/10 rounded-2xl p-6 sm:p-8 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#38bdf8]" aria-hidden="true" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Blog
                </h1>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 tabular-nums">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
              </span>
            </div>
            <BlogHeader />
          </header>

          <PostList posts={posts} />
        </article>

        <Footer />
      </div>
    </BlogFeatureGate>
  )
}
