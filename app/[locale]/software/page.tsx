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

const Software = dynamic(() => import('@/components/software/Software'), {
  loading: () => <Loading />,
  ssr: false,
})

export default async function Page({ params: { locale } }) {
  const { t } = await createTranslation(locale, 'software')

  return (
    <>
      <section className="bg-muted py-12 md:py-20 lg:py-28">
        <div className=" grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Free Engineering Software for Students
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md md:text-xl">
              Explore a wide range of free engineering software tools to enhance your academic
              journey. Discover the perfect programs to support your studies and projects.
            </p>
            <div className="mt-6 flex gap-4">
              <Button>Explore Programs</Button>
              <Button variant="outline">Download</Button>
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
              Get in Touch
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md md:text-xl">
              Have questions or need assistance? Don't hesitate to reach out to our team. We're here
              to help you make the most of these engineering software tools.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MailIcon className="text-primary h-5 w-5" />
                <a href="/#">support@engineeringsoftware.com</a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-primary h-5 w-5" />
                <a href="/#">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
          <div>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
