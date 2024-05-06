import { allServicios } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import React from 'react'

const POSTS_PER_PAGE = 5

function ServicesPage() {
  const services = allCoreContent(sortPosts(allServicios))
  const pageNumber = 1
  const initialDisplayPosts = services.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(services.length / POSTS_PER_PAGE),
  }
  return (
    <div>
      <div className="pb-6 pt-6">
        <h1 className="text-5xl font-bold">Servicios</h1>
        <p className="text-gray-400">
          En nuestra empresa ofrecemos una amplia gama de servicios diseñados para cubrir tus
          necesidades:
        </p>
        {!services.length && 'No hay servicios disponibles'}
        <ul className="grid grid-cols-1 lg:grid-cols-3">
          {services.map((service) => {
            const { slug, date, title, summary, tags, images } = service
            return (
              <li key={slug} className="py-12">
                <article className="h-full flex-1">
                  <div className="block w-full lg:col-span-2">
                    {images ? (
                      <Image
                        className="aspect-[384/246] h-full bg-center object-cover"
                        width={600}
                        height={400}
                        src={images[0]}
                        alt="The Time Traveler's Notebook"
                      />
                    ) : (
                      <div className="aspect-[384/246] h-full bg-amber-200 bg-center object-cover dark:bg-amber-400" />
                    )}
                  </div>
                  <div className="-mt-20 flex w-full flex-col items-start justify-between p-4">
                    <div className="flex h-full w-full flex-col justify-between text-balance p-4">
                      <div>
                        <Link className="font-medium uppercase" href={`/servicios/${slug}`}>
                          {title}
                        </Link>
                        <p className="mt-6 line-clamp-2 text-sm text-slate-600">{summary}</p>
                      </div>
                      <div className="mt-1 inline-flex items-center space-x-1">
                        <p className="text-xs font-medium text-gray-900 dark:text-gray-400">
                          {/*Por ver*/}
                        </p>
                        <span aria-hidden="true">·</span>
                        <div className="flex text-xs text-gray-500">
                          <time dateTime={date}>Otra info</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        <ul className="mt-4 list-inside list-disc text-gray-400">
          <li>Venta de materiales de calidad para tus proyectos.</li>
          <li>
            Servicios completos de mantenimiento para garantizar el óptimo funcionamiento de tus
            equipos y sistemas.
          </li>
          <li>
            Desarrollo de proyectos a medida, adaptados específicamente a tus requisitos y
            objetivos.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ServicesPage
