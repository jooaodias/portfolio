/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { PostListItem } from '@/lib/types/blog'
import { useI18n } from '@/lib/i18n/context'
import AnimatedContent from '../animated-content/animated-content'

interface PostCardProps {
  post: PostListItem
  index?: number
}

export function PostCard({ post, index = 0 }: PostCardProps) {
  const { locale } = useI18n()

  const title = locale === 'en-US' && post.titleEn ? post.titleEn : post.title
  const excerpt = locale === 'en-US' && post.excerptEn ? post.excerptEn : post.excerpt

  const formattedDate = new Date(post.createdAt).toLocaleDateString(
    locale === 'en-US' ? 'en-US' : 'pt-BR',
    { year: 'numeric', month: 'short', day: 'numeric' }
  )

  return (
    <AnimatedContent delay={Math.min(index * 0.08, 0.32)} duration={0.45} distance={20}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
      >
        <article className="relative h-full flex flex-col bg-[#111216] border border-white/10 rounded-2xl overflow-hidden transition-colors duration-200 hover:border-[#38bdf8]/45">
          {/* Cover Image */}
          {post.coverImage ? (
            <div className="relative h-44 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
              <img
                src={post.coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="h-44 w-full bg-white/[0.02] border-b border-white/10 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/15 select-none">
                {title.charAt(0)}
              </span>
            </div>
          )}

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col justify-between gap-4">
            <div>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium bg-white/[0.04] border border-white/10 text-zinc-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#38bdf8] transition-colors">
                {title}
              </h3>

              <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                {excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                  {formattedDate}
                </span>
                {post.readingTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                    {post.readingTime} min
                  </span>
                )}
              </div>
              <ArrowRight
                className="w-4 h-4 text-zinc-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Featured badge */}
          {post.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-0.5 text-xs font-semibold bg-[#FFE600] text-zinc-950 rounded-full">
              Featured
            </div>
          )}
        </article>
      </Link>
    </AnimatedContent>
  )
}
