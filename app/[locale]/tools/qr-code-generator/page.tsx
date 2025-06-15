import { Metadata } from 'next'
import QRGenerator from './components/qr-generator'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from '@/components/Image'
import Link from 'next/link'
import { allBlogs, Blog } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === locale)
    .find((p) => p.slug === 'generador-de-codigos-qr') as Blog
  return {
    title: post.title,
    description: post.summary,
    keywords:
      'generador QR, código QR, QR personalizado, QR para URL, QR para contacto, QR para WiFi, QR para whatsapp',
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [
        {
          url: '/static/images/qrcode-page.png',
          width: 1200,
          height: 630,
          alt: 'Generador de códigos QR',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: ['/static/images/qrcode-page.png'],
    },
  }
}
export default function Page({ params: { locale } }: { params: { locale: string } }) {
  const posts = allBlogs
  const post = posts
    .filter((p) => p.language === locale)
    .find((p) => p.slug === 'generador-de-codigos-qr') as Blog
  return (
    <>
      <>
        <main className="mx-auto mb-12 w-full text-pretty text-center text-neutral-600 dark:text-neutral-400">
          <div className="mx-auto max-w-5xl px-4 pb-6">
            <h2 className="mb-4 text-balance pb-4 pt-16 text-4xl font-bold tracking-tight text-black dark:text-white lg:text-6xl">
              {post.title}
            </h2>
            <h1>{post.title + ' - ' + post.summary}</h1>
            <p>{post.summary}</p>
          </div>
          <div className="mx-auto max-w-6xl">
            <QRGenerator />
          </div>
        </main>
      </>

      <div className="mx-auto max-w-5xl px-4 pb-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="lg:w-2/3">
            <h2 className="mb-4 text-3xl font-semibold text-primary-500">
              ¿Qué son los Códigos QR?
            </h2>
            <p className="mb-4 flex-1  md:mb-0 md:mr-8">
              Los códigos QR (Quick Response) son matrices bidimensionales que almacenan gran
              cantidad de información alfanumérica. Se reconocen por su forma cuadrada y los tres
              cuadrados en las esquinas superiores e inferior izquierda.
            </p>
          </div>
          <Image
            src="/static/images/qr-code-emmanuel.jpg"
            alt="Ejemplo de un código QR"
            width={500}
            height={500}
            className="size-72 w-full max-w-72 rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-6">
        <h2 className="mb-4 text-3xl font-semibold text-primary-500">Generación de Códigos QR</h2>
        <p className="">
          Crear un código QR es sencillo y gratuito. Nuestra página web ofrece un generador que te
          permite crear todos los que necesites con solo rellenar un formulario simple. Úsalos en
          proyectos, sitios web, tarjetas de visita y más.
        </p>
        <Link className={`${buttonVariants({ variant: 'default' })} mt-4`} href="#generator">
          Generar Código QR
        </Link>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-6">
        <h2 className="mb-4 text-3xl font-semibold text-primary-500">Usos de los Códigos QR</h2>
        <p className="mb-4 ">
          Aunque originalmente se desarrollaron para la industria automotriz, los códigos QR ahora
          tienen innumerables aplicaciones:
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            'Publicidad y marketing',
            'Merchandising',
            'Diseño gráfico',
            'Papelería corporativa',
            'Integración web',
            'Eventos y exposiciones',
          ].map((use, index) => (
            <li key={index} className="flex items-center rounded-lg bg-blue-100 p-3 text-black">
              <svg
                className="mr-2 h-6 w-6 text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-6">
        <div className="prose w-full max-w-none text-lg dark:prose-invert">
          <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
        </div>
      </div>
    </>
  )
}
