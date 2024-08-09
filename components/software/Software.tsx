import { t } from 'i18next'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { CardHeader, CardTitle, CardDescription, CardContent, Card } from '../ui/card'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from '../ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { FilterIcon } from 'lucide-react'
import { createTranslation } from '@/app/[locale]/i18n/server'
import { Badge } from '../ui/badge'

export default async function Software({ locale }) {
  const { t } = await createTranslation(locale, 'software')
  return (
    <section id="programs" className="bg-muted py-12 md:py-20 lg:py-28">
      <div className="">
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('softwaresTitle')}
          </h2>
          <p className="text-muted-foreground max-w-[700px] md:text-xl">
            {t('softawreDescription')}
          </p>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="flex hidden items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <FilterIcon className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {(t('cards', { returnObjects: true }) as unknown as any[]).map((card, index) => (
                  <DropdownMenuCheckboxItem key={card.badge.label}>
                    {card.badge.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative max-w-md flex-1">
              <div className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search programs..."
                className="bg-background w-full rounded-lg pl-8"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(t('cards', { returnObjects: true }) as unknown as any[]).map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant={'outline'}>{card.badge.label}</Badge>
                    <Link
                      href={`/${locale}/${card.link}`}
                      className={buttonVariants({ variant: 'default' })}
                    >
                      {card.linkText}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Link href={`/${locale}/software`} className={buttonVariants({ variant: 'link' })}>
        {t('showMore')}
      </Link>
    </section>
  )
}
