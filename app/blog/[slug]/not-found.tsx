'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { Footer } from '@/lib/components/footer/footer'

export default function NotFound() {
  const { locale } = useI18n()

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow w-full max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {locale === 'en-US' ? 'Post not found' : 'Post não encontrado'}
        </h1>
        <p className="text-gray-400 mb-8">
          {locale === 'en-US'
            ? "The post you're looking for doesn't exist or has been removed."
            : 'O post que você procura não existe ou foi removido.'}
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {locale === 'en-US' ? 'Back to Blog' : 'Voltar ao Blog'}
        </Link>
      </div>
      <Footer />
    </div>
  )
}
