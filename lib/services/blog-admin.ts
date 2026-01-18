import { Post, PostsResponse } from '@/lib/types/blog'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export interface CreatePostData {
  title: string
  titleEn?: string
  excerpt: string
  excerptEn?: string
  content: string
  contentEn?: string
  coverImage?: string
  tags: string[]
  featured?: boolean
  authorName: string
}

export interface UpdatePostData extends Partial<CreatePostData> {}

export async function getAllPosts(options?: {
  page?: number
  limit?: number
}): Promise<PostsResponse> {
  const params = new URLSearchParams()
  
  if (options?.page) params.set('page', options.page.toString())
  if (options?.limit) params.set('limit', options.limit.toString())

  const url = `${API_URL}/posts${params.toString() ? `?${params.toString()}` : ''}`
  
  const response = await fetch(url, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

export async function getPostById(id: string): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  return response.json()
}

export async function createPost(data: CreatePostData): Promise<Post> {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to create post' }))
    throw new Error(error.message || 'Failed to create post')
  }

  return response.json()
}

export async function updatePost(id: string, data: UpdatePostData): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to update post' }))
    throw new Error(error.message || 'Failed to update post')
  }

  return response.json()
}

export async function deletePost(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to delete post' }))
    throw new Error(error.message || 'Failed to delete post')
  }
}

export async function togglePublish(id: string): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}/toggle-publish`, {
    method: 'PATCH',
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to toggle publish' }))
    throw new Error(error.message || 'Failed to toggle publish')
  }

  return response.json()
}
