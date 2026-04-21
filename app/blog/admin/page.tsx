import type { Metadata } from 'next'
import AdminClient from './admin-client'
import { BlogFeatureGate } from '@/lib/components/blog-feature-gate/blog-feature-gate'

export const metadata: Metadata = {
  title: 'Blog admin',
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return (
    <BlogFeatureGate>
      <AdminClient />
    </BlogFeatureGate>
  )
}
