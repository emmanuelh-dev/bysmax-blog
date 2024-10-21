import React from 'react'

export default function Loading() {
  return (
    <div>
      <div>
        <div className="bg-neural-300 block h-4 w-full dark:bg-neutral-900" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="animate-pulse">
          <div className="mb-16 aspect-video transform rounded-3xl bg-neutral-400 transition-transform duration-500 hover:scale-105 dark:bg-neutral-900" />
        </div>
        <div className="animate-pulse">
          <div className="mb-16 aspect-video transform rounded-3xl bg-neutral-400 transition-transform duration-500 hover:scale-105 dark:bg-neutral-900" />
        </div>
        <div className="animate-pulse">
          <div className="mb-16 aspect-video transform rounded-3xl bg-neutral-400 transition-transform duration-500 hover:scale-105 dark:bg-neutral-900" />
        </div>
      </div>
    </div>
  )
}
