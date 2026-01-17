'use client'

import { useEffect, useState } from 'react'
import { PostList } from '@/lib/components/blog'
import { PostListItem, PostsResponse } from '@/lib/types/blog'
import { useI18n } from '@/lib/i18n/context'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { Footer } from '@/lib/components/footer/footer'
import { BookOpen, Search } from 'lucide-react'

export default function BlogPage() {
  const { t, locale } = useI18n()
  const [posts, setPosts] = useState<PostListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
        const response = await fetch(`${apiUrl}/posts?published=true`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data: PostsResponse = await response.json()
        setPosts(data.data)

        // Extract unique tags
        const tags = new Set<string>()
        data.data.forEach((post) => {
          post.tags.forEach((tag) => tags.add(tag))
        })
        setAllTags(Array.from(tags))
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err instanceof Error ? err.message : 'Failed to load posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) => {
    const title = locale === 'en-US' && post.titleEn ? post.titleEn : post.title
    const excerpt = locale === 'en-US' && post.excerptEn ? post.excerptEn : post.excerpt

    const matchesSearch =
      !searchTerm ||
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTag = !selectedTag || post.tags.includes(selectedTag)

    return matchesSearch && matchesTag
  })

  return (
    <div className="flex flex-col items-center min-h-screen pb-4">
      <div className="w-full max-w-6xl px-6 py-12">
        {/* Header */}
        <AnimatedContent delay={0} duration={0.6}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-purple-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Blog
              </h1>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {locale === 'en-US'
                ? 'Articles about development, projects, and my journey as a developer'
                : 'Artigos sobre desenvolvimento, projetos e minha jornada como desenvolvedor'}
            </p>
          </div>
        </AnimatedContent>

        {/* Search and Filters */}
        <AnimatedContent delay={0.1} duration={0.5}>
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder={locale === 'en-US' ? 'Search posts...' : 'Buscar posts...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Tags */}
            {allTags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${
                    !selectedTag
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {locale === 'en-US' ? 'All' : 'Todos'}
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      selectedTag === tag
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </AnimatedContent>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {locale === 'en-US' ? 'Try again' : 'Tentar novamente'}
            </button>
          </div>
        ) : (
          <PostList posts={filteredPosts} />
        )}
      </div>

      <Footer />
    </div>
  )
}
