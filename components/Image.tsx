'use client'
import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { IoClose } from 'react-icons/io5'
import ReactDOM from 'react-dom'

const Image = ({ className, ...rest }: ImageProps) => {
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

  const modalContent = (
    <dialog
      className="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-black bg-opacity-75"
      open={isModalOpen}
      onKeyDown={handleKeyDown}
    >
      <div className="-mt-20 flex w-full flex-col items-center justify-center p-6">
        <div className="flex w-full flex-col items-end justify-center p-6">
          <button
            className="inline-block text-left text-white"
            onClick={closeModal}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          >
            <IoClose className="size-16" />
          </button>
        </div>

        <NextImage {...rest} className="z-[100] max-h-[40rem] max-w-full object-contain" />
      </div>
    </dialog>
  )

  return (
    <div>
      <button className="z-1 relative m-0 w-full cursor-pointer" onClick={openModal}>
        <NextImage {...rest} className={`h-auto w-full ${className}`} />
      </button>
      {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  )
}

export default Image
