'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Post } from '@/lib/types/blog'
import { CreatePostData } from '@/lib/services/blog-admin'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

interface PostFormProps {
  post: Post | null
  onSubmit: (data: CreatePostData) => Promise<void>
  onCancel: () => void
}

export default function PostForm({ post, onSubmit, onCancel }: PostFormProps) {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'pt' | 'en'>('pt')

  // Form state
  const [title, setTitle] = useState(post?.title || '')
  const [titleEn, setTitleEn] = useState(post?.titleEn || '')
  const [excerpt, setExcerpt] = useState(post?.excerpt || '')
  const [excerptEn, setExcerptEn] = useState(post?.excerptEn || '')
  const [content, setContent] = useState(post?.content || '')
  const [contentEn, setContentEn] = useState(post?.contentEn || '')
  const [coverImage, setCoverImage] = useState(post?.coverImage || '')
  const [tags, setTags] = useState(post?.tags.join(', ') || '')
  const [featured, setFeatured] = useState(post?.featured || false)
  const [authorName, setAuthorName] = useState(post?.authorName || '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title.trim() || !content.trim() || !excerpt.trim() || !authorName.trim()) {
      return
    }

    try {
      setLoading(true)
      await onSubmit({
        title: title.trim(),
        titleEn: titleEn.trim() || undefined,
        excerpt: excerpt.trim(),
        excerptEn: excerptEn.trim() || undefined,
        content: content.trim(),
        contentEn: contentEn.trim() || undefined,
        coverImage: coverImage.trim() || undefined,
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
        featured,
        authorName: authorName.trim(),
      })
    } catch {
      // Error is handled in parent
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Language Tabs */}
      <div className="flex gap-2 border-b border-zinc-800 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('pt')}
          className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
            activeTab === 'pt'
              ? 'bg-zinc-800 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Português
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('en')}
          className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
            activeTab === 'en'
              ? 'bg-zinc-800 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          English (opcional)
        </button>
      </div>

      {/* Portuguese Content */}
      {activeTab === 'pt' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Título <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do post"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Resumo <span className="text-red-400">*</span>
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Breve descrição do post"
              rows={3}
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Conteúdo (Markdown) <span className="text-red-400">*</span>
            </label>
            <div data-color-mode="dark">
              <MDEditor
                value={content}
                onChange={(value) => setContent(value || '')}
                height={400}
                preview="live"
              />
            </div>
          </div>
        </div>
      )}

      {/* English Content */}
      {activeTab === 'en' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Title (English)
            </label>
            <input
              type="text"
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              placeholder="Post title in English"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Excerpt (English)
            </label>
            <textarea
              value={excerptEn}
              onChange={(e) => setExcerptEn(e.target.value)}
              placeholder="Brief description in English"
              rows={3}
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">
              Content (Markdown)
            </label>
            <div data-color-mode="dark">
              <MDEditor
                value={contentEn}
                onChange={(value) => setContentEn(value || '')}
                height={400}
                preview="live"
              />
            </div>
          </div>
        </div>
      )}

      {/* Common Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">
            Nome do Autor <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Seu nome"
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">
            Imagem de Capa (URL)
          </label>
          <input
            type="url"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1">
            Tags (separadas por vírgula)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="typescript, react, nodejs"
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4 accent-violet-500"
            />
            <span className="text-sm text-zinc-300">Post em destaque</span>
          </label>
        </div>
      </div>

      {/* Preview Cover Image */}
      {coverImage && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Preview da Imagem
          </label>
          <img
            src={coverImage}
            alt="Preview"
            className="max-h-48 rounded-lg object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 pt-4 border-t border-zinc-800">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-800 disabled:cursor-not-allowed rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              Salvando...
            </>
          ) : (
            <>
              <SaveIcon />
              {post ? 'Atualizar Post' : 'Criar Post'}
            </>
          )}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 disabled:cursor-not-allowed rounded-lg font-medium transition-colors"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

function SaveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17,21 17,13 7,13 7,21" />
      <polyline points="7,3 7,8 15,8" />
    </svg>
  )
}
