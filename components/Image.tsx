'use client'

import { useState, useEffect, useCallback } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

export default function ImageViewer({ className, alt, ...rest }: ImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.body.classList.add('overflow-y-hidden')
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
    document.body.classList.remove('overflow-y-hidden')
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
      document.body.classList.remove('overflow-y-hidden')
      document.documentElement.classList.remove('overflow-y-hidden')
    }
  }, [isModalOpen, closeModal])

  const Modal = () => (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Close image viewer"
      >
        <X size={20} />
      </button>

      {/* Image container */}
      <div className="relative flex h-full w-full items-center justify-center">
        <NextImage
          {...rest}
          style={{ width: '100%', height: 'auto' }}
          alt={alt}
          className="h-auto max-h-[calc(100vh-6rem)] w-auto max-w-[calc(100vw-6rem)] rounded-lg object-contain shadow-2xl"
        />
      </div>
    </div>
  )

  return (
    <>
      {/* Thumbnail image */}
      <button
        onClick={openModal}
        className={`group relative w-full cursor-zoom-in overflow-hidden rounded-lg border border-[#e5e5e5] transition-all duration-200 hover:border-[#0070f3] hover:shadow-sm dark:border-[#333333] dark:hover:border-[#0070f3] ${className?.includes('w-full') ? 'block w-full' : 'inline-block'}`}
        aria-label={`View full size: ${alt}`}
      >
        <NextImage
          {...rest}
          alt={alt}
          className={`w-full transition-transform duration-200 group-hover:scale-[1.02] ${
            className?.includes('w-full')
              ? 'h-auto w-full object-cover'
              : 'h-auto w-auto object-contain'
          } ${className || ''}`}
          style={className?.includes('w-full') ? { width: '100%', height: 'auto' } : undefined}
        />

        {/* Zoom indicator */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/10">
          <div className="rounded-full bg-white/80 p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-black/80">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#0a0a0a] dark:text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="21 21l-4.35-4.35" />
              <path d="11 8v6" />
              <path d="8 11h6" />
            </svg>
          </div>
        </div>
      </button>

      {/* Portal modal */}
      {mounted && isModalOpen && createPortal(<Modal />, document.body)}
    </>
  )
}
