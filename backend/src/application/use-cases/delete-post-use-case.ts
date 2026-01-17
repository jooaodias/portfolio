import { PostRepository } from '../../domain/repositories/post-repository'
import { PostNotFoundError } from '../exceptions/post-not-found'

export class DeletePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string): Promise<void> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new PostNotFoundError('Post not found with id: ' + id)
    }

    await this.postRepository.delete(id)
  }
}
