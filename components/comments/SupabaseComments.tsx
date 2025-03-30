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
        className={`mb-4 ${parentId ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}
      >
        <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800 ">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-bold">{comment.author_name}</h4>
              <p className="text-sm text-gray-500">{formatDate(comment.created_at)}</p>
            </div>
          </div>
          <div className="mt-2">{comment.content}</div>
          <button
            onClick={() => setReplyTo(comment.id)}
            className="mt-2 flex items-center gap-1 text-sm text-blue-500"
          >
            <FaReply size={12} /> Responder
          </button>
        </div>

        {/* Renderizar respuestas a este comentario */}
        <div className="mt-2">{renderComments(comment.id)}</div>
      </div>
    ))
  }

  return (
    <div className="mt-8">
      <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
        <FaComment /> Comentarios
      </h3>

      {/* Formulario para agregar comentario */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <label htmlFor="authorName" className="mb-2 block font-medium">
            Nombre (opcional)
          </label>
          <Input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="authorEmail" className="mb-2 block font-medium">
            Email (opcional)
          </label>
          <Input
            type="email"
            id="authorEmail"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="mb-2 block font-medium">
            {replyTo ? 'Tu respuesta *' : 'Tu comentario *'}
          </label>
          <Textarea
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            required
          ></Textarea>
        </div>

        <div className="flex gap-4">
          {replyTo && (
            <Button type="button" onClick={() => setReplyTo(null)} variant={'destructive'}>
              Cancelar respuesta
            </Button>
          )}

          {error && <p className="mb-4 text-red-500">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Publicar comentario'}
          </Button>
        </div>
      </form>

      {/* Lista de comentarios */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500">No hay comentarios aún. ¡Sé el primero en comentar!</p>
        ) : (
          renderComments()
        )}
      </div>
    </div>
  )
}
