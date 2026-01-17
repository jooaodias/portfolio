'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export function BackLink() {
  const { locale } = useI18n()

  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8"
    >
      <ArrowLeft className="w-4 h-4" />
      {locale === 'en-US' ? 'Back to Blog' : 'Voltar ao Blog'}
    </Link>
  )
}
