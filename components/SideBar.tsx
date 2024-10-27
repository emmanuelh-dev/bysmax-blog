import Tag from '@/components/Tag'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const tagMap = {
  proteus: {
    text: 'Descargar Proteus',
    link: '/software/proteus',
  },
  traccar: {
    text: 'Curso Traccar',
    link: '/traccar',
  },
  pseint: {
    text: 'Descargar PSeInt',
    link: '/software/pseint',
  },
}

export default function Sidebar({ authorDetails, next, prev, content, locale }) {
  const { filePath, path, slug, date, title, tags, toc } = content
  const basePath = path.split('/')[0]

  const matchedTag = tags.find((tag) => tagMap[tag.toLowerCase()])

  return (
    <div className="hidden h-full xl:block">
      <dl className="pb-10 pt-6 xl:border-b xl:border-neutral-200 xl:pt-11 xl:dark:border-neutral-700">
        <dt className="sr-only">Authors</dt>
        <dd>
          <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
            {authorDetails &&
              authorDetails.map((author) => (
                <li className="flex items-center space-x-2" key={author.name}>
                  {author.avatar ? (
                    <Image
                      src={author.avatar}
                      width={38}
                      height={38}
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    <Image
                      src={'/placeholder.svg'}
                      width={38}
                      height={38}
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />
                  )}
                  <dl className="whitespace-nowrap text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-neutral-900 dark:text-neutral-100">
                      <Link href={`${author.url ? author.url : '/author/' + author.slug}`}>
                        {author.name}
                      </Link>
                    </dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      {author.twitter ? (
                        <Link
                          href={author.twitter}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.twitter.replace('https://twitter.com/', '@')}
                        </Link>
                      ) : author.url ? (
                        <Link
                          href={author.url}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.url}
                        </Link>
                      ) : null}
                    </dd>
                  </dl>
                </li>
              ))}
          </ul>
        </dd>
      </dl>
    </div>
  )
}

const ProgramCard = async ({ text, link }) => (
  <Link href={link} className={`${buttonVariants({ variant: 'default' })} my-6 block w-full py-3`}>
    {text}
  </Link>
)
