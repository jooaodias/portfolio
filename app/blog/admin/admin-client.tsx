'use client'

import { useState, useEffect, useCallback } from 'react'
import { Post, PostListItem } from '@/lib/types/blog'
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  togglePublish,
  CreatePostData,
} from '@/lib/services/blog-admin'
import { toast } from 'react-toastify'
import PostList from './components/post-list'
import { ArrowLeftIcon, PlusIcon } from 'lucide-react'
import PostForm from './components/post-form'
import DeleteModal from './components/delete-modal'

type View = 'list' | 'create' | 'edit'

export default function AdminClient() {
  const [view, setView] = useState<View>('list')
  const [posts, setPosts] = useState<PostListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<PostListItem | null>(null)

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true)
      const response = await getAllPosts({ page: 1, limit: 50 })
      console.log(response)
      setPosts(response.data)
    } catch (error) {
      toast.error('Erro ao carregar posts')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleCreate = () => {
    setSelectedPost(null)
    setView('create')
  }

  const handleEdit = async (post: PostListItem) => {
    try {
      setLoading(true)
      const fullPost = await getPostById(post.id)
      setSelectedPost(fullPost)
      setView('edit')
    } catch (error) {
      toast.error('Erro ao carregar post')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = (post: PostListItem) => {
    setPostToDelete(post)
    setDeleteModalOpen(true)
  }

  const confirmDelete = async () => {
    if (!postToDelete) return

    try {
      await deletePost(postToDelete.id)
      toast.success('Post deletado com sucesso!')
      setDeleteModalOpen(false)
      setPostToDelete(null)
      fetchPosts()
    } catch (error) {
      toast.error('Erro ao deletar post')
    }
  }

  const handleTogglePublish = async (post: PostListItem) => {
    try {
      await togglePublish(post.id)
      toast.success(post.published ? 'Post despublicado!' : 'Post publicado!')
      fetchPosts()
    } catch (error) {
      toast.error('Erro ao alterar status')
    }
  }

  const handleSubmit = async (data: CreatePostData) => {
    try {
      if (view === 'edit' && selectedPost) {
        await updatePost(selectedPost.id, data)
        toast.success('Post atualizado com sucesso!')
      } else {
        await createPost(data)
        toast.success('Post criado com sucesso!')
      }
      setView('list')
      fetchPosts()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erro ao salvar post')
      throw error
    }
  }

  const handleCancel = () => {
    setView('list')
    setSelectedPost(null)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin - Blog</h1>
              <p className="text-zinc-400 mt-1">Gerencie seus posts</p>
            </div>
            {view === 'list' && (
              <button
                onClick={handleCreate}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <PlusIcon />
                Novo Post
              </button>
            )}
            {view !== 'list' && (
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <ArrowLeftIcon />
                Voltar
              </button>
            )}
          </div>
        </header>

        {view === 'list' && (
          <PostList
            posts={posts}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onTogglePublish={handleTogglePublish}
          />
        )}

        {(view === 'create' || view === 'edit') && (
          <PostForm
            post={selectedPost}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}

        <DeleteModal
          isOpen={deleteModalOpen}
          postTitle={postToDelete?.title || ''}
          onConfirm={confirmDelete}
          onCancel={() => {
            setDeleteModalOpen(false)
            setPostToDelete(null)
          }}
        />
      </div>
    </div>
  )
}