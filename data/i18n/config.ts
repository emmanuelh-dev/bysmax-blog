import { type LocaleContent } from './types'

// Centralized i18n configuration
export const i18nConfig = {
  defaultLocale: 'es',
  locales: ['es', 'en', 'pt', 'fr'],
  localeMetadata: {
    es: {
      name: 'Español',
      locale: 'es_MX',
      dateFormat: 'es-MX'
    },
    en: {
      name: 'English',
      locale: 'en_US',
      dateFormat: 'en-US'
    },
    pt: {
      name: 'Português',
      locale: 'pt_BR',
      dateFormat: 'pt-BR'
    },
    fr: {
      name: 'Français',
      locale: 'fr_FR',
      dateFormat: 'fr-FR'
    }
  }
}

// Export individual configurations for backward compatibility
export const fallbackLng = i18nConfig.defaultLocale
export const secondLng = 'en'
export const thirtLng = 'fr'

// Helper functions for i18n
export function getLocaleMetadata(locale: string) {
  return i18nConfig.localeMetadata[locale] || i18nConfig.localeMetadata[fallbackLng]
}

export function getDateFormat(locale: string) {
  return getLocaleMetadata(locale).dateFormat
}