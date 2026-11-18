'use client'

import { useI18n } from '@/lib/i18n/context'

interface AuthorSectionProps {
  authorName: string
}

export function AuthorSection({ authorName }: AuthorSectionProps) {
  const { t } = useI18n()

  return (
    <div className="bg-[#111216] border border-white/10 rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] text-xl font-bold shrink-0">
          {authorName.charAt(0)}
        </div>
        <div>
          <h3 className="text-white font-semibold text-base sm:text-lg">{authorName}</h3>
          <p className="text-zinc-400 text-sm">
            {t('home.roleBadge')}
          </p>
        </div>
      </div>
    </div>
  )
}
