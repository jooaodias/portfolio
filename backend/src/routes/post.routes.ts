import { FastifyInstance } from 'fastify'
import {
  listPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  togglePublish,
} from '../controllers/post.controller.js'

export async function postRoutes(app: FastifyInstance) {
  // Public routes
  app.get('/posts', listPosts)
  app.get('/posts/slug/:slug', getPostBySlug)
  app.get('/posts/:id', getPostById)

  // Admin routes (can add auth later)
  app.post('/posts', createPost)
  app.put('/posts/:id', updatePost)
  app.delete('/posts/:id', deletePost)
  app.patch('/posts/:id/toggle-publish', togglePublish)
}
