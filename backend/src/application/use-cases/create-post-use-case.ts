import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'
import { CreatePostDTO } from '../dtos'
import { PostAlreadyExistsError } from '../exceptions/post-already-exists'

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(dto: CreatePostDTO): Promise<Post> {
    const post = Post.create({
      title: dto.title,
      titleEn: dto.titleEn,
      excerpt: dto.excerpt ?? '',
      excerptEn: dto.excerptEn,
      content: dto.content,
      contentEn: dto.contentEn,
      coverImage: dto.coverImage,
      tags: dto.tags ?? [],
      published: dto.published ?? false,
      featured: dto.featured ?? false,
      authorName: dto.authorName ?? 'João Aleixo',
    })

    const slugExists = await this.postRepository.existsBySlug(post.slug.value)
    if (slugExists) {
      throw new PostAlreadyExistsError('This slug already exists')
    }

    return this.postRepository.save(post)
  }
}