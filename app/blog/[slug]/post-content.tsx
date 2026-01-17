'use client'

import { useI18n } from '@/lib/i18n/context'
import { Calendar, Clock, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { ShareButton } from './share-button'

interface PostContentProps {
  title: string
  titleEn?: string | null
  content: string
  contentEn?: string | null
  authorName: string
  readingTime?: number | null
  createdAt: string
}

export function PostContent({
  title,
  titleEn,
  content,
  contentEn,
  authorName,
  readingTime,
  createdAt,
}: PostContentProps) {
  const { locale } = useI18n()

  const displayTitle = locale === 'en-US' && titleEn ? titleEn : title
  const displayContent = locale === 'en-US' && contentEn ? contentEn : content

  const formattedDate = new Date(createdAt).toLocaleDateString(
    locale === 'en-US' ? 'en-US' : 'pt-BR',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <>
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {displayTitle}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-8">
        <span className="flex items-center gap-2">
          <User className="w-4 h-4" />
          {authorName}
        </span>
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {formattedDate}
        </span>
        {readingTime && (
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {readingTime} min {locale === 'en-US' ? 'read' : 'de leitura'}
          </span>
        )}
        <ShareButton />
      </div>

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
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {displayContent}
          </ReactMarkdown>
        </div>
      </AnimatedContent>
    </>
  )
}
