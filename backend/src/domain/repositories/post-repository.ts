import { Post } from '../entities/post.entity'

export interface ListPostsFilters {
  published?: boolean
  featured?: boolean
  tag?: string
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
}

export interface PostRepository {
  findById(id: string): Promise<Post | null>
  findBySlug(slug: string): Promise<Post | null>
  findAll(filters: ListPostsFilters, page: number, limit: number): Promise<PaginatedResult<Post>>
  save(post: Post): Promise<Post>
  update(post: Post): Promise<Post>
  delete(id: string): Promise<void>
  existsBySlug(slug: string, excludeId?: string): Promise<boolean>
}