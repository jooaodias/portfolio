import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(3, 'Título deve ter no mínimo 3 caracteres'),
  titleEn: z.string().optional(),
  excerpt: z.string().min(10, 'Resumo deve ter no mínimo 10 caracteres'),
  excerptEn: z.string().optional(),
  content: z.string().min(50, 'Conteúdo deve ter no mínimo 50 caracteres'),
  contentEn: z.string().optional(),
  coverImage: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
})

export const updatePostSchema = createPostSchema.partial()

export const postParamsSchema = z.object({
  id: z.string().uuid(),
})

export const postSlugParamsSchema = z.object({
  slug: z.string(),
})

export const listPostsQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(10),
  published: z.coerce.boolean().optional(),
  featured: z.coerce.boolean().optional(),
  tag: z.string().optional(),
})

export type CreatePostInput = z.infer<typeof createPostSchema>
export type UpdatePostInput = z.infer<typeof updatePostSchema>
export type ListPostsQuery = z.infer<typeof listPostsQuerySchema>
