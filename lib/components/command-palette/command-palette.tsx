'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n/context'
import { useTheme } from '@/lib/theme/theme-context'
import { useFeatureFlag } from '@/lib/hooks/useFeatureFlag'
import { toast } from 'react-toastify'

interface CommandItem {
  id: string
  label: string
  keywords: string
  action: () => void
}

const emptySubscribe = () => () => {}

function getShortcutSnapshot(): '⌘K' | 'Ctrl+K' | 'touch' {
  const nav = navigator as Navigator & { userAgentData?: { platform?: string } }
  const platform = (nav.userAgentData?.platform || navigator.platform || navigator.userAgent || '').toLowerCase()
  const isTouchOnly =
    window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(pointer: fine)').matches

  if (isTouchOnly) return 'touch'
  return /mac|iphone|ipad|ipod/.test(platform) ? '⌘K' : 'Ctrl+K'
}

export function useShortcutLabel() {
  const value = useSyncExternalStore(emptySubscribe, getShortcutSnapshot, () => 'Ctrl+K' as const)
  return {
    label: value === 'touch' ? 'Ctrl+K' : value,
    isTouchOnly: value === 'touch',
  }
}

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

function CommandPaletteDialog({ onClose }: { onClose: () => void }) {
  const { locale, setLocale } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const { isEnabled: isBlogEnabled } = useFeatureFlag('blog_feature')
  const router = useRouter()
  const pathname = usePathname()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const navigateToSection = useCallback(
    (hash: string) => {
      onClose()
      if (pathname === '/') {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        router.push(`/${hash}`)
      }
    },
    [onClose, pathname, router]
  )

  const items: CommandItem[] = useMemo(() => {
    const isEn = locale === 'en-US'
    const list: CommandItem[] = [
      {
        id: 'about',
        label: isEn ? 'About me' : 'Sobre mim',
        keywords: 'about sobre mim perfil profile',
        action: () => navigateToSection('#about-me'),
      },
      {
        id: 'jobs',
        label: isEn ? 'Work Experience' : 'Experiência Profissional',
        keywords: 'experience jobs trabalho mercado pago v4 venturus',
        action: () => navigateToSection('#jobs'),
      },
      {
        id: 'projects',
        label: isEn ? 'Featured Projects' : 'Projetos Destacados',
        keywords: 'projects projetos votacidade agroecologia mapa',
        action: () => navigateToSection('#projects'),
      },
      {
        id: 'skills',
        label: isEn ? 'Skills & Stack' : 'Skills & Tecnologias',
        keywords: 'skills stack react typescript node datadog claude',
        action: () => navigateToSection('#skills'),
      },
    ]

    if (isBlogEnabled) {
      list.push({
        id: 'blog',
        label: isEn ? 'Open Blog' : 'Abrir Blog',
        keywords: 'blog articles artigos posts',
        action: () => {
          onClose()
          router.push('/blog')
        },
      })
    }

    list.push(
      {
        id: 'github',
        label: isEn ? 'Open GitHub' : 'Abrir GitHub',
        keywords: 'github code codigo repos',
        action: () => {
          onClose()
          window.open('https://github.com/jooaodias', '_blank', 'noopener,noreferrer')
        },
      },
      {
        id: 'email',
        label: isEn
          ? 'Copy Email (joaovitordias92040@gmail.com)'
          : 'Copiar Email (joaovitordias92040@gmail.com)',
        keywords: 'email contact contato copy copiar',
        action: () => {
          onClose()
          navigator.clipboard?.writeText('joaovitordias92040@gmail.com')
          toast.success(isEn ? 'Email copied!' : 'Email copiado!')
        },
      },
      {
        id: 'theme',
        label:
          theme === 'dark'
            ? isEn
              ? 'Switch to Light mode'
              : 'Alternar para modo Claro'
            : isEn
              ? 'Switch to Dark mode'
              : 'Alternar para modo Escuro',
        keywords: 'theme tema dark light claro escuro',
        action: () => {
          toggleTheme()
          onClose()
        },
      },
      {
        id: 'lang',
        label: isEn ? 'Mudar idioma para Português' : 'Switch language to English',
        keywords: 'language idioma pt en portugues english',
        action: () => {
          setLocale(isEn ? 'pt-BR' : 'en-US')
          onClose()
        },
      }
    )

    return list
  }, [locale, theme, isBlogEnabled, navigateToSection, router, onClose, toggleTheme, setLocale])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q)
    )
  }, [items, query])

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 10)
    return () => clearTimeout(timer)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && filtered.length > 0) {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % filtered.length)
    } else if (e.key === 'ArrowUp' && filtered.length > 0) {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault()
      filtered[activeIndex].action()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={locale === 'en-US' ? 'Quick navigation' : 'Navegação rápida'}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[16vh] px-4 bg-black/55 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-md rounded-xl border border-border-subtle bg-elevated shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              locale === 'en-US'
                ? 'Search section, link, or action...'
                : 'Buscar seção, link ou ação...'
            }
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-ink-muted hover:text-ink cursor-pointer shrink-0 px-1.5 py-0.5 rounded border border-border-subtle"
          >
            ESC
          </button>
        </div>

        <div className="p-2 flex flex-col gap-1 text-sm max-h-72 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="px-3 py-4 text-center text-xs text-ink-muted">
              {locale === 'en-US' ? 'No results found' : 'Nenhum resultado encontrado'}
            </p>
          ) : (
            filtered.map((item, idx) => {
              const active = idx === activeIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={item.action}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    active
                      ? 'bg-accent-soft text-accent-text font-medium'
                      : 'text-ink-secondary hover:bg-accent-soft hover:text-accent-text'
                  }`}
                >
                  {item.label}
                </button>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  if (!open) return null
  return <CommandPaletteDialog onClose={onClose} />
}
