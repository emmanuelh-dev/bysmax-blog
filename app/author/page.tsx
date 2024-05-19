import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Image from 'next/image'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Authors' })

export default function BlogPage() {
  const authors = allCoreContent(allAuthors)
  const pageNumber = 1
  const posts = allCoreContent(sortPosts(allBlogs))

  const getTotalPosts = (author) => {
    const authorPosts = posts.filter((post) => post.authors?.includes(author))
    return authorPosts.length
  }

  return (
    <div>
      <div className="pb-6 pt-6">
        <h1 className="py-8 text-5xl font-bold">Conoce a Nuestros Autores</h1>
        <p className="text-gray-400">
          Descubre las historias y las pasiones de las mentes creativas detrás de nuestro contenido.
          Cada autor aporta su propia perspectiva y experiencia, enriqueciendo nuestro blog con una
          diversidad de voces y conocimientos.
        </p>
        <div>
          <div className="grid gap-6 py-6 md:grid-cols-3">
            {authors.map((author) => (
              <article className="mx-auto space-y-2 py-4 xl:space-y-0" key={author.name}>
                <div className="flex flex-col items-center space-y-4">
                  <div>
                    <Image
                      width={300}
                      height={300}
                      src={author.avatar ?? ''}
                      alt={'Imagen de perfil de: ' + author.name}
                      className="size-80 object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          className="text-gray-900 dark:text-gray-100"
                          href={`/author/${author.slug}`}
                        >
                          {author.name}
                        </Link>
                      </h2>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {author.occupation}
                      <span className="block font-bold">{getTotalPosts(author.slug)} Posts</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold">¿Te gustaría ser un contributor?</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Estamos buscando apasionados por la escritura para unirse a nuestro equipo. Si estás
            interesado,{' '}
            <Link href="/contact" className="text-blue-500 hover:underline">
              contáctanos
            </Link>{' '}
            o mandanos un{' '}
            <Link href="mailto:info@bysmax.com" className="text-blue-500 hover:underline">
              correo
            </Link>{' '}
            y cuéntanos sobre ti.
          </p>
        </div>
      </div>
    </div>
  )
}
