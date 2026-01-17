export interface Post {
  id: string
  slug: string
  title: string
  titleEn?: string
  excerpt: string
  excerptEn?: string
  content: string
  contentEn?: string
  coverImage?: string
  tags: string[]
  published: boolean
  featured: boolean
  authorName: string
  readingTime?: number
  createdAt: string
  updatedAt: string
}

export interface PostListItem {
  id: string
  slug: string
  title: string
  titleEn?: string
  excerpt: string
  excerptEn?: string
  coverImage?: string
  tags: string[]
  published: boolean
  featured: boolean
  authorName: string
  readingTime?: number
  createdAt: string
  updatedAt: string
}

export interface PostsResponse {
  data: PostListItem[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
