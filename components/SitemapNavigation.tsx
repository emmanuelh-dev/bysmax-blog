import { nav } from '@/data/headerNavLinks'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface SitemapNavigationProps {
  currentSection?: string
}

export default function SitemapNavigation({ currentSection }: SitemapNavigationProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nav.map((section, index) => {
          const isActive = currentSection === section.title

          return (
            <div
              key={index}
              className={`rounded-lg border p-4 transition-all ${
                isActive
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{section.title}</h3>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {section.links.length}
                </span>
              </div>

              <div className="space-y-2">
                {section.links.slice(0, 3).map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="group flex items-center justify-between rounded p-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span className="flex items-center gap-2">
                      {link.icon && (
                        <link.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      )}
                      <span className="truncate text-gray-700 dark:text-gray-300">
                        {link.title}
                      </span>
                    </span>
                    {link.href.startsWith('http') ? (
                      <ExternalLink className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    ) : (
                      <ArrowRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    )}
                  </a>
                ))}

                {section.links.length > 3 && (
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-1 text-xs text-blue-600 dark:text-blue-400"
                    >
                      Ver {section.links.length - 3} más...
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
