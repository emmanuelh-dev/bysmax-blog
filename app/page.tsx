import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const images = ['/static/notes/01.png', '/static/notes/02.png']
  function getRandom() {
    return Math.floor(Math.random() * images.length)
  }
  const image = images[getRandom()]
  return (
    <div>
      <div className="flex w-full items-center justify-between max-sm:flex-col-reverse max-sm:font-semibold">
        <div className="space-y-4">
          <h1 className="text-6xl font-semibold leading-tight md:max-w-[40rem] md:text-7xl">
            Electrónica para Estudiantes, Recursos y Más
          </h1>
          <p className="pt-2 text-lg text-gray-500 dark:text-gray-400">
            Accede a tutoriales detallados, guías prácticas y proyectos innovadores que te ayudarán
            a dominar la electrónica y la tecnología.
          </p>
          <div className="flex gap-4">
            <Link
              href="/blog"
              className="block rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400"
            >
              Blog y Tutoriales
            </Link>
            <Link
              href="/servicios"
              className="block rounded-md bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-gray-400"
            >
              Nuestros Servicios
            </Link>
          </div>
        </div>
        <Image alt="" width="400" height="400" decoding="async" data-nimg="1" src={image} />
      </div>
    </div>
  )
}
