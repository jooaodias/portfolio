import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'
import { PostNotFoundError } from '../exceptions/post-not-found'

export class TogglePublishUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new PostNotFoundError('Post not found with id: ' + id)
    }

    post.togglePublish()

    return this.postRepository.update(post)
  }
}
