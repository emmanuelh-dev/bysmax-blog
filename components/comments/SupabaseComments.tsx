'use client'

import { useState, useEffect } from 'react'
import { supabase, Comment } from '@/lib/supabase'
import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import { FaComment, FaReply } from 'react-icons/fa'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

type SupabaseCommentsProps = {
  slug: string
  postId?: string
}

export default function SupabaseComments({ slug, postId }: SupabaseCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [authorEmail, setAuthorEmail] = useState('')
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'home')

  // Cargar comentarios
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .eq('post_slug', slug)
          .order('created_at', { ascending: false })

        if (error) throw error
        setComments(data || [])
      } catch (err) {
        console.error('Error al cargar comentarios:', err)
        setError('No se pudieron cargar los comentarios')
      }
    }

    if (slug) {
      fetchComments()
    }
  }, [slug])

  // Agregar un nuevo comentario
  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!newComment.trim()) {
      setError('Por favor escribe un comentario')
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            post_slug: slug,
            content: newComment.trim(),
            author_name: authorName.trim(),
            author_email: authorEmail.trim() || null,
            parent_id: replyTo,
          },
        ])
        .select()

      if (error) throw error

      // Actualizar la lista de comentarios
      if (data) {
        setComments([data[0], ...comments])
        setNewComment('')
        setReplyTo(null)
      }
    } catch (err) {
      console.error('Error al publicar comentario:', err)
      setError('No se pudo publicar el comentario')
    } finally {
      setLoading(false)
    }
  }

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Renderizar comentarios anidados
  const renderComments = (parentId: string | null = null) => {
    const filteredComments = comments.filter((comment) => comment.parent_id === parentId)

    return filteredComments.map((comment) => (
      <div
        key={comment.id}
        className={`${parentId ? 'ml-6 border-l border-neutral-200 pl-6 dark:border-neutral-800' : ''}`}
      >
        <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                {comment.author_name || 'Anónimo'}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {formatDate(comment.created_at)}
              </p>
            </div>
          </div>

          <div className="mb-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {comment.content}
          </div>

          <button
            onClick={() => setReplyTo(comment.id)}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
          >
            <FaReply className="h-3 w-3" />
            Responder
          </button>
        </div>

        {/* Renderizar respuestas a este comentario */}
        {renderComments(comment.id) && (
          <div className="mt-4 space-y-4">{renderComments(comment.id)}</div>
        )}
      </div>
    ))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          <FaComment className="h-5 w-5 text-neutral-400" />
          Comentarios
        </h3>
      </div>

      {/* Comment Form */}
      <div>
        <form onSubmit={handleSubmitComment} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="authorName"
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Nombre (opcional)
              </label>
              <Input
                type="text"
                id="authorName"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="border-neutral-300 dark:border-neutral-700"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="authorEmail"
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Email{' '}
                <span className="text-xs font-normal text-neutral-500">
                  (opcional - solo para notificaciones)
                </span>
              </label>
              <Input
                type="email"
                id="authorEmail"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                className="border-neutral-300 dark:border-neutral-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="comment"
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              {replyTo ? 'Tu respuesta *' : 'Tu comentario *'}
            </label>
            <Textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              required
              className="resize-none border-neutral-300 dark:border-neutral-700"
              placeholder={replyTo ? 'Escribe tu respuesta...' : 'Escribe tu comentario...'}
            />
          </div>

          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            {replyTo && (
              <Button type="button" onClick={() => setReplyTo(null)} variant="outline" size="sm">
                Cancelar respuesta
              </Button>
            )}

            <Button type="submit" disabled={loading} size="sm">
              {loading ? 'Enviando...' : 'Publicar comentario'}
            </Button>
          </div>
        </form>
      </div>

      {/* Lista de comentarios */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-neutral-500 dark:text-neutral-400">
              No hay comentarios aún. ¡Sé el primero en comentar!
            </p>
          </div>
        ) : (
          <div className="space-y-4">{renderComments()}</div>
        )}
      </div>
    </div>
  )
}
