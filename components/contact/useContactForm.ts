'use client'

import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import { sendContactMessage } from '@/lib/contact'

export const useContactForm = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'contact')
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (success) {
      toast.success(t('thanks') || '¡Gracias por tu mensaje!', {
        position: 'bottom-right',
      })
      setTimeout(() => {
        setName('')
        setEmail('')
        setMessage('')
        setSuccess(false)
      }, 2000)
    }

    if (error) {
      toast.error(error || t('error') || 'Hubo un error al enviar el mensaje')
    }
  }, [success, error, t])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(t('fillAllFields') || 'Por favor completa todos los campos')
      setLoading(false)
      return
    }

    try {
      const result = await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })

      if (result.success) {
        setSuccess(true)
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (err) {
      console.error('Error al enviar mensaje:', err)
      setError(t('error') || 'Hubo un error al enviar el mensaje')
    } finally {
      setLoading(false)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value)
  }

  return {
    loading,
    success,
    error,
    handleSubmit,
    name,
    email,
    message,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    t,
  }
}
