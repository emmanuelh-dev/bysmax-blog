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
  
  // Redirección específica para compuertas lógicas
  if (pathname === '/blog/guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486' || 
      pathname === '/es/blog/guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486' ||
      pathname === '/en/blog/guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486') {
    let targetPath = '/compuertas-logicas'
    if (pathname.startsWith('/es/')) {
      targetPath = '/es/compuertas-logicas'
    } else if (pathname.startsWith('/en/')) {
      targetPath = '/en/compuertas-logicas'
    }
    return NextResponse.redirect(new URL(targetPath, request.url), 301)
  }
  
  // Redirección específica para Proteus
  if (pathname === '/blog/proteus/como-descargar-e-instalar-proteus' || 
      pathname === '/es/blog/proteus/como-descargar-e-instalar-proteus' ||
      pathname === '/en/blog/proteus/como-descargar-e-instalar-proteus') {
    let targetPath = '/software/proteus'
    if (pathname.startsWith('/es/')) {
      targetPath = '/es/software/proteus'
    } else if (pathname.startsWith('/en/')) {
      targetPath = '/en/software/proteus'
    }
    return NextResponse.redirect(new URL(targetPath, request.url), 301)
  }
  
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
    
    // Redirección específica para compuertas lógicas
    '/blog/guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486',
    '/es/blog/guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486',
    '/en/blog/guia-completa-sobre-las-compuertas-logicas-7408-7432-7404-7400-y-7486',
    
    // Redirección específica para Proteus
    '/blog/proteus/como-descargar-e-instalar-proteus',
    '/es/blog/proteus/como-descargar-e-instalar-proteus',
    '/en/blog/proteus/como-descargar-e-instalar-proteus',
    
    // Sitemap y archivos específicos que necesitan locale
    '/sitemap.xml',
  ]
}
