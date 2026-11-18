'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export function BackLink() {
  const { t } = useI18n()

  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#111216] border border-white/10 text-sm font-medium text-zinc-300 hover:text-white hover:border-[#38bdf8]/50 transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
    >
      <ArrowLeft className="w-4 h-4 text-[#38bdf8]" aria-hidden="true" />
      {t('blog.backToBlog')}
    </Link>
  )
}
