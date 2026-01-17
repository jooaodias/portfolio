import { prisma } from './prisma-config'
import { Post } from '../../../domain/entities/post.entity'
import { PostMapper } from './post-mapper'
import { ListPostsFilters, PaginatedResult, PostRepository } from '../../../domain/repositories/post-repository'
import { Prisma } from '@prisma/client'

export class PrismaPostRepository implements PostRepository {
  async findById(id: string): Promise<Post | null> {
    const post = await prisma.post.findUnique({ where: { id } })
    return post ? PostMapper.toDomain(post) : null
  }

  async findBySlug(slug: string): Promise<Post | null> {
    const post = await prisma.post.findUnique({ where: { slug } })
    return post ? PostMapper.toDomain(post) : null
  }

  async findAll(filters: ListPostsFilters, page: number, limit: number): Promise<PaginatedResult<Post>> {
    const where: Prisma.PostWhereInput = {}

    if (filters.published !== undefined) {
      where.published = filters.published
    }

    if (filters.featured !== undefined) {
      where.featured = filters.featured
    }

    if (filters.tag) {
      where.tags = { contains: filters.tag }
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.post.count({ where }),
    ])

    return {
      data: posts.map(PostMapper.toDomain),
      total,
    }
  }

  async save(post: Post): Promise<Post> {
    const data = PostMapper.toPersistence(post)
    const created = await prisma.post.create({ data })
    return PostMapper.toDomain(created)
  }

  async update(post: Post): Promise<Post> {
    const data = PostMapper.toPersistence(post)
    const updated = await prisma.post.update({
      where: { id: post.id },
      data,
    })
    return PostMapper.toDomain(updated)
  }

  async delete(id: string): Promise<void> {
    await prisma.post.delete({ where: { id } })
  }

  async existsBySlug(slug: string, excludeId?: string): Promise<boolean> {
    const where: Prisma.PostWhereInput = { slug }
    if (excludeId) {
      where.id = { not: excludeId }
    }
    const count = await prisma.post.count({ where })
    return count > 0
  }
}
