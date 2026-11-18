'use client'

import { Share2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { toast } from 'react-toastify'

export function ShareButton() {
  const { locale, t } = useI18n()

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success(locale === 'en-US' ? 'Link copied!' : 'Link copiado!')
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-[#38bdf8] hover:border-[#38bdf8]/50 transition-colors ml-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
    >
      <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
      {t('blog.share')}
    </button>
  )
}
