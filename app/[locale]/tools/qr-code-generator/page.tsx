import { Metadata } from 'next'
import QRGenerator from './components/qr-generator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Smartphone, Globe, Mail, MessageSquare, Wifi } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Generador de Códigos QR Avanzado | Crea QR para cualquier propósito',
  description:
    'Crea códigos QR personalizados para URLs, contactos, teléfonos, emails, SMS y redes WiFi. Generador gratuito y fácil de usar.',
  keywords:
    'generador QR, código QR, QR personalizado, QR para URL, QR para contacto, QR para WiFi',
}

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Generador de Códigos QR Avanzado
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Crea códigos QR personalizados para cualquier propósito. Fácil, rápido y gratuito.
        </p>
      </section>

      <section className="mb-12">
        <QRGenerator />
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold">
          ¿Por qué usar nuestro generador de QR?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2" />
                Versátil
              </CardTitle>
            </CardHeader>
            <CardContent>
              Crea QR para URLs, contactos, teléfonos, emails, SMS y redes WiFi.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2" />
                Responsive
              </CardTitle>
            </CardHeader>
            <CardContent>
              Funciona perfectamente en dispositivos móviles y de escritorio.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowRight className="mr-2" />
                Fácil de usar
              </CardTitle>
            </CardHeader>
            <CardContent>Interfaz intuitiva que te permite crear QR en segundos.</CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Tipos de códigos QR que puedes crear
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2" />
                URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              Dirige a los usuarios directamente a tu sitio web o página de destino.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2" />
                Teléfono
              </CardTitle>
            </CardHeader>
            <CardContent>Permite a los usuarios llamarte con un solo escaneo.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>Facilita el contacto por correo electrónico de forma rápida.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" />
                SMS
              </CardTitle>
            </CardHeader>
            <CardContent>Envía mensajes predefinidos con un simple escaneo.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wifi className="mr-2" />
                WiFi
              </CardTitle>
            </CardHeader>
            <CardContent>Comparte fácilmente las credenciales de tu red WiFi.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2" />
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>Comparte tus datos de contacto de forma instantánea.</CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
