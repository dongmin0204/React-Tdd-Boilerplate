import en from './translations/en.json'
import de from './translations/de.json'
import ko from './translations/ko.json'
import { AppLocale, TranslationMessages } from './types'

export const DEFAULT_LOCALE = 'en' as const

export const appLocales: AppLocale[] = [
  {
    code: 'en',
    name: 'English',
    messages: en,
  },
  {
    code: 'de',
    name: 'Deutsch',
    messages: de,
  },
  {
    code: 'ko',
    name: '한국어',
    messages: ko,
  },
]

export const translationMessages: Record<string, TranslationMessages> = {
  en,
  de,
  ko,
}
