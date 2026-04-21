export interface HealthStatus {
  status: 'ok' | 'error'
  timestamp: string
}

export interface HealthCheckResult {
  online: boolean
  data?: HealthStatus
  error?: string
}

function getHealthUrl(): string {
  const apiUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api').replace(/\/api$/, '')

  return `${apiUrl}/health`
}

export async function getHealth(): Promise<HealthCheckResult> {
  try {
    const response = await fetch(getHealthUrl(), {
      cache: 'no-store',
    })

    if (!response.ok) {
      return { online: false, error: `HTTP ${response.status}` }
    }

    const data: HealthStatus = await response.json()
    return { online: true, data }
  } catch (err) {
    return {
      online: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }
}
