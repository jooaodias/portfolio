import { z } from 'zod'

export const createPostValidator = z.object({
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
  authorName: z.string().optional(),
})

export const updatePostValidator = z.object({
  title: z.string().min(3, 'Título deve ter no mínimo 3 caracteres').optional(),
  titleEn: z.string().optional(),
  excerpt: z.string().min(10, 'Resumo deve ter no mínimo 10 caracteres').optional(),
  excerptEn: z.string().optional(),
  content: z.string().min(50, 'Conteúdo deve ter no mínimo 50 caracteres').optional(),
  contentEn: z.string().optional(),
  coverImage: z.string().url().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  authorName: z.string().optional(),
})

export const listPostsQueryValidator = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(10),
  published: z.coerce.boolean().optional(),
  featured: z.coerce.boolean().optional(),
  tag: z.string().optional(),
})

export const postIdParamsValidator = z.object({
  id: z.string().uuid('ID inválido'),
})

export const postSlugParamsValidator = z.object({
  slug: z.string().min(1, 'Slug é obrigatório'),
})
