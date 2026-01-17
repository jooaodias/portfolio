'use client'

import { useI18n } from '@/lib/i18n/context'

export function BlogHeader() {
  const { locale } = useI18n()

  return (
    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
      {locale === 'en-US'
        ? 'Articles about development, projects, and my journey as a developer'
        : 'Artigos sobre desenvolvimento, projetos e minha jornada como desenvolvedor'}
    </p>
  )
}
