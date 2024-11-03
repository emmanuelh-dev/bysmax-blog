import { Button } from '@/components/ui/button'
import { createTranslation } from '../i18n/server'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BysMax',
  '@id': '#A30F53F0668F4F9A8F5690994D25C936/CYLEX',
  url: 'https://bysmax.xyz/',
  telephone: ['8126060795'],
  description:
    'Tenemos mucha experiencia en el ámbito tecnológico, puedes revisar nuestro blog, nuestra página de servicios y la de contacto.\r\nYa seas un arquitecto, un pequeño negocio, un despacho de contadores, nosotros te podemos ayudar a ahorrar recursos y hacer más eficientes tus procesos.',
  paymentAccepted: [
    'Efectivo',
    "Diner's Club",
    'Factura',
    'PayPal',
    'Master Card',
    'American Express',
    'Maestro',
    'Visa',
    'Cheque',
    'Transferencia bancaria',
    'Contra reembolso',
    'Cheque de Viajero',
    'Bitcoin',
    'Apple Pay',
    'Google Pay',
  ],
  address: {
    '@type': 'PostalAddress',
    '@id': 'primary-address',
    streetAddress: 'Fovissste La Talaverna',
    addressLocality: 'Guadalupe',
    postalCode: '67110',
    addressRegion: 'Nuevo León',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '00:00',
      closes: '24:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Tuesday',
      opens: '00:00',
      closes: '24:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '00:00',
      closes: '24:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Thursday',
      opens: '00:00',
      closes: '24:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '00:00',
      closes: '24:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '00:00',
      closes: '24:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '24:00',
    },
  ],
}
export default async function Page({ params: { locale } }) {
  return <Contacto locale={locale} />
}

const Contacto = async ({ locale }) => {
  const { t } = await createTranslation(locale, 'contact')

  return (
    <section className="mx-auto max-w-xl p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-card-foreground mb-4 text-3xl font-bold">{t('hello')}</h1>
      <p className="text-muted-foreground mb-6">{t('intro')}</p>
      <p>
        Por el momento, enviar mensajes no está habilitado. Por favor, envíanos un correo o mándanos
        un WhatsApp y con gusto te responderemos.
      </p>
      <a className="block pt-4 text-primary-500" href="mailto:info@bysmax.com">
        info@bysmax.com
      </a>
      <a
        className="block py-4 text-primary-500"
        href="https://wa.me/528111913676"
        target="_blank"
        rel="noopener noreferrer"
      >
        8111913676
      </a>
      <div className="flex gap-6 ">
        <form className="w-full space-y-4">
          <div>
            <Label htmlFor="name">{t('nameLabel')}</Label>
            <Input type="text" id="name" name="name" placeholder={t('namePlaceholder')} />
          </div>
          <div>
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input type="email" id="email" name="email" placeholder={t('emailPlaceholder')} />
          </div>
          <div>
            <Label htmlFor="message">{t('messageLabel')}</Label>
            <Textarea id="message" name="message" rows={4} placeholder={t('messagePlaceholder')} />
          </div>
          <Button type="submit" className="w-full" disabled>
            {t('sendMessageButton')}
          </Button>
        </form>
      </div>
    </section>
  )
}
