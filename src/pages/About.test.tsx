import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />)
    expect(screen.getByText('About Web Awesome')).toBeInTheDocument()
  })

  it('displays the main heading with icons', () => {
    render(<About />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('About Web Awesome')
    
    // Check for icons in the heading
    expect(screen.getByTestId('wa-icon-info-circle')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-star')).toBeInTheDocument()
  })

  it('displays the description paragraph', () => {
    render(<About />)
    
    expect(screen.getByText('Learn more about this amazing icon library and React integration.')).toBeInTheDocument()
  })

  it('displays the branded callout with lightbulb icon', () => {
    render(<About />)
    
    const callout = screen.getByTestId('wa-callout')
    expect(callout).toHaveAttribute('data-variant', 'brand')
    expect(screen.getByTestId('wa-icon-lightbulb')).toBeInTheDocument()
    expect(screen.getByText('What is Web Awesome?')).toBeInTheDocument()
    expect(screen.getByText('Web Awesome is a comprehensive web component library.')).toBeInTheDocument()
  })

  it('displays feature cards', () => {
    render(<About />)
    
    const cards = screen.getAllByTestId('wa-card')
    expect(cards.length).toBeGreaterThanOrEqual(2)
    
    // Check for Performance card
    expect(screen.getByText('Performance')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-rocket')).toBeInTheDocument()
    expect(screen.getByText(/Lightning-fast rendering/)).toBeInTheDocument()
    
    // Check for Customizable card
    expect(screen.getByText('Customizable')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-palette')).toBeInTheDocument()
  })

  it('has proper structure with Web Awesome CSS classes', () => {
    render(<About />)
    
    // Check for Web Awesome CSS utility classes
    const stackElement = screen.getByText('About Web Awesome').closest('.wa-stack')
    expect(stackElement).toHaveClass('wa-stack', 'wa-align-items-center')
    
    const gridElement = screen.getByText('Performance').closest('.wa-grid')
    expect(gridElement).toHaveClass('wa-grid')
  })

  it('displays all expected icons', () => {
    render(<About />)
    
    // Check for all icons used in the About page
    const expectedIcons = ['info-circle', 'star', 'lightbulb', 'rocket', 'palette']
    
    expectedIcons.forEach(iconName => {
      expect(screen.getByTestId(`wa-icon-${iconName}`)).toBeInTheDocument()
    })
  })

  it('has correct heading hierarchy', () => {
    render(<About />)
    
    // Main heading
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Web Awesome')
    
    // Card headings
    expect(screen.getByRole('heading', { level: 3, name: /Performance/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Customizable/ })).toBeInTheDocument()
  })
})