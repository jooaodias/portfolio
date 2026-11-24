'use client'

import { useI18n } from '@/lib/i18n/context'

interface AuthorSectionProps {
  authorName: string
}

export function AuthorSection({ authorName }: AuthorSectionProps) {
  const { t } = useI18n()

  return (
    <div className="bg-elevated/50 border border-border-subtle rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent-soft border border-accent/30 flex items-center justify-center text-accent text-xl font-bold shrink-0">
          {authorName.charAt(0)}
        </div>
        <div>
          <h3 className="text-ink font-semibold text-base sm:text-lg">{authorName}</h3>
          <p className="text-ink-muted text-sm">
            {t('home.roleBadge')}
          </p>
        </div>
      </div>
    </div>
  )
}
