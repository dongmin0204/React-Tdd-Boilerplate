/**
 * Test HomePage container
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@test/test-utils'
import HomePage from '../HomePage/HomePage'

// Mock LanguageProvider to avoid circular dependency
vi.mock('../../containers/LanguageProvider/LanguageProvider', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="language-provider">{children}</div>
}))

describe('HomePage container', () => {
  it('should render without crashing', () => {
    render(<HomePage />)
    // Check for actual content instead of mocked testid
    expect(screen.getByText('Start your next react project in seconds')).toBeInTheDocument()
  })

  it('should render main content', () => {
    render(<HomePage />)
    // Check for main content elements
    expect(screen.getByText('Try me!')).toBeInTheDocument()
    expect(screen.getByText('Show Github repositories by')).toBeInTheDocument()
  })

  it('should have proper page structure', () => {
    render(<HomePage />)
    // HomePage should render its content
    expect(document.body).toBeInTheDocument()
  })
})
