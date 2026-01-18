'use client'

import { PostListItem } from '@/lib/types/blog'

interface PostListProps {
  posts: PostListItem[]
  loading: boolean
  onEdit: (post: PostListItem) => void
  onDelete: (post: PostListItem) => void
  onTogglePublish: (post: PostListItem) => void
}

export default function PostList({
  posts,
  loading,
  onEdit,
  onDelete,
  onTogglePublish,
}: PostListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500" />
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-zinc-400">Nenhum post encontrado</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold truncate">{post.title}</h3>
                <StatusBadge published={post.published} />
                {post.featured && <FeaturedBadge />}
              </div>
              <p className="text-sm text-zinc-400 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500">
                <span>{formatDate(post.createdAt)}</span>
                <span>{post.readingTime} min de leitura</span>
                {post.tags.length > 0 && (
                  <span className="flex gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-zinc-800 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onTogglePublish(post)}
                className={`p-2 rounded-lg transition-colors ${
                  post.published
                    ? 'bg-green-900/30 text-green-400 hover:bg-green-900/50'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                }`}
                title={post.published ? 'Despublicar' : 'Publicar'}
              >
                {post.published ? <EyeIcon /> : <EyeOffIcon />}
              </button>
              <button
                onClick={() => onEdit(post)}
                className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                title="Editar"
              >
                <EditIcon />
              </button>
              <button
                onClick={() => onDelete(post)}
                className="p-2 bg-red-900/30 text-red-400 hover:bg-red-900/50 rounded-lg transition-colors"
                title="Deletar"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function StatusBadge({ published }: { published: boolean }) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full ${
        published
          ? 'bg-green-900/30 text-green-400'
          : 'bg-yellow-900/30 text-yellow-400'
      }`}
    >
      {published ? 'Publicado' : 'Rascunho'}
    </span>
  )
}

function FeaturedBadge() {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-900/30 text-violet-400">
      Destaque
    </span>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <path d="m1 1 22 22" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}
