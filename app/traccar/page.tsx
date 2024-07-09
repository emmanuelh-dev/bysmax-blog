/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KbEKuFHoHV6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Image from 'next/image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Curso de Traccar desde Cero hasta Avanzado en español',
  description: 'Curso de Traccar desde Cero hasta Avanzado en español',
})

export default function page() {
  const tags = ['traccar']

  const filteredPosts = allBlogs.filter((post) => tags.some((tag) => post.tags.includes(tag)))

  const posts = allCoreContent(sortPosts(filteredPosts))

  return (
    <main className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
      <div className="sticky top-4 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            Curso de Traccar desde Cero hasta Avanzado en español
          </h1>
          <p className="text-muted-foreground">
            Traccar es una plataforma de código abierto para el rastreo de vehículos mediante
            dispositivos GPS. Este curso en español te guiará desde la configuración inicial de tu
            propio servidor de rastreo hasta la gestión avanzada de dispositivos y la
            personalización de la plataforma. Aprenderás a agregar dispositivos GPS, identificar
            protocolos de conexión y configurar notificaciones, entre otras funcionalidades clave.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="grid gap-2">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Beginners
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Advanced Projects
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Tips and Tricks
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((c) => (
              <Link
                href={`tags/${c}`}
                className="bg-muted text-muted-foreground hover:bg-muted/50 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
                prefetch={false}
                key={c}
              >
                <TagIcon className="h-4 w-4" />
                {c}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Search</h3>
          <form className="relative">
            <Input type="search" placeholder="Busca tutoriales de arduino..." className="pr-10" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>
        <div className="sticky top-0 pt-10">
          <ins
            className="adsbygoogle sticky top-10 mt-6"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3646138644530578"
            data-ad-slot="9734184827"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
      <section className="space-y-8 bg-white dark:bg-black">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              key={post.title}
            >
              <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Tutorial</span>
              </Link>
              <Image
                src={post.images ? post.images[0] : '/placeholder.svg'}
                alt="Arduino Basics"
                width={450}
                height={300}
                className="h-48 w-full object-cover transition-opacity group-hover:opacity-50"
              />
              <div className="bg-white p-4 dark:bg-black">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-muted-foreground truncate text-sm">{post.summary}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs">
                    Beginners
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold underline underline-offset-4"
                  >
                    Leer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}
