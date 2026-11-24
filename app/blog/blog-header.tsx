'use client'

import { useI18n } from '@/lib/i18n/context'

export function BlogHeader() {
  const { t } = useI18n()

  return (
    <p className="text-ink-muted text-sm sm:text-base max-w-2xl leading-relaxed">
      {t('blog.description')}
    </p>
  )
}
