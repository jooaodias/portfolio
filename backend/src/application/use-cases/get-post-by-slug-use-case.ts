import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'

export class GetPostBySlugUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(slug: string): Promise<Post | null> {
    return this.postRepository.findBySlug(slug)
  }
}
