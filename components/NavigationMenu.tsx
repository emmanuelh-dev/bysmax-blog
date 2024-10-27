'use client'
import * as React from 'react'
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
import { nav } from '@/data/headerNavLinks'
import { useParams } from 'next/navigation'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import { LucideIcon } from 'lucide-react'

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string
  icon?: LucideIcon
}

export default function Navigation() {
  const locale = useParams()?.locale as LocaleTypes

  // const { t } = await createTranslation(locale, 'software')

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {nav.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.links.map((item) => (
                  <ListItem
                    className="flex items-center text-xs"
                    key={item.title}
                    title={item.title}
                    icon={item.icon || undefined}
                    href={`/${locale}${item.href}`}
                  >
                    {item.description && item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
      <li className="flex items-center">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2">
              {Icon && (
                <div className="rounded-md border border-neutral-100 p-1 dark:border-neutral-800">
                  <Icon className="block size-6 p-1" />
                </div>
              )}
              <div>
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug text-neutral-400">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
