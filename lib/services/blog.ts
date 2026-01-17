import { Post, PostsResponse } from '@/lib/types/blog'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export async function getPosts(options?: {
  page?: number
  limit?: number
  published?: boolean
  featured?: boolean
  tag?: string
}): Promise<PostsResponse> {
  const params = new URLSearchParams()
  
  if (options?.page) params.set('page', options.page.toString())
  if (options?.limit) params.set('limit', options.limit.toString())
  if (options?.published !== undefined) params.set('published', options.published.toString())
  if (options?.featured !== undefined) params.set('featured', options.featured.toString())
  if (options?.tag) params.set('tag', options.tag)

  const url = `${API_URL}/posts${params.toString() ? `?${params.toString()}` : ''}`
  
  const response = await fetch(url, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/slug/${slug}`, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  return response.json()
}

export async function getFeaturedPosts(): Promise<PostsResponse> {
  return getPosts({ published: true, featured: true, limit: 3 })
}

export async function getRecentPosts(limit = 6): Promise<PostsResponse> {
  return getPosts({ published: true, limit })
}
