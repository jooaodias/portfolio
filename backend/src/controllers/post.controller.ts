import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '../config/database.js'
import { generateSlug, calculateReadingTime } from '../utils/slug.js'
import {
  CreatePostInput,
  UpdatePostInput,
  ListPostsQuery,
  createPostSchema,
  updatePostSchema,
  listPostsQuerySchema,
  postParamsSchema,
  postSlugParamsSchema,
} from '../models/post.schema.js'

export async function listPosts(
  request: FastifyRequest<{ Querystring: ListPostsQuery }>,
  reply: FastifyReply
) {
  const query = listPostsQuerySchema.parse(request.query)
  const { page, limit, published, featured, tag } = query

  const where: {
    published?: boolean
    featured?: boolean
    tags?: { contains: string }
  } = {}

  if (published !== undefined) {
    where.published = published
  }

  if (featured !== undefined) {
    where.featured = featured
  }

  if (tag) {
    where.tags = { contains: tag }
  }

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        excerpt: true,
        excerptEn: true,
        coverImage: true,
        tags: true,
        published: true,
        featured: true,
        authorName: true,
        readingTime: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.post.count({ where }),
  ])

  const formattedPosts = posts.map((post) => ({
    ...post,
    tags: JSON.parse(post.tags),
  }))

  return reply.send({
    data: formattedPosts,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  })
}

export async function getPostBySlug(
  request: FastifyRequest<{ Params: { slug: string } }>,
  reply: FastifyReply
) {
  const { slug } = postSlugParamsSchema.parse(request.params)

  const post = await prisma.post.findUnique({
    where: { slug },
  })

  if (!post) {
    return reply.status(404).send({ error: 'Post não encontrado' })
  }

  return reply.send({
    ...post,
    tags: JSON.parse(post.tags),
  })
}

export async function getPostById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = postParamsSchema.parse(request.params)

  const post = await prisma.post.findUnique({
    where: { id },
  })

  if (!post) {
    return reply.status(404).send({ error: 'Post não encontrado' })
  }

  return reply.send({
    ...post,
    tags: JSON.parse(post.tags),
  })
}

export async function createPost(
  request: FastifyRequest<{ Body: CreatePostInput }>,
  reply: FastifyReply
) {
  const body = createPostSchema.parse(request.body)
  
  const slug = generateSlug(body.title)
  const readingTime = calculateReadingTime(body.content)

  // Check if slug already exists
  const existingPost = await prisma.post.findUnique({ where: { slug } })
  if (existingPost) {
    return reply.status(409).send({ error: 'Já existe um post com este título' })
  }

  const post = await prisma.post.create({
    data: {
      ...body,
      slug,
      readingTime,
      tags: JSON.stringify(body.tags),
    },
  })

  return reply.status(201).send({
    ...post,
    tags: JSON.parse(post.tags),
  })
}

export async function updatePost(
  request: FastifyRequest<{ Params: { id: string }; Body: UpdatePostInput }>,
  reply: FastifyReply
) {
  const { id } = postParamsSchema.parse(request.params)
  const body = updatePostSchema.parse(request.body)

  const existingPost = await prisma.post.findUnique({ where: { id } })
  if (!existingPost) {
    return reply.status(404).send({ error: 'Post não encontrado' })
  }

  const updateData: Record<string, unknown> = { ...body }

  // Update slug if title changed
  if (body.title && body.title !== existingPost.title) {
    const newSlug = generateSlug(body.title)
    const slugExists = await prisma.post.findFirst({
      where: { slug: newSlug, id: { not: id } },
    })
    if (slugExists) {
      return reply.status(409).send({ error: 'Já existe um post com este título' })
    }
    updateData.slug = newSlug
  }

  // Update reading time if content changed
  if (body.content) {
    updateData.readingTime = calculateReadingTime(body.content)
  }

  // Convert tags to JSON string
  if (body.tags) {
    updateData.tags = JSON.stringify(body.tags)
  }

  const post = await prisma.post.update({
    where: { id },
    data: updateData,
  })

  return reply.send({
    ...post,
    tags: JSON.parse(post.tags),
  })
}

export async function deletePost(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = postParamsSchema.parse(request.params)

  const existingPost = await prisma.post.findUnique({ where: { id } })
  if (!existingPost) {
    return reply.status(404).send({ error: 'Post não encontrado' })
  }

  await prisma.post.delete({ where: { id } })

  return reply.status(204).send()
}

export async function togglePublish(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = postParamsSchema.parse(request.params)

  const existingPost = await prisma.post.findUnique({ where: { id } })
  if (!existingPost) {
    return reply.status(404).send({ error: 'Post não encontrado' })
  }

  const post = await prisma.post.update({
    where: { id },
    data: { published: !existingPost.published },
  })

  return reply.send({
    ...post,
    tags: JSON.parse(post.tags),
  })
}
