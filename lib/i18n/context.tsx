'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Locale, translations } from './translations'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved === 'pt-BR' || saved === 'en-US') return saved
    const browserLang = navigator.language || 'pt-BR'
    return browserLang.startsWith('pt') ? 'pt-BR' : 'en-US'
  } catch {
    return 'pt-BR'
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key 
      }
    }
    
    if (typeof value === 'object' && value !== null) {
      return key
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

