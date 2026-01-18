import { getRedisClient } from './redis-client'

export interface CacheService {
  get<T>(key: string): Promise<T | null>
  set<T>(key: string, value: T, ttlSeconds?: number): Promise<void>
  delete(key: string): Promise<void>
  deleteByPattern(pattern: string): Promise<void>
}

export class RedisCacheService implements CacheService {
  private defaultTTL = 300

  async get<T>(key: string): Promise<T | null> {
    const client = getRedisClient()
    if (!client) return null

    try {
      const cached = await client.get(key)
      
      if (!cached) {
        return null
      }

      return JSON.parse(cached) as T
    } catch (error) {
      console.error(`Cache GET error for key ${key}:`, error)
      return null
    }
  }


  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const client = getRedisClient()
    if (!client) return

    try {
      const serialized = JSON.stringify(value)
      const ttl = ttlSeconds ?? this.defaultTTL

      await client.set(key, serialized, 'EX', ttl)
    } catch (error) {
      console.error(`Cache SET error for key ${key}:`, error)
    }
  }

  async delete(key: string): Promise<void> {
    const client = getRedisClient()
    if (!client) return

    try {
      await client.del(key)
    } catch (error) {
      console.error(`Cache DELETE error for key ${key}:`, error)
    }
  }

  async deleteByPattern(pattern: string): Promise<void> {
    const client = getRedisClient()
    if (!client) return

    try {
      let cursor = '0'
      do {
        const [nextCursor, keys] = await client.scan(cursor, 'MATCH', pattern, 'COUNT', 100)
        cursor = nextCursor

        if (keys.length > 0) {
          await client.del(...keys)
        }
      } while (cursor !== '0')
    } catch (error) {
      console.error(`Cache DELETE PATTERN error for pattern ${pattern}:`, error)
    }
  }
}

export const cacheService = new RedisCacheService()
