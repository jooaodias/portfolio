import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'
import { UpdatePostDTO } from '../dtos'
import { PostAlreadyExistsError } from '../exceptions/post-already-exists'
import { PostNotFoundError } from '../exceptions/post-not-found'

export class UpdatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string, dto: UpdatePostDTO): Promise<Post> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new PostNotFoundError('Post not found with id: ' + id)
    }

    if (dto.title && dto.title !== post.title) {
      const newSlug = dto.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')

      const slugExists = await this.postRepository.existsBySlug(newSlug, id)
      if (slugExists) {
        throw new PostAlreadyExistsError('This slug already exists')
      }
    }

    post.update(dto)

    return this.postRepository.update(post)
  }
}
