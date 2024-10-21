import Link from 'next/link'
import Image from './Image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function SoftwareDownload({ mainImage, downloadLink, title, description, gallery }) {
  return (
    <main className="mb-10">
      <section className="w-full">
        <div className="grid gap-6  lg:grid-cols-2 lg:gap-12">
          <Image
            src={gallery[0].src || '/placeholder.svg'}
            width="1920"
            height="1920"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href={downloadLink}
                className="inline-flex h-10 w-full items-center justify-center rounded-3xl bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Descargar
              </a>
              {/* <Link
                href="/#"
                className="inline-flex h-10 items-center justify-center rounded-3xl border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Más Información
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-5xl">Capturas de pantalla</h2>
        </div>
        <Gallery gallery={gallery} />
      </section>
    </main>
  )
}

function Gallery({ gallery }) {
  if (!gallery) return null

  return (
    <Carousel className="my-10  w-full overflow-hidden">
      <CarouselContent>
        {gallery.map((image, index) => (
          <CarouselItem key={index} className="basis-10/12 pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="object-cover"
                    width="1270"
                    height="300"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
