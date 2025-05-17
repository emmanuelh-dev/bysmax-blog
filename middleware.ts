import { NextResponse, NextRequest } from 'next/server'
import { locales } from 'app/[locale]/i18n/settings'
import { fallbackLng } from 'app/[locale]/i18n/locales'

// Cache los paths de locales para mejor rendimiento
const localePrefix = {} as { [key: string]: boolean }
locales.forEach(locale => {
  localePrefix[`/${locale}`] = true
})

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Comprobación rápida usando el objeto en caché
  if (pathname.startsWith(`/${fallbackLng}/`) || pathname === `/${fallbackLng}`) {
    const newPath = pathname === `/${fallbackLng}` ? '/' : pathname.replace(`/${fallbackLng}`, '')
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  // Verificación rápida de locale usando el objeto en caché
  let hasLocale = false
  for (const prefix of Object.keys(localePrefix)) {
    if (pathname.startsWith(prefix + '/') || pathname === prefix) {
      hasLocale = true
      break
    }
  }

  // Solo reescribir si no tiene locale
  if (!hasLocale) {
    return NextResponse.rewrite(new URL(`/${fallbackLng}${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    // Excluir recursos estáticos, API routes, etc
    '/((?!api|static|track|_next|.*\\.[^/]*$).*)',
    
    // Incluir solo las rutas principales que necesitan procesamiento de locale
    '/',
    '/(blog|about|servicios|cursos)/:path*',
    
    // Sitemap y archivos específicos que necesitan locale
    '/sitemap.xml',
  ]
}
