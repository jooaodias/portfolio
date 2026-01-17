import { FastifyRequest, FastifyReply } from 'fastify'
import {
  CreatePostUseCase,
  ListPostsUseCase,
  GetPostByIdUseCase,
  GetPostBySlugUseCase,
  UpdatePostUseCase,
  DeletePostUseCase,
  TogglePublishUseCase,
} from '../../application/use-cases'
import {
  createPostValidator,
  updatePostValidator,
  listPostsQueryValidator,
  postIdParamsValidator,
  postSlugParamsValidator,
} from '../../application/validators/post.validator'

interface PostControllerDeps {
  createPostUseCase: CreatePostUseCase
  listPostsUseCase: ListPostsUseCase
  getPostByIdUseCase: GetPostByIdUseCase
  getPostBySlugUseCase: GetPostBySlugUseCase
  updatePostUseCase: UpdatePostUseCase
  deletePostUseCase: DeletePostUseCase
  togglePublishUseCase: TogglePublishUseCase
}

export class PostController {
  constructor(private readonly deps: PostControllerDeps) {}

  async list(request: FastifyRequest, reply: FastifyReply) {
    const query = listPostsQueryValidator.parse(request.query)
    const result = await this.deps.listPostsUseCase.execute(query)
    return reply.send(result)
  }

  async getById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = postIdParamsValidator.parse(request.params)
    const post = await this.deps.getPostByIdUseCase.execute(id)

    if (!post) {
      return reply.status(404).send({ error: 'Post não encontrado' })
    }

    return reply.send(post.toJSON())
  }

  async getBySlug(request: FastifyRequest, reply: FastifyReply) {
    const { slug } = postSlugParamsValidator.parse(request.params)
    const post = await this.deps.getPostBySlugUseCase.execute(slug)

    if (!post) {
      return reply.status(404).send({ error: 'Post não encontrado' })
    }

    return reply.send(post.toJSON())
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const dto = createPostValidator.parse(request.body)
    const fixedDto = {
      ...dto,
      titleEn: dto.titleEn ?? "",
      excerptEn: dto.excerptEn ?? "",
      contentEn: dto.contentEn ?? "",
    }
    const post = await this.deps.createPostUseCase.execute(fixedDto)
    return reply.status(201).send(post.toJSON())
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = postIdParamsValidator.parse(request.params)
    const dto = updatePostValidator.parse(request.body)
    const post = await this.deps.updatePostUseCase.execute(id, dto)
    return reply.send(post.toJSON())
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = postIdParamsValidator.parse(request.params)
    await this.deps.deletePostUseCase.execute(id)
    return reply.status(204).send()
  }

  async togglePublish(request: FastifyRequest, reply: FastifyReply) {
    const { id } = postIdParamsValidator.parse(request.params)
    const post = await this.deps.togglePublishUseCase.execute(id)
    return reply.send(post.toJSON())
  }
}
