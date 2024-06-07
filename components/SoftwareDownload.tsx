import Link from 'next/link'
import Image from './Image'

export default function SoftwareDownload({ mainImage, downloadLink, title, description }) {
  return (
    <main className="mb-10">
      <div className="mx-auto grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            {title}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            {description}
          </p>
          <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
            <a
              href={downloadLink}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
              target="blank"
            >
              Descargar
            </a>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Más información
            </Link>
          </div>
        </div>
        <Image
          src={mainImage ?? '/placeholder.svg'}
          width="1270"
          height="300"
          alt="Hero"
          className="mx-auto aspect-[1/1] overflow-hidden rounded object-cover"
        />
      </div>
    </main>
  )
}
