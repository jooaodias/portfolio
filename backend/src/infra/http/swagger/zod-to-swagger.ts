import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'


export function zodToSwagger<T extends z.ZodTypeAny>(schema: T) {
  const jsonSchema = zodToJsonSchema(schema, { target: 'openApi3' })
  
  if ('$schema' in jsonSchema) {
    delete (jsonSchema as Record<string, unknown>)['$schema']
  }
  
  return jsonSchema
}

export const errorResponse = {
  type: 'object',
  properties: {
    error: { type: 'string' },
    details: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          field: { type: 'string' },
          message: { type: 'string' },
        },
      },
    },
  },
} as const


export function paginatedResponse<T extends z.ZodTypeAny>(itemSchema: T) {
  return {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: zodToSwagger(itemSchema),
      },
      meta: {
        type: 'object',
        properties: {
          page: { type: 'number' },
          limit: { type: 'number' },
          total: { type: 'number' },
          totalPages: { type: 'number' },
        },
      },
    },
  } as const
}
