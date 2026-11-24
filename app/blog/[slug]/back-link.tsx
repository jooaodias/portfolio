'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export function BackLink() {
  const { t } = useI18n()

  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-elevated border border-border-subtle text-sm font-medium text-ink-secondary hover:text-ink hover:border-border-hover transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4 text-accent" aria-hidden="true" />
      {t('blog.backToBlog')}
    </Link>
  )
}
