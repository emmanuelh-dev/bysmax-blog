import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import {
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHeader,
  TableHead,
} from '@/components/ui/table'
import { CheckIcon } from 'lucide-react'
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({
  title: 'Mantenimiento de Computadoras en San Nicolas.',
  description:
    'Servicio de reparación y mantenimiento de computadoras de alta calidad en San Nicolas.',
})

export default function Page() {
  return (
    <main>
      <section id="hero" className="bg-primary py-12 md:py-20">
        <div className=" mx-auto ">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-primary-foreground text-3xl font-bold md:text-6xl">
                Mantenimiento de Computadoras en San Nicolas
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Servicio de reparación y mantenimiento de computadoras de alta calidad en San
                Nicolas.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#services"
                  className={buttonVariants({ variant: 'default' })}
                  prefetch={false}
                >
                  Conoce nuestros servicios
                </Link>
                <Link
                  href="#map"
                  className={buttonVariants({ variant: 'outline' })}
                  prefetch={false}
                >
                  Visítanos
                </Link>
              </div>
            </div>
            <Image
              src="/static/services/1.png"
              alt="Mantenimiento de computadoras"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section id="services" className="py-12 md:py-20">
        <div className=" mx-auto ">
          <div className="space-y-6 md:space-y-8">
            <div className="">
              <h2 className="text-2xl font-bold md:text-3xl">Nuestros Servicios</h2>
              <p className="text-muted-foreground text-lg">
                Ofrecemos una amplia gama de servicios de mantenimiento y reparación de
                computadoras.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <LaptopIcon className="text-primary h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Reparación de Hardware</h3>
                  <p className="text-muted-foreground">
                    Reparamos todo tipo de problemas de hardware en tu computadora, desde reemplazar
                    piezas dañadas hasta solucionar problemas de rendimiento.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CodeIcon className="text-primary h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Reparación de Software</h3>
                  <p className="text-muted-foreground">
                    Resolvemos problemas de software, como virus, malware, errores de sistema y
                    configuración, para que tu computadora funcione de manera óptima.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MoveUpIcon className="text-primary h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Actualización de Equipos</h3>
                  <p className="text-muted-foreground">
                    Mejoramos el rendimiento de tu computadora mediante la actualización de
                    componentes como memoria, disco duro, procesador y tarjeta gráfica.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DatabaseBackupIcon className="text-primary h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Respaldo de Datos</h3>
                  <p className="text-muted-foreground">
                    Realizamos respaldos de tus archivos y datos importantes para prevenir la
                    pérdida de información valiosa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LockIcon className="text-primary h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Seguridad Informática</h3>
                  <p className="text-muted-foreground">
                    Implementamos soluciones de seguridad para proteger tu computadora contra
                    amenazas como virus, malware y ataques cibernéticos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DownloadIcon className="text-primary h-8 w-8" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Servicio a Domicilio</h3>
                  <p className="text-muted-foreground">
                    Ofrecemos servicio de recogida y entrega a domicilio para mayor comodidad de
                    nuestros clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="policies" className="py-12">
        <div className="mb-4">
          <h2 className="text-2xl font-bold md:text-3xl">Conoce nuestros precios</h2>
          <p>Conoce nuestros precios.</p>
        </div>
        <div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">Precios y Servicios</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Servicio</TableHead>
                    <TableHead className="text-right">Precio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Diagnóstico y Presupuesto</TableCell>
                    <TableCell className="text-right">Gratis</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Reparación de Hardware</TableCell>
                    <TableCell className="text-right">$350-$500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Instalación de Software</TableCell>
                    <TableCell className="text-right">$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Limpieza y Mantenimiento</TableCell>
                    <TableCell className="text-right">$450</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Recuperación de Datos</TableCell>
                    <TableCell className="text-right">$250/gb</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Garantía y Políticas</h3>
              <ul className="text-muted-foreground space-y-4">
                <li>
                  <h4 className="font-semibold">Garantía Extendida</h4>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Ofrecemos una garantía de 6 meses en todos nuestros servicios de reparación y
                    mantenimiento.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Política de Devoluciones</h4>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Si no estás satisfecho con nuestro servicio, puedes solicitar una devolución
                    dentro de los 7 días posteriores a la entrega.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Confidencialidad de Datos</h4>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Nos comprometemos a mantener la confidencialidad de tus datos personales y de tu
                    computadora durante el proceso de reparación.
                  </p>
                </li>
                <li>
                  <h4 className="font-semibold">Servicio de Recogida y Entrega</h4>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Ofrecemos un servicio de recogida y entrega gratuito dentro del área
                    metropolitana de San Nicolas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold md:text-3xl">Conoce nuestras Polizas</h2>
          <p>Compara los diferentes planes de mantenimiento y sus características.</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan</TableHead>
              <TableHead>Cantidad de Equipos</TableHead>
              <TableHead>Limpieza</TableHead>
              <TableHead>Revisión de Hardware</TableHead>
              <TableHead>Actualización de Software</TableHead>
              <TableHead>Soporte Online</TableHead>
              <TableHead>Precio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Básico</TableCell>
              <TableCell>1-5</TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>$1,989/año</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Estándar</TableCell>
              <TableCell>6-10</TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>$3,980/año</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Premium</TableCell>
              <TableCell>11-20</TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>$7,960/año</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Business</TableCell>
              <TableCell>21-40</TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>$11,933/cada 4 meses</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Corporate</TableCell>
              <TableCell>41-60</TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <CheckIcon className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>$32,287/cada 6 meses</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section id="map" className="py-12 md:py-20">
        <div className=" mx-auto ">
          <div className="space-y-6 md:space-y-8">
            <div className="">
              <h2 className="text-2xl font-bold md:text-3xl">Visítanos en San Nicolas</h2>
              <p className="text-muted-foreground text-lg">
                Nuestra tienda está ubicada en el corazón de San Nicolas, ofreciendo un servicio
                cercano y de confianza.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.81600716982!2d-100.26150302403452!3d25.743597509351968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb8aec2c0337%3A0xfe00a55ccb599b9e!2sKJ%20Tecnologies!5e0!3m2!1sen!2smx!4v1722462958746!5m2!1sen!2smx"
                  className="h-[300px] w-full max-w-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BysMax Dirección"
                ></iframe>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Dirección</h3>
                  <p className="text-muted-foreground">
                    Franco Olmedo #309, Valle de Santo Domingo, 66447 San Nicolás de los Garza, N.L.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 am - 7:00 pm
                    <br />
                    Sábados: 03:00 pm - 11:00 pm
                    <br />
                    Domingo: 08:00 am - 12:00 pm
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Contacto</h3>
                  <p className="text-muted-foreground">
                    Teléfono: 81 1369 4726
                    <br />
                    Email: contacto@kjtecnologies.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function DatabaseBackupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 5 2.69" />
      <path d="M21 9.3V5" />
      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
      <path d="M12 12v4h4" />
      <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </svg>
  )
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function MoveUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
