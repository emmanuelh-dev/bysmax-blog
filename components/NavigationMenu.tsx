'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '../lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { allCursos, allServicios } from 'contentlayer/generated'

const services = allCoreContent(allServicios)
const courses = allCoreContent(allCursos)

const nav = [
  {
    title: 'Servicios',
    links: services.map((s) => {
      return {
        title: s.title,
        description: s.summary,
        href: s.slug,
      }
    }),
  },
  {
    title: 'Cursos',
    links: courses.map((s) => {
      return {
        title: s.title,
        description: s.summary,
        href: s.slug,
      }
    }),
  },
]

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hola!</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">BysMax</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Infraestructura tecnológica, servicios personalizados y guías de alta calidad
                      para pequeñas y medianas empresas.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/cursos" title="Cursos">
                Explora nuestros cursos de alta calidad diseñados para facilitar el aprendizaje y
                hacer que la electrónica y tecnología sean accesibles para todos.
              </ListItem>
              <ListItem href="/blog" title="Guías/Tutoriales">
                Accede a nuestras guías y tutoriales detallados que te ayudarán a modernizar tu
                empresa con las últimas tecnologías.
              </ListItem>
              <ListItem href="/servicios" title="Servicios">
                Descubre nuestros servicios personalizados, desde la instalación de servidores hasta
                la personalización completa de aplicaciones, todo con la calidad y accesibilidad que
                nos define.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {nav.map((item) => (
          <NavigationMenuItem>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.links.map((item) => (
                  <ListItem key={item.title} title={item.title} href={item.href}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
