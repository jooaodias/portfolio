import AdminClient from './admin-client'

export const metadata = {
  title: 'Admin - Blog',
  robots: 'noindex, nofollow',
}

export default function AdminPage() {
  return <AdminClient />
}
