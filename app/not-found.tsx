import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          ¡Ups!
        </h1>
      </div>
      <div className="max-w-md text-center md:text-left">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Parece que algo salió mal.
        </p>
        <p className="mb-8">
          ¡El servidor y el perro se están divirtiendo de nuevo! Intenta volver a la página
          principal.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  )
}
