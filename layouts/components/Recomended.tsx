import React from 'react'
import Main from '../../app/Main'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent } from 'pliny/utils/contentlayer'

export default function Recomended() {
  const filteredPosts = allBlogs.filter((post) => post.tags.includes('proteus'))
  const posts = allCoreContent(filteredPosts)

  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Te podria interesar.
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/*siteMetadata.description*/}
          </p>
        </div>
        <Main posts={posts} title="Te podria interesar" />
      </div>
    </div>
  )
}
