'use client'

import dynamic from 'next/dynamic'

const ToastProvider = dynamic(
  () => import('./toast-provider').then(m => m.ToastProvider),
  { ssr: false }
)

export function ToastProviderLazy() {
  return <ToastProvider />
}
