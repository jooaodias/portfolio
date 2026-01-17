'use client'

import { useI18n } from '@/lib/i18n/context'

interface AuthorSectionProps {
  authorName: string
}

export function AuthorSection({ authorName }: AuthorSectionProps) {
  const { locale } = useI18n()

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
          {authorName.charAt(0)}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{authorName}</h3>
          <p className="text-gray-400 text-sm">
            {locale === 'en-US' ? 'Full Stack Developer' : 'Desenvolvedor Full Stack'}
          </p>
        </div>
      </div>
    </div>
  )
}
