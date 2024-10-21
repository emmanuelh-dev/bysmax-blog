import React from 'react'

export default function SuspencePosts() {
  return (
    <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  )
}

const Card = () => (
  <div className="animate-pulse">
    <div className="mb-16 aspect-video transform rounded-3xl bg-neutral-400 transition-transform duration-500 hover:scale-105 dark:bg-neutral-900" />
    <div className="-mt-5 h-8 transform rounded-3xl bg-neutral-400 transition-transform duration-500 hover:scale-105 dark:bg-neutral-900" />
  </div>
)
