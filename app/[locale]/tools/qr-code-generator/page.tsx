import { Metadata } from 'next'
import QRGenerator from './components/qr-generator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Smartphone, Globe, Mail, MessageSquare, Wifi } from 'lucide-react'
import Image from '@/components/Image'

export const metadata: Metadata = {
  title: 'Generador de Códigos QR Avanzado | Crea QR para cualquier propósito',
  description:
    'Crea códigos QR personalizados para URLs, contactos, teléfonos, emails, SMS y redes WiFi. Generador gratuito y fácil de usar.',
  keywords:
    'generador QR, código QR, QR personalizado, QR para URL, QR para contacto, QR para WiFi',
}

export default function Page() {
  return (
    <>
      <main>
        <section className="mb-12">
          <div className="pb-6">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Generador de Códigos QR Gratis
            </h1>
            <p>Crea códigos QR personalizados para cualquier propósito. Fácil, rápido y gratis.</p>
          </div>
          <QRGenerator />
        </section>

        <section className="p-8">
          <div className="flex flex-col items-center md:flex-row">
            <div>
              <h2 className="mb-4 text-3xl font-semibold text-primary-500">
                ¿Qué son los Códigos QR?
              </h2>
              <p className="mb-4 flex-1 text-neutral-600 md:mb-0 md:mr-8">
                Los códigos QR (Quick Response) son matrices bidimensionales que almacenan gran
                cantidad de información alfanumérica. Se reconocen por su forma cuadrada y los tres
                cuadrados en las esquinas superiores e inferior izquierda.
              </p>
            </div>
            <Image
              src="/placeholder.svg"
              alt="Ejemplo de un código QR"
              width={500}
              height={500}
              className="size-72 max-w-72 rounded-md shadow-md"
            />
          </div>
        </section>

        <section className="bg-blue-50 p-8">
          <h2 className="mb-4 text-3xl font-semibold text-primary-500">Generación de Códigos QR</h2>
          <p className="text-neutral-600">
            Crear un código QR es sencillo y gratuito. Nuestra página web ofrece un generador que te
            permite crear todos los que necesites con solo rellenar un formulario simple. Úsalos en
            proyectos, sitios web, tarjetas de visita y más.
          </p>
          <Button className="mt-4">Generar Código QR</Button>
        </section>

        <section className="p-8">
          <h2 className="mb-4 text-3xl font-semibold text-primary-500">Usos de los Códigos QR</h2>
          <p className="mb-4 text-neutral-600">
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
        </section>
      </main>
    </>
  )
}
