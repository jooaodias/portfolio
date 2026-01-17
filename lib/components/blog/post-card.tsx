'use client'

import Image from 'next/image'
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
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <AnimatedContent delay={index * 0.1} duration={0.5}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full"
      >
        <article className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
          {/* Cover Image */}
          {post.coverImage ? (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
          ) : (
            <div className="h-48 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 flex items-center justify-center">
              <div className="text-4xl font-bold text-white/20">
                {title.charAt(0)}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-5">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-400 text-sm line-clamp-3 mb-4">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formattedDate}
                </span>
                {post.readingTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readingTime} min
                  </span>
                )}
              </div>
              <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Featured badge */}
          {post.featured && (
            <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
              Featured
            </div>
          )}
        </article>
      </Link>
    </AnimatedContent>
  )
}
