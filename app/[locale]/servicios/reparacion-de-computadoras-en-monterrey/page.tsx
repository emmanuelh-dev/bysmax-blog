import Reparacion from '@/components/servicios/Reparacion'
import { genPageMetadata } from '@/app/[locale]/seo'

export const metadata = genPageMetadata({
  title: 'Reparación de Computadoras en Monterrey.',
  description:
    'Servicio de Mantenimiento y reparación de computadoras de alta calidad en Monterrey.',
})
export default function Page() {
  return (
    <Reparacion site="Monterrey">
      <Visitanos />
    </Reparacion>
  )
}
const Visitanos = () => (
  <section id="map" className="py-12 md:py-20">
    <div className=" mx-auto ">
      <div className="space-y-6 md:space-y-8">
        <div className="">
          <h2 className="text-2xl font-bold md:text-3xl">Visítanos en Monterrey</h2>
          <p className="text-muted-foreground text-lg">
            Nuestra tienda está ubicada en el corazón de Monterrey, ofreciendo un servicio cercano y
            de confianza.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.8354720788284!2d-100.23137282403533!3d25.709870910743764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ebe8da3bf035%3A0x621a0aa0d65cbd42!2sBysMax!5e0!3m2!1sen!2smx!4v1722459492347!5m2!1sen!2smx"
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
                Athos 112, Fovissste La Talaverna, 67110 Guadalupe, N.L.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Horario</h3>
              <p className="text-muted-foreground">
                Lunes a Viernes: 9:00 am - 7:00 pm
                <br />
                Sábados: 10:00 am - 4:00 pm
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Contacto</h3>
              <p className="text-muted-foreground">
                <strong>Teléfono:</strong> 81-26-06-07-95
                <br />
                <strong>Email:</strong> info@bysmax.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
