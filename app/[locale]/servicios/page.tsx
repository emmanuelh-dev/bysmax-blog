import Link from 'next/link'
import React from 'react'
import Services from '@/components/Services'
import { CgToolbox, CgLaptop, CgWebsite, CgSearch, CgCheckR } from 'react-icons/cg'
import { buttonVariants } from '@/components/ui/button'
import { genPageMetadata } from '@/app/[locale]/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({
  title: 'Servicios a la medida para tu negocio.',
  description:
    'En medio de la pandemia de COVID-19, cuando muchas pequeñas y medianas empresas luchaban por adaptarse a una nueva realidad, nació Bysmax con una misión clara: ayudar a estas empresas a modernizarse y prosperar.',
})

function Page() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 lg:py-32">
        <div className=" ">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Soluciones innovadoras para tu negocio
                </h1>
                <p className="max-w-[600px] text-neutral-300 dark:text-neutral-400 md:text-xl">
                  Descubre cómo podemos ayudarte a llevar tu empresa al siguiente nivel con nuestros
                  productos y servicios.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/" className={buttonVariants({ variant: 'default' })} prefetch={false}>
                  Conoce más
                </Link>
                <Link href="/" className={buttonVariants({ variant: 'outline' })} prefetch={false}>
                  Compra ahora
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg"
              width="400"
              height="400"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" ">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-3xl bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                Nuestra Historia
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Más de 3 años de innovación
              </h2>
              <p className="max-w-[900px] text-neutral-400 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                En medio de la pandemia de COVID-19, cuando muchas pequeñas y medianas empresas
                luchaban por adaptarse a una nueva realidad, nació Bysmax con una misión clara:
                ayudar a estas empresas a modernizarse y prosperar.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Imagen"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Visión</h3>
                    <p className="text-neutral-400 dark:text-neutral-400">
                      Ser la empresa líder en soluciones tecnológicas innovadoras que impulsen el
                      crecimiento de nuestros clientes.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Misión</h3>
                    <p className="text-neutral-400 dark:text-neutral-400">
                      Brindar soluciones integrales que simplifiquen los procesos de nuestros
                      clientes y les permitan enfocarse en su negocio.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Valores</h3>
                    <p className="text-neutral-400 dark:text-neutral-400">
                      Integridad, innovación, excelencia, trabajo en equipo y compromiso con
                      nuestros clientes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className=" grid items-center gap-6  lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Nuestros Productos
            </h2>
            <p className="max-w-[600px] text-neutral-400 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora nuestra amplia gama de productos diseñados para satisfacer las necesidades de
              tu negocio.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <Link href="/" className={buttonVariants({ variant: 'default' })} prefetch={false}>
              Ver Productos
            </Link>
            <Link href="/" className={buttonVariants({ variant: 'outline' })} prefetch={false}>
              Comprar ahora
            </Link>
          </div>
        </div>
      </section>
      <Services />
    </main>
  )
}

export default Page
