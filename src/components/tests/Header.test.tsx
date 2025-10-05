/**
 * Test Header component
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@test/test-utils'
import Header from '../Header/Header'

describe('Header component', () => {
  it('should render without crashing', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should contain navigation links', () => {
    render(<Header />)
    // Check for common navigation elements
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have proper navigation structure', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})
