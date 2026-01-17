'use client'

import { Share2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { toast } from 'react-toastify'

export function ShareButton() {
  const { locale } = useI18n()

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success(locale === 'en-US' ? 'Link copied!' : 'Link copiado!')
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors ml-auto cursor-pointer"
    >
      <Share2 className="w-4 h-4" />
      {locale === 'en-US' ? 'Share' : 'Compartilhar'}
    </button>
  )
}
