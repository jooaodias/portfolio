
import { prisma } from './prisma-config'
import { Post } from '../../../domain/entities/post.entity'
import { PostMapper } from './post-mapper'
import { ListPostsFilters, PaginatedResult, PostRepository } from '../../../domain/repositories/post-repository'
import { Prisma } from '@prisma/client'
import { cacheService, CacheKeys } from '../../cache'

const CACHE_TTL = 300

export class PrismaPostRepository implements PostRepository {
  async findById(id: string): Promise<Post | null> {
    const cacheKey = CacheKeys.postById(id)
    
    const cached = await cacheService.get<ReturnType<typeof PostMapper.toDomain.prototype>>(cacheKey)
    if (cached) {
      console.log(`📦 Cache HIT: ${cacheKey}`)
      return this.reconstructPost(cached)
    }

    console.log(`📦 Cache MISS: ${cacheKey}`)
    const post = await prisma.post.findUnique({ where: { id } })
    
    if (!post) return null

    const domainPost = PostMapper.toDomain(post)
    
    await cacheService.set(cacheKey, post, CACHE_TTL)
    
    return domainPost
  }

  async findBySlug(slug: string): Promise<Post | null> {
    const cacheKey = CacheKeys.postBySlug(slug)
    
    const cached = await cacheService.get<ReturnType<typeof PostMapper.toDomain.prototype>>(cacheKey)
    if (cached) {
      console.log(`📦 Cache HIT: ${cacheKey}`)
      return this.reconstructPost(cached)
    }

    console.log(`📦 Cache MISS: ${cacheKey}`)
    const post = await prisma.post.findUnique({ where: { slug } })
    
    if (!post) return null

    const domainPost = PostMapper.toDomain(post)
    await cacheService.set(cacheKey, post, CACHE_TTL)
    
    return domainPost
  }

  async findAll(filters: ListPostsFilters, page: number, limit: number): Promise<PaginatedResult<Post>> {
    const cacheKey = CacheKeys.postsList({ ...filters, page, limit })
    
    const cached = await cacheService.get<{ posts: any[]; total: number }>(cacheKey)
    if (cached) {
      console.log(`📦 Cache HIT: ${cacheKey}`)
      return {
        data: cached.posts.map((p) => PostMapper.toDomain(p)),
        total: cached.total,
      }
    }

    console.log(`📦 Cache MISS: ${cacheKey}`)
    
    const where: Prisma.PostWhereInput = {}
    if (filters.published !== undefined) where.published = filters.published
    if (filters.featured !== undefined) where.featured = filters.featured
    if (filters.tag) where.tags = { contains: filters.tag }
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.post.count({ where }),
    ])

    await cacheService.set(cacheKey, { posts, total }, CACHE_TTL)

    return {
      data: posts.map(PostMapper.toDomain),
      total,
    }
  }

  async save(post: Post): Promise<Post> {
    const data = PostMapper.toPersistence(post)
    const created = await prisma.post.create({ data })
    
    await this.invalidateAllPostsCache()
    
    return PostMapper.toDomain(created)
  }


  async update(post: Post): Promise<Post> {
    const data = PostMapper.toPersistence(post)
    const updated = await prisma.post.update({
      where: { id: post.id },
      data,
    })
    
    await this.invalidateAllPostsCache()
    
    return PostMapper.toDomain(updated)
  }

  async delete(id: string): Promise<void> {
    await prisma.post.delete({ where: { id } })
        await this.invalidateAllPostsCache()
  }

  async existsBySlug(slug: string, excludeId?: string): Promise<boolean> {
    const where: Prisma.PostWhereInput = { slug }
    if (excludeId) {
      where.id = { not: excludeId }
    }
    const count = await prisma.post.count({ where })
    return count > 0
  }

  
  private async invalidateAllPostsCache(): Promise<void> {
    console.log('📦 Cache INVALIDATE: posts:*')
    await cacheService.deleteByPattern(CacheKeys.allPosts())
  }

  
  private reconstructPost(cached: any): Post {
    return PostMapper.toDomain(cached)
  }
}
