import { FastifyInstance } from 'fastify'
import { PostController } from '../../controller/post-controller'

export function registerPostRoutes(app: FastifyInstance, controller: PostController) {
  // Public routes
  app.get('/api/posts', controller.list.bind(controller))
  app.get('/api/posts/slug/:slug', controller.getBySlug.bind(controller))
  app.get('/api/posts/:id', controller.getById.bind(controller))

  // Admin routes (can add auth middleware later)
  app.post('/api/posts', controller.create.bind(controller))
  app.put('/api/posts/:id', controller.update.bind(controller))
  app.delete('/api/posts/:id', controller.delete.bind(controller))
  app.patch('/api/posts/:id/toggle-publish', controller.togglePublish.bind(controller))
}
