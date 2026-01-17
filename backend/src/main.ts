import Fastify from 'fastify'
import cors from '@fastify/cors'
import { env } from './infra/config/env'

// Infrastructure
import { PrismaPostRepository } from './infra/database/prisma/prisma-post-repository'

// Use Cases
import {
  CreatePostUseCase,
  ListPostsUseCase,
  GetPostByIdUseCase,
  GetPostBySlugUseCase,
  UpdatePostUseCase,
  DeletePostUseCase,
  TogglePublishUseCase,
} from './application/use-cases'

// Controller
import { PostController } from './infra/controller/post-controller'

// Routes & Middlewares
import { registerPostRoutes } from './infra/http/routes'
import { registerErrorHandler } from './infra/http/middlewares'

// =============================================================================
// Dependency Injection Container
// =============================================================================

// Repositories
const postRepository = new PrismaPostRepository()

// Use Cases
const createPostUseCase = new CreatePostUseCase(postRepository)
const listPostsUseCase = new ListPostsUseCase(postRepository)
const getPostByIdUseCase = new GetPostByIdUseCase(postRepository)
const getPostBySlugUseCase = new GetPostBySlugUseCase(postRepository)
const updatePostUseCase = new UpdatePostUseCase(postRepository)
const deletePostUseCase = new DeletePostUseCase(postRepository)
const togglePublishUseCase = new TogglePublishUseCase(postRepository)

// Controllers
const postController = new PostController({
  createPostUseCase,
  listPostsUseCase,
  getPostByIdUseCase,
  getPostBySlugUseCase,
  updatePostUseCase,
  deletePostUseCase,
  togglePublishUseCase,
})

const app = Fastify({ logger: true })

// Register plugins
await app.register(cors, {
  origin: env.CORS_ORIGIN.split(','),
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
})

// Register error handler
registerErrorHandler(app)

// Register routes
registerPostRoutes(app, postController)

// Health check
app.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() }
})

// Start server
const start = async () => {
  try {
    await app.listen({
      port: parseInt(env.PORT),
      host: env.HOST,
    })
    console.log(`🚀 Server running at http://${env.HOST}:${env.PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
