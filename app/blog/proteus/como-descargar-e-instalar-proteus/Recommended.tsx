import React from 'react'
import Main from '../../../Main'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent } from 'pliny/utils/contentlayer'

export default function Recommended() {
  const filteredPosts = allBlogs.filter((post) => post.tags.includes('proteus'))
  const posts = allCoreContent(filteredPosts)
  return (
    <section id="resources" className="bg-muted py-12 md:py-24 lg:py-32">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recursos sobre Proteus
          </h2>
          <p className="text-lg text-neutral-400">
            Explora más sobre Proteus y cómo utilizarlo en tus proyectos.
          </p>
        </div>
        <div className="grid md:grid-cols-2" />
      </div>
      <Main posts={posts} />
    </section>
  )
}
