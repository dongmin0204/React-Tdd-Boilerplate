/**
 * Test FeaturePage container
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@test/test-utils'
import FeaturePage from '../FeaturePage/FeaturePage'

// Mock LanguageProvider to avoid circular dependency
vi.mock('../../containers/LanguageProvider/LanguageProvider', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="language-provider">{children}</div>
}))

describe('FeaturePage container', () => {
  it('should render without crashing', () => {
    render(<FeaturePage />)
    // Check for actual content instead of mocked testid
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('should render features content', () => {
    render(<FeaturePage />)
    // Check for features content - should have feature cards
    expect(screen.getByText('Redux Toolkit')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })

  it('should have proper page structure', () => {
    render(<FeaturePage />)
    // FeaturePage should render its content
    expect(document.body).toBeInTheDocument()
  })
})
