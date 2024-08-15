import Image from './Image'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export default function Gallery({ gallery }) {
  if (!gallery) return null

  return (
    <Carousel className="my-10 w-full overflow-hidden">
      <CarouselContent>
        {gallery.map((image, index) => (
          <CarouselItem key={index} className="basis-10/12 pl-1 md:basis-4/6 lg:basis-2/4">
            <div className="p-1">
              <Image
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="aspect-video object-cover"
                width="1270"
                height="300"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
