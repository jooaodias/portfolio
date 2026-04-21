import { Metadata } from 'next'
import { getHealth } from '@/lib/services/health'
import { Footer } from '@/lib/components/footer/footer'
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react'
import { absoluteUrl, SITE_TITLE_TEMPLATE } from '@/lib/seo/site'

const STATUS_DESCRIPTION =
  'Painel interno com disponibilidade da API do portfólio em tempo real.'

export const metadata: Metadata = {
  title: 'Status',
  description: STATUS_DESCRIPTION,
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl('/status') },
  openGraph: {
    title: SITE_TITLE_TEMPLATE.replace('%s', 'Status'),
    description: STATUS_DESCRIPTION,
    url: absoluteUrl('/status'),
  },
}

export const dynamic = 'force-dynamic'

function formatTimestamp(iso: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(iso))
}

export default async function StatusPage() {
  const result = await getHealth()
  const checkedAt = new Date().toISOString()

  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow w-full max-w-2xl mx-auto px-6 py-16 flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Activity className="w-7 h-7 text-purple-400" />
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
            Status
          </h1>
        </div>

        <p className="text-gray-400 text-sm -mt-4">
          Disponibilidade dos serviços em tempo real.
        </p>

        {/* API status card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                API
              </p>
              <p className="text-xs text-gray-500 mt-0.5">portfolio-blog-api</p>
            </div>

            {result.online ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle className="w-4 h-4" />
                Online
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
                <XCircle className="w-4 h-4" />
                Offline
              </span>
            )}
          </div>

          <div className="border-t border-gray-800" />

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5" />
                Verificado em
              </dt>
              <dd className="text-gray-200 font-mono">{formatTimestamp(checkedAt)}</dd>
            </div>

            {result.data?.timestamp && (
              <div>
                <dt className="text-gray-500 mb-1">Servidor reportou em</dt>
                <dd className="text-gray-200 font-mono">
                  {formatTimestamp(result.data.timestamp)}
                </dd>
              </div>
            )}

            {result.error && (
              <div className="sm:col-span-2">
                <dt className="text-gray-500 mb-1">Detalhe do erro</dt>
                <dd className="text-red-400 font-mono break-all">{result.error}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* Global status summary */}
        <div
          className={`rounded-xl border px-5 py-4 text-sm font-medium flex items-center gap-3 ${
            result.online
              ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400'
              : 'border-red-500/20 bg-red-500/5 text-red-400'
          }`}
        >
          {result.online ? (
            <>
              <CheckCircle className="w-5 h-5 shrink-0" />
              Todos os sistemas operacionais.
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5 shrink-0" />
              Serviço indisponível no momento. Tente novamente em instantes.
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
