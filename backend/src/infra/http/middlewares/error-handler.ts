import { FastifyInstance, FastifyError, FastifyRequest, FastifyReply } from 'fastify'
import { ZodError } from 'zod'

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error: FastifyError, _: FastifyRequest, reply: FastifyReply) => {
    app.log.error(error)

    // Zod validation errors
    if (error instanceof ZodError) {
      return reply.status(400).send({
        error: 'Erro de validação',
        details: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      })
    }

    // Domain errors (custom errors thrown from use cases)
    if (error.message === 'Post não encontrado') {
      return reply.status(404).send({ error: error.message })
    }

    if (error.message === 'Já existe um post com este título') {
      return reply.status(409).send({ error: error.message })
    }

    // Fastify not found
    if (error.code === 'FST_ERR_NOT_FOUND') {
      return reply.status(404).send({ error: 'Rota não encontrada' })
    }

    // Generic error
    return reply.status(500).send({ error: 'Erro interno do servidor' })
  })
}
