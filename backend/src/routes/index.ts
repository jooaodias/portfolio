import { FastifyInstance } from 'fastify'
import { postRoutes } from './post.routes.js'

export async function registerRoutes(app: FastifyInstance) {
  // Health check
  app.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() }
  })

  // API routes
  app.register(postRoutes, { prefix: '/api' })
}
