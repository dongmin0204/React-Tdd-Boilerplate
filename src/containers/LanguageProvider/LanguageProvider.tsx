import React from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import { appLocales } from '../../i18n'

function LanguageProvider({ children }) {
  const locale = useSelector((state) => state.language.locale)
  
  const currentLocale = appLocales.find(lang => lang.code === locale) || appLocales[0]

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={currentLocale.messages}
    >
      {children}
    </IntlProvider>
  )
}

export default LanguageProvider
