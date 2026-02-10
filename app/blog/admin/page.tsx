import AdminClient from './admin-client'
import { BlogFeatureGate } from '@/lib/components/blog-feature-gate/blog-feature-gate'

export const metadata = {
  title: 'Admin - Blog',
  robots: 'noindex, nofollow',
}

export default function AdminPage() {
  return (
    <BlogFeatureGate>
      <AdminClient />
    </BlogFeatureGate>
  )
}
