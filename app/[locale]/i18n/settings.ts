import type { InitOptions } from 'i18next'
import { fallbackLng, secondLng, thirtLng } from './locales'

export const locales = [fallbackLng, secondLng, thirtLng] as const
export type LocaleTypes = (typeof locales)[number]
export const defaultNS = 'common'

export function getOptions(locale = fallbackLng, ns = defaultNS): InitOptions {
  return {
    debug: false,
    supportedLngs: locales,
    fallbackLng,
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
