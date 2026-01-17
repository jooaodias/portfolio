'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/types/blog'
import { useI18n } from '@/lib/i18n/context'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { Footer } from '@/lib/components/footer/footer'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const { locale } = useI18n()

  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
        const response = await fetch(`${apiUrl}/posts/slug/${slug}`)

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Post not found')
          }
          throw new Error('Failed to fetch post')
        }

        const data: Post = await response.json()
        setPost(data)
      } catch (err) {
        console.error('Error fetching post:', err)
        setError(err instanceof Error ? err.message : 'Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Share cancelled or failed')
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert(locale === 'en-US' ? 'Link copied!' : 'Link copiado!')
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center min-h-screen pb-4">
        <div className="flex justify-center items-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="flex flex-col items-center min-h-screen pb-4">
        <div className="w-full max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {locale === 'en-US' ? 'Post not found' : 'Post não encontrado'}
          </h1>
          <p className="text-gray-400 mb-8">
            {locale === 'en-US'
              ? "The post you're looking for doesn't exist or has been removed."
              : 'O post que você procura não existe ou foi removido.'}
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'en-US' ? 'Back to Blog' : 'Voltar ao Blog'}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const title = locale === 'en-US' && post.titleEn ? post.titleEn : post.title
  const content = locale === 'en-US' && post.contentEn ? post.contentEn : post.content

  const formattedDate = new Date(post.createdAt).toLocaleDateString(
    locale === 'en-US' ? 'en-US' : 'pt-BR',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <div className="flex flex-col items-center min-h-screen pb-4">
      <article className="w-full max-w-4xl px-6 py-12">
        {/* Back button */}
        <AnimatedContent delay={0} duration={0.4}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'en-US' ? 'Back to Blog' : 'Voltar ao Blog'}
          </Link>
        </AnimatedContent>

        {/* Header */}
        <AnimatedContent delay={0.1} duration={0.5}>
          <header className="mb-8">
            {/* Tags */}
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

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.authorName}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min {locale === 'en-US' ? 'read' : 'de leitura'}
                </span>
              )}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors ml-auto"
              >
                <Share2 className="w-4 h-4" />
                {locale === 'en-US' ? 'Share' : 'Compartilhar'}
              </button>
            </div>
          </header>
        </AnimatedContent>

        {/* Cover Image */}
        {post.coverImage && (
          <AnimatedContent delay={0.2} duration={0.5}>
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10">
              <Image
                src={post.coverImage}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedContent>
        )}

        {/* Content */}
        <AnimatedContent delay={0.3} duration={0.5}>
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-purple-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
              prose-blockquote:border-l-purple-500 prose-blockquote:bg-gray-900/50 prose-blockquote:py-2 prose-blockquote:px-4
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:marker:text-purple-400"
            dangerouslySetInnerHTML={{ __html: formatContent(content) }}
          />
        </AnimatedContent>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12" />

        {/* Author section */}
        <AnimatedContent delay={0.4} duration={0.5}>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                {post.authorName.charAt(0)}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{post.authorName}</h3>
                <p className="text-gray-400 text-sm">
                  {locale === 'en-US'
                    ? 'Full Stack Developer'
                    : 'Desenvolvedor Full Stack'}
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </article>

      <Footer />
    </div>
  )
}

// Simple markdown-like content formatter
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)\n(?=<li>)/g, '$1')
    .replace(/(<li>.*<\/li>)(?!\n<li>)/gs, '<ul>$1</ul>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hpuolb])(.+)$/gm, '<p>$1</p>')
}
