'use client'

import { useState, useEffect, useCallback } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { IoClose } from 'react-icons/io5'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function ImageViewer({ className, alt, ...rest }: ImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, closeModal])

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="h-auto w-full p-0" onClick={openModal}>
            <NextImage {...rest} alt={alt} className={`h-auto w-full ${className}`} />
          </Button>
        </DialogTrigger>
        <DialogContent className="h-auto max-h-[95vh] w-auto max-w-[95vw] border-none bg-transparent p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 bg-black bg-opacity-50 text-white hover:bg-opacity-75"
              onClick={closeModal}
              aria-label="Close image viewer"
            >
              <IoClose className="h-6 w-6" />
            </Button>
            <NextImage
              {...rest}
              alt={alt}
              className="h-auto max-h-[calc(95vh-4rem)] w-auto max-w-[95vw] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
