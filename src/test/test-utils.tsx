/**
 * Test utilities for React components
 */

import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { store } from '../store'
import { DEFAULT_LOCALE, translationMessages } from '../i18n'

// Mock LanguageProvider to avoid circular dependency
const MockLanguageProvider = ({ children }: { children: React.ReactNode }) => (
  <IntlProvider
    locale={DEFAULT_LOCALE}
    messages={translationMessages[DEFAULT_LOCALE]}
  >
    {children}
  </IntlProvider>
)

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  preloadedState?: any
  store?: any
  locale?: string
  messages?: any
  withRouter?: boolean
  withIntl?: boolean
}

const AllTheProviders = ({ 
  children, 
  withRouter = true, 
  withIntl = true,
  locale = DEFAULT_LOCALE,
  messages = translationMessages[DEFAULT_LOCALE]
}: {
  children: React.ReactNode
  withRouter?: boolean
  withIntl?: boolean
  locale?: string
  messages?: any
}) => {
  let content = children

  if (withIntl) {
    content = <IntlProvider locale={locale} messages={messages}>{content}</IntlProvider>
  }

  if (withRouter) {
    content = <BrowserRouter>{content}</BrowserRouter>
  }

  return (
    <Provider store={store}>
      {content}
    </Provider>
  )
}

const customRender = (
  ui: React.ReactElement,
  {
    withRouter = true,
    withIntl = true,
    locale = DEFAULT_LOCALE,
    messages = translationMessages[DEFAULT_LOCALE],
    ...renderOptions
  }: CustomRenderOptions = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <AllTheProviders
      withRouter={withRouter}
      withIntl={withIntl}
      locale={locale}
      messages={messages}
    >
      {children}
    </AllTheProviders>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Export individual providers for specific use cases
export const renderWithProviders = customRender
export const renderWithRouter = (ui: React.ReactElement, options: CustomRenderOptions = {}) =>
  customRender(ui, { withIntl: false, ...options })
export const renderWithIntl = (ui: React.ReactElement, options: CustomRenderOptions = {}) =>
  customRender(ui, { withRouter: false, ...options })
export { MockLanguageProvider }
