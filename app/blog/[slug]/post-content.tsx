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
      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-5 leading-tight">
        {displayTitle}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-ink-muted text-sm pb-6 mb-8 border-b border-border-subtle">
        <span className="flex items-center gap-2">
          <User className="w-4 h-4 text-accent" aria-hidden="true" />
          {authorName}
        </span>
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-ink-muted" aria-hidden="true" />
          {formattedDate}
        </span>
        {readingTime && (
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-ink-muted" aria-hidden="true" />
            {readingTime} min {locale === 'en-US' ? 'read' : 'de leitura'}
          </span>
        )}
        <ShareButton />
      </div>

      {/* Content */}
      <AnimatedContent delay={0.15} duration={0.45}>
        <div
          className="prose prose-slate dark:prose-invert prose-lg max-w-none
            prose-headings:text-ink prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-ink-secondary prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-ink prose-strong:font-semibold
            prose-code:text-accent-text prose-code:bg-accent-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-elevated prose-pre:border prose-pre:border-border-subtle
            prose-blockquote:border-l-accent prose-blockquote:bg-surface prose-blockquote:py-2 prose-blockquote:px-4
            prose-ul:text-ink-secondary prose-ol:text-ink-secondary
            prose-li:marker:text-accent"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {displayContent}
          </ReactMarkdown>
        </div>
      </AnimatedContent>
    </>
  )
}
