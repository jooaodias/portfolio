import { PostList } from '@/lib/components/blog'
import { getPosts } from '@/lib/services/blog'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { Footer } from '@/lib/components/footer/footer'
import { BookOpen } from 'lucide-react'
import { BlogHeader } from './blog-header'
import { BlogFeatureGate } from '@/lib/components/blog-feature-gate/blog-feature-gate'

export default async function BlogPage() {
  const { data: posts } = await getPosts({ published: true })

  return (
    <BlogFeatureGate>
      <div className="flex flex-col min-h-screen">
        <article className="grow w-full max-w-6xl mx-auto px-6 py-12">
          <AnimatedContent delay={0} duration={0.6}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-purple-400" />
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Blog
                </h1>
              </div>
              <BlogHeader />
            </div>
          </AnimatedContent>

          {/* Content */}
          <PostList posts={posts} />
        </article>

        <Footer />
      </div>
    </BlogFeatureGate>
  )
}
