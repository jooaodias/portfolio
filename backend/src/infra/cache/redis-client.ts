

import Redis from 'ioredis'
import { env } from '../config/env'

let redisClient: Redis | null = null

let hasLoggedConnection = false
let hasLoggedError = false


export function getRedisClient(): Redis | null {
  if (!env.REDIS_URL) {
    return null
  }

  if (!redisClient) {
    redisClient = new Redis(env.REDIS_URL, {
      maxRetriesPerRequest: 3,
    
      lazyConnect: true,
      
      retryStrategy: (times) => {
        if (times > 5) {
          console.error('📦 Redis: Máximo de tentativas atingido. Cache desabilitado.')
          return null
        }
        return Math.min(times * 100, 2000)
      },
      
      tls: env.REDIS_URL.startsWith('rediss://') ? {} : undefined,
    })

    redisClient.on('ready', () => {
      if (!hasLoggedConnection) {
        console.log('📦 Redis: Conectado com sucesso')
        hasLoggedConnection = true
      }
    })

    redisClient.on('error', (err) => {
      if (!hasLoggedError) {
        console.error('📦 Redis: Erro de conexão -', err.message)
        hasLoggedError = true
      }
    })
  }

  return redisClient
}


export async function closeRedisConnection(): Promise<void> {
  if (redisClient) {
    await redisClient.quit()
    redisClient = null
  }
}
