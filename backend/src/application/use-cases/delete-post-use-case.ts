import { PostRepository } from '../../domain/repositories/post-repository'

export class DeletePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string): Promise<void> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new Error('Post não encontrado')
    }

    await this.postRepository.delete(id)
  }
}
