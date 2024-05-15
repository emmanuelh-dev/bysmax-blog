'use client'
import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { IoClose } from 'react-icons/io5'

const Image = ({ ...rest }: ImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.keyCode === 27) {
      closeModal()
    }
  }

  return (
    <div>
      <button className="relative cursor-pointer" onClick={openModal}>
        <NextImage {...rest} className="h-auto w-full" />
      </button>

      {/* Modal para mostrar la imagen a pantalla completa */}
      {isModalOpen && (
        <dialog
          className="bg- fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-75"
          open={isModalOpen}
          onKeyDown={handleKeyDown}
        >
          <button
            className="absolute right-4 top-4 z-50 text-xl text-white"
            onClick={closeModal}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          >
            <IoClose className="size-20" />
          </button>
          <NextImage {...rest} className="max-h-[40rem] w-full object-contain" />
        </dialog>
      )}
    </div>
  )
}

export default Image
