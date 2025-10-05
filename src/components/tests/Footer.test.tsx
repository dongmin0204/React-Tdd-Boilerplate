/**
 * Test Footer component
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@test/test-utils'
import Footer from '../Footer/Footer'

describe('Footer component', () => {
  it('should render without crashing', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('should contain footer content', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should have proper footer structure', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.tagName).toBe('FOOTER')
  })
})
