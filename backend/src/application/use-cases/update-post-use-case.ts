import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'
import { UpdatePostDTO } from '../dtos'

export class UpdatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string, dto: UpdatePostDTO): Promise<Post> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new Error('Post não encontrado')
    }

    // Se está atualizando o título, verificar se o novo slug já existe
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
        throw new Error('Já existe um post com este título')
      }
    }

    post.update(dto)

    return this.postRepository.update(post)
  }
}
