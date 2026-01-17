import { Post } from '../../domain/entities/post.entity'
import { PostRepository } from '../../domain/repositories/post-repository'
import { ListPostsDTO, ListPostsResponseDTO } from '../dtos'

export class ListPostsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(dto: ListPostsDTO): Promise<ListPostsResponseDTO<ReturnType<Post['toJSON']>>> {
    const { page, limit, published, featured, tag } = dto

    const result = await this.postRepository.findAll(
      { published, featured, tag },
      page,
      limit
    )

    return {
      data: result.data.map(post => post.toJSON()),
      meta: {
        page,
        limit,
        total: result.total,
        totalPages: Math.ceil(result.total / limit),
      },
    }
  }
}
