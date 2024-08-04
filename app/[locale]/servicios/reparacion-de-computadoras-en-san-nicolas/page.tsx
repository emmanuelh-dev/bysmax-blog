import Reparacion from '@/components/servicios/Reparacion'
import { genPageMetadata } from '@/app/[locale]/seo'

export const metadata = genPageMetadata({
  title: 'Reparación de Computadoras en San Nicolas.',
  description:
    'Servicio de Mantenimiento y reparación de computadoras de alta calidad en San Nicolas.',
})
export default function Page() {
  return (
    <Reparacion site="San Nicolas.">
      <Visitanos />
    </Reparacion>
  )
}
const Visitanos = () => (
  <section id="map" className="py-12 md:py-20">
    <div className=" mx-auto ">
      <div className="space-y-6 md:space-y-8">
        <div className="">
          <h2 className="text-2xl font-bold md:text-3xl">Visítanos en San Nicolas</h2>
          <p className="text-muted-foreground text-lg">
            Nuestra tienda está ubicada en el corazón de San Nicolas, ofreciendo un servicio cercano
            y de confianza.
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
                <strong>Teléfono:</strong> 81 1369 4726
                <br />
                <strong>Email:</strong> contacto@kjtecnologies.com
              </p>
              <strong>Empresas:</strong> <a href="mailto:info@bysmax.com">info@bysmax.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
