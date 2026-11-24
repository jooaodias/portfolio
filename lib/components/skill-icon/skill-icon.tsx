'use client'

import React from 'react'

export type SkillIconName =
  | 'react'
  | 'nextjs'
  | 'typescript'
  | 'tailwind'
  | 'state'
  | 'nodejs'
  | 'fastify'
  | 'postgres'
  | 'ssr'
  | 'datadog'
  | 'ai'
  | 'docker'
  | 'git'
  | 'jest'

export function SkillGlyph({ name }: { name: SkillIconName }) {
  const cls =
    'w-4 h-4 text-ink-muted group-hover:text-accent transition-colors shrink-0'

  switch (name) {
    case 'react':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      )
    case 'nextjs':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 6.84 17.29L9.8 7.5v9H8.3V6.1h1.74l9.62 12.56A10 10 0 0 0 12 2zm3.2 4.1h1.5v7.2l-1.5-1.95V6.1z" />
        </svg>
      )
    case 'typescript':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          <path d="M8.5 11v6.5M6.2 11h4.6M13.5 16.2c.5.5 1.3.8 2.1.8 1.2 0 1.9-.6 1.9-1.5 0-.8-.5-1.2-1.8-1.6-1.4-.4-2.1-.9-2.1-2 0-1.1.9-1.9 2.2-1.9.8 0 1.5.2 2 .6" strokeLinecap="round" />
        </svg>
      )
    case 'tailwind':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
        </svg>
      )
    case 'state':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h14" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinejoin="round" d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5L12 2.5z" />
          <path strokeLinecap="round" d="M9.5 14.5c0 1 .9 1.7 2.5 1.7s2.5-.6 2.5-1.6-.8-1.4-2.5-1.7c-1.7-.3-2.5-.7-2.5-1.7s.9-1.6 2.5-1.6 2.4.6 2.4 1.5" />
        </svg>
      )
    case 'fastify':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      )
    case 'postgres':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      )
    case 'ssr':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
        </svg>
      )
    case 'datadog':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l4-4 4 3 5-7 5 4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    case 'ai':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinecap="round" d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
      )
    case 'docker':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinejoin="round" d="M3 13h18c-.5 4.5-3.8 7-9 7s-8.5-2.5-9-7z" />
          <path d="M7 10h3v3H7zM11 10h3v3h-3zM15 10h3v3h-3zM11 6h3v3h-3z" />
        </svg>
      )
    case 'git':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="6" cy="18" r="2.2" />
          <path d="M6 8.2v7.6M18 8.2c0 4-3 4.8-12 4.8" />
        </svg>
      )
    case 'jest':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}
