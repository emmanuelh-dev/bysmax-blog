const { i18nConfig } = require('../../../data/i18n/config')

const fallbackLng = i18nConfig.defaultLocale
const secondLng = i18nConfig.locales[1]
const thirtLng = i18nConfig.locales[2]

module.exports = { fallbackLng, secondLng, thirtLng }
