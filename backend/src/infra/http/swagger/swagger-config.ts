import { FastifyInstance } from 'fastify'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

export async function registerSwagger(app: FastifyInstance) {
  await app.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Portfolio Blog API',
        description: 'API REST para o blog do portfólio',
        version: '1.0.0',
        contact: {
          name: 'João Aleixo',
          url: 'https://portfolio-joao-dias.vercel.app/',
        },
      },
      tags: [
        { name: 'Posts', description: 'Operações relacionadas a posts do blog' },
        { name: 'Health', description: 'Health check da API' },
      ],
    },
  })

  await app.register(swaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  })
}
