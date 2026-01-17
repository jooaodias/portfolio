import Fastify from 'fastify'
import cors from '@fastify/cors'
import { env } from './config/env.js'
import { registerRoutes } from './routes/index.js'

const app = Fastify({
  logger: true,
})

// Register plugins
await app.register(cors, {
  origin: env.CORS_ORIGIN.split(','),
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
})

// Register routes
await registerRoutes(app)

// Error handler
app.setErrorHandler((error, _request, reply) => {
  app.log.error(error)

  if (error instanceof Error && 'validation' in error) {
    return reply.status(400).send({
      error: 'Validation Error',
      details: (error as any).validation,
    })
  }

  if (error instanceof Error && 'code' in error && error.code === 'FST_ERR_NOT_FOUND') {
    return reply.status(404).send({ error: 'Route not found' })
  }

  return reply.status(500).send({ error: 'Internal Server Error' })
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
