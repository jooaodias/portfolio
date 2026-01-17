import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'

export class GetPostByIdUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string): Promise<Post | null> {
    return this.postRepository.findById(id)
  }
}
