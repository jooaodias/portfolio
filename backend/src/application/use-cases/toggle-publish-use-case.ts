import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'

export class TogglePublishUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new Error('Post não encontrado')
    }

    post.togglePublish()

    return this.postRepository.update(post)
  }
}
