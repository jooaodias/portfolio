import { FastifyInstance } from 'fastify'
import { PostController } from '../../controller/post-controller'
import { zodToSwagger, errorResponse, paginatedResponse } from '../swagger'
import {
  postResponseSchema,
  createPostValidator,
  updatePostValidator,
  listPostsQueryValidator,
  postIdParamsValidator,
  postSlugParamsValidator,
} from '../../../application/validators/post.validator'

export function registerPostRoutes(app: FastifyInstance, controller: PostController) {
  // List posts
  app.get('/api/posts', {
    schema: {
      tags: ['Posts'],
      querystring: zodToSwagger(listPostsQueryValidator),
      response: {
        200: paginatedResponse(postResponseSchema),
      },
    },
    handler: controller.list.bind(controller),
  })

  // Get post by slug
  app.get('/api/posts/slug/:slug', {
    schema: {
      tags: ['Posts'],
      params: zodToSwagger(postSlugParamsValidator),
      response: {
        200: zodToSwagger(postResponseSchema),
        404: errorResponse,
      },
    },
    handler: controller.getBySlug.bind(controller),
  })

  // Get post by ID
  app.get('/api/posts/:id', {
    schema: {
      tags: ['Posts'],
      params: zodToSwagger(postIdParamsValidator),
      response: {
        200: zodToSwagger(postResponseSchema),
        404: errorResponse,
      },
    },
    handler: controller.getById.bind(controller),
  })

  // Create post
  app.post('/api/posts', {
    schema: {
      tags: ['Posts'],
      body: zodToSwagger(createPostValidator),
      response: {
        201: zodToSwagger(postResponseSchema),
        400: errorResponse,
        409: errorResponse,
      },
    },
    handler: controller.create.bind(controller),
  })

  // Update post
  app.put('/api/posts/:id', {
    schema: {
      tags: ['Posts'],
      params: zodToSwagger(postIdParamsValidator),
      body: zodToSwagger(updatePostValidator),
      response: {
        200: zodToSwagger(postResponseSchema),
        400: errorResponse,
        404: errorResponse,
        409: errorResponse,
      },
    },
    handler: controller.update.bind(controller),
  })

  // Delete post
  app.delete('/api/posts/:id', {
    schema: {
      tags: ['Posts'],
      params: zodToSwagger(postIdParamsValidator),
      response: {
        204: { type: 'null' },
        404: errorResponse,
      },
    },
    handler: controller.delete.bind(controller),
  })

  // Toggle publish
  app.patch('/api/posts/:id/toggle-publish', {
    schema: {
      tags: ['Posts'],
      params: zodToSwagger(postIdParamsValidator),
      response: {
        200: zodToSwagger(postResponseSchema),
        404: errorResponse,
      },
    },
    handler: controller.togglePublish.bind(controller),
  })
}
