import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostBySlug } from '@/lib/services/blog'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { Footer } from '@/lib/components/footer/footer'
import { BackLink } from './back-link'
import { PostContent } from './post-content'
import { AuthorSection } from './author-section'


interface BlogPostPageProps {
  params: Promise<{ slug: string }>
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
    <div className="flex flex-col min-h-screen">
      <article className="grow w-full max-w-4xl mx-auto px-6 py-12">
        <AnimatedContent delay={0} duration={0.4}>
          <BackLink />
        </AnimatedContent>

        <AnimatedContent delay={0.1} duration={0.5}>
          <header className="mb-8">
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-purple-500/20 text-purple-300 rounded-full"
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
          <AnimatedContent delay={0.2} duration={0.5}>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedContent>
        )}

        <div className="border-t border-gray-800 my-12" />

        <AnimatedContent duration={0.3}>
          <AuthorSection authorName={post.authorName} />
        </AnimatedContent>
      </article>

      <Footer />
    </div>
  )
}
