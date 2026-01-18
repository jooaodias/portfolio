import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string().default('3001'),
  HOST: z.string().default('0.0.0.0'),
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  REDIS_URL: z.string().optional(), // Optional, if not provided, cache is disabled
})

export const env = envSchema.parse(process.env)
