/**
 * Test App component
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@test/test-utils'
import App from '../App'

// Mock LanguageProvider to avoid circular dependency
vi.mock('../../containers/LanguageProvider/LanguageProvider', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="language-provider">{children}</div>
}))

describe('App component', () => {
  it('should render without crashing', () => {
    render(<App />, { withRouter: false }) // App already has Router, so don't add another
    expect(screen.getByTestId('language-provider')).toBeInTheDocument()
  })

  it('should render header', () => {
    render(<App />, { withRouter: false })
    // Header should be present (assuming it has a test id or specific content)
    expect(document.querySelector('header, nav, [role="navigation"]')).toBeInTheDocument()
  })

  it('should render footer', () => {
    render(<App />, { withRouter: false })
    // Footer should be present (assuming it has a test id or specific content)
    expect(document.querySelector('footer')).toBeInTheDocument()
  })

  it('should render main content area', () => {
    render(<App />, { withRouter: false })
    expect(document.querySelector('main')).toBeInTheDocument()
  })
})
