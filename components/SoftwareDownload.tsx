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
  console.log(gallery)

  return (
    <main className="mb-10">
      <div className="mx-auto grid items-end gap-4 md:grid-cols-2">
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
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              target="blank"
            >
              Descargar
            </a>
          </div>
        </div>
        <Image
          src={mainImage ?? '/placeholder.svg'}
          width="1270"
          height="300"
          alt={description}
          className="mx-auto aspect-[4/2] overflow-hidden rounded object-cover"
        />
      </div>
      <Gallery gallery={gallery} />
    </main>
  )
}

function Gallery({ gallery }) {
  if (!gallery) return null

  return (
    <Carousel className="my-10">
      <CarouselContent className="-ml-1">
        {gallery.map((image, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
