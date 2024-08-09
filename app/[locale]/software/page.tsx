import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createTranslation } from '@/app/[locale]/i18n/server'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import dynamic from 'next/dynamic'
import Loading from '@/components/software/Loading'
import { MailIcon, PhoneIcon } from 'lucide-react'
import { title } from '@/data/siteMetadata'

const Software = dynamic(() => import('@/components/software/Software'), {
  loading: () => <Loading />,
  ssr: false,
})

export async function generateMetadata({ params: { slug, locale } }) {
  const { t } = await createTranslation(locale, 'software')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Page({ params: { locale } }) {
  const { t } = await createTranslation(locale, 'software')

  return (
    <>
      <section className="bg-muted py-12 md:py-20 lg:py-28">
        <div className=" grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-sm text-neutral-500">{t('title')}</h1>
            <p className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('heading')}
            </p>
            <p className="text-muted-foreground mt-4 max-w-md md:text-xl">{t('description')}</p>
            <div className="mt-6 flex gap-4">
              <Link className={buttonVariants({ variant: 'default' })} href="#programs">
                {t('show')}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg"
              width={500}
              height={400}
              alt="Hero Image"
              className="rounded-xl"
              style={{ aspectRatio: '500/400', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
      <Software locale={locale} />
      <section id="contact" className="bg-background py-12 md:py-20 lg:py-28">
        <div className=" grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('contact')}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md md:text-xl">{t('contactText')}</p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MailIcon className="text-primary h-5 w-5" />
                <a href="mailto:info@bysmax.com">info@bysmax.com</a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-primary h-5 w-5" />
                <a href="tel:8126060795">+52 8126060795</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
