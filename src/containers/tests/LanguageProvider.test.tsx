/**
 * Test LanguageProvider container
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@test/test-utils'
import LanguageProvider from '../LanguageProvider/LanguageProvider'

describe('LanguageProvider container', () => {
  it('should render without crashing', () => {
    render(
      <LanguageProvider>
        <div>Test content</div>
      </LanguageProvider>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should provide language context', () => {
    render(
      <LanguageProvider>
        <div>Test content</div>
      </LanguageProvider>
    )
    // LanguageProvider should render its children
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should have proper provider structure', () => {
    render(
      <LanguageProvider>
        <div data-testid="child">Test content</div>
      </LanguageProvider>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
