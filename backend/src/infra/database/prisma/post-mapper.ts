import { Post as PrismaPost } from '@prisma/client'
import { Post } from '../../../domain/entities/post.entity'
import { Slug } from '../../../domain/value-objects/slug.vo'
import { ReadingTime } from '../../../domain/value-objects/reading-time.vo'

export class PostMapper {
  static toDomain(raw: PrismaPost): Post {
    return Post.restore({
      id: raw.id,
      slug: Slug.restore(raw.slug),
      title: raw.title,
      titleEn: raw.titleEn ?? undefined,
      excerpt: raw.excerpt,
      excerptEn: raw.excerptEn ?? undefined,
      content: raw.content,
      contentEn: raw.contentEn ?? undefined,
      coverImage: raw.coverImage ?? undefined,
      tags: JSON.parse(raw.tags),
      published: raw.published,
      featured: raw.featured,
      authorName: raw.authorName,
      readingTime: ReadingTime.restore(raw.readingTime ?? 1),
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    })
  }

  static toPersistence(post: Post) {
    return {
      slug: post.slug.value,
      title: post.title,
      titleEn: post.titleEn,
      excerpt: post.excerpt,
      excerptEn: post.excerptEn,
      content: post.content,
      contentEn: post.contentEn,
      coverImage: post.coverImage,
      tags: JSON.stringify(post.tags),
      published: post.published,
      featured: post.featured,
      authorName: post.authorName,
      readingTime: post.readingTime.minutes,
    }
  }
}
