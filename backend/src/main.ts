import Fastify from 'fastify'
import cors from '@fastify/cors'
import { env } from './infra/config/env'

// Infrastructure
import { PrismaPostRepository } from './infra/database/prisma/prisma-post-repository'
import { closeRedisConnection } from './infra/cache'

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

// Routes, Middlewares & Swagger
import { registerPostRoutes } from './infra/http/routes'
import { registerErrorHandler } from './infra/http/middlewares'
import { registerSwagger } from './infra/http/swagger'

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

// Register Swagger
await registerSwagger(app)

// Register error handler
registerErrorHandler(app)

// Register routes
registerPostRoutes(app, postController)

// Health check
app.get('/health', {
  schema: {
    tags: ['Health'],
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          timestamp: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
  handler: async () => {
    return { status: 'ok', timestamp: new Date().toISOString() }
  },
})

async function gracefulShutdown(signal: string) {
  console.log(`\n🛑 Recebido ${signal}. Encerrando...`)
  
  try {
    await app.close()
    console.log('✅ Servidor Fastify fechado')
    
    await closeRedisConnection()
    console.log('✅ Conexão Redis fechada')
    
    process.exit(0)
  } catch (err) {
    console.error('❌ Erro ao encerrar:', err)
    process.exit(1)
  }
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
process.on('SIGINT', () => gracefulShutdown('SIGINT'))

// Start server
const start = async () => {
  try {
    await app.listen({
      port: parseInt(env.PORT),
      host: env.HOST,
    })
    console.log(`🚀 Server running at http://${env.HOST}:${env.PORT}`)
    
    if (env.REDIS_URL) {
      console.log('📦 Redis cache habilitado')
    } else {
      console.log('📦 Redis cache desabilitado (REDIS_URL não configurada)')
    }
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
