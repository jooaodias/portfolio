'use client'

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/theme/theme-context'
import { useI18n } from '@/lib/i18n/context'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const { locale } = useI18n()

  const label =
    theme === 'dark'
      ? locale === 'en-US'
        ? 'Switch to light mode'
        : 'Mudar para modo claro'
      : locale === 'en-US'
        ? 'Switch to dark mode'
        : 'Mudar para modo escuro'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border-subtle bg-elevated text-ink-muted hover:border-border-hover hover:text-accent transition-colors cursor-pointer ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  )
}
