'use client'

import { PostListItem } from '@/lib/types/blog'
import { PostCard } from './post-card'
import { useI18n } from '@/lib/i18n/context'

interface PostListProps {
  posts: PostListItem[]
  showEmpty?: boolean
}

export function PostList({ posts, showEmpty = true }: PostListProps) {
  const { t } = useI18n()

  if (posts.length === 0 && showEmpty) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {t('blog.noPosts') || 'Nenhum post encontrado'}
        </h3>
        <p className="text-gray-400">
          {t('blog.noPostsDescription') || 'Volte em breve para novos artigos!'}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  )
}
