'use client'

import React, { useMemo, useState } from 'react'
import { BookOpen, Search } from 'lucide-react'
import { PostListItem } from '@/lib/types/blog'
import { PostCard } from './post-card'
import { useI18n } from '@/lib/i18n/context'

interface PostListProps {
  posts: PostListItem[]
  showEmpty?: boolean
}

export function PostList({ posts, showEmpty = true }: PostListProps) {
  const { locale, t } = useI18n()
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)))
    return Array.from(tagSet)
  }, [posts])

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase()
    return posts.filter((post) => {
      if (selectedTag && !post.tags.includes(selectedTag)) return false
      if (!query) return true
      const title = (locale === 'en-US' && post.titleEn ? post.titleEn : post.title).toLowerCase()
      const excerpt = (locale === 'en-US' && post.excerptEn ? post.excerptEn : post.excerpt).toLowerCase()
      return (
        title.includes(query) ||
        excerpt.includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    })
  }, [posts, search, selectedTag, locale])

  return (
    <div className="space-y-6">
      {posts.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-xs">
            <Search
              className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('blog.searchPlaceholder')}
              aria-label={t('blog.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#111216] border border-white/10 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#38bdf8]/60 transition-colors"
            />
          </div>

          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
              <button
                type="button"
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  selectedTag === null
                    ? 'bg-[#38bdf8]/15 border-[#38bdf8]/50 text-[#38bdf8]'
                    : 'bg-[#111216] border-white/10 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {t('blog.allTags')}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-[#38bdf8]/15 border-[#38bdf8]/50 text-[#38bdf8]'
                      : 'bg-[#111216] border-white/10 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {filteredPosts.length === 0 && showEmpty ? (
        <div className="bg-[#111216] border border-white/10 rounded-2xl flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-[#38bdf8]" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1.5">
            {t('blog.noPosts')}
          </h3>
          <p className="text-sm text-zinc-400">
            {t('blog.noPostsDescription')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPosts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}
