import { createI18n } from 'next-international'

export type I8nFunction = (key: string) => string

export const {
  useI18n,
  useScopedI18n,
  I18nProvider,
  getLocaleProps,
  useChangeLocale,
  useCurrentLocale,
  defineLocale,
} = createI18n({
  en: () => import('./en'),
  fr: () => import('./fr'),
  pt: () => import('./pt'),
})
