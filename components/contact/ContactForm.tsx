'use client'

import { useContactForm } from './useContactForm'
import { Toaster } from 'react-hot-toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export const ContactForm = (): JSX.Element => {
  const {
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
  } = useContactForm()

  return (
    <>
      <div className="flex gap-6">
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">{t('nameLabel')}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder={t('namePlaceholder')}
              value={name}
              onChange={handleNameChange}
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={handleEmailChange}
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor="message">{t('messageLabel')}</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t('messagePlaceholder')}
              value={message}
              onChange={handleMessageChange}
              disabled={loading}
            />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? t('sending') || 'Enviando...' : t('sendMessageButton')}
          </Button>
        </form>
      </div>
      <Toaster />
    </>
  )
}
