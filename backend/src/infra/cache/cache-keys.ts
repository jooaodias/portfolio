interface ListPostsFilters {
  page: number
  limit: number
  published?: boolean
  featured?: boolean
  tag?: string
}

export const CacheKeys = {
  postsList: (filters: ListPostsFilters): string => {
    const parts = ['posts', 'list']
    
    parts.push(`page=${filters.page}`)
    parts.push(`limit=${filters.limit}`)
    
    if (filters.published !== undefined) {
      parts.push(`published=${filters.published}`)
    }
    if (filters.featured !== undefined) {
      parts.push(`featured=${filters.featured}`)
    }
    if (filters.tag) {
      parts.push(`tag=${filters.tag}`)
    }
    
    return parts.join(':')
  },
  postById: (id: string): string => `posts:id:${id}`,
  postBySlug: (slug: string): string => `posts:slug:${slug}`,
  allPosts: (): string => 'posts:*',
}
