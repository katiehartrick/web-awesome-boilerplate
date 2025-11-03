import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from './Home'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByText('Web Awesome 3 + Vite + React')).toBeInTheDocument()
  })

  it('displays the logos and links', () => {
    render(<Home />)
    
    // Check for logo images
    const viteLogo = screen.getByAltText('Vite logo')
    const reactLogo = screen.getByAltText('React logo')
    
    expect(viteLogo).toBeInTheDocument()
    expect(reactLogo).toBeInTheDocument()
    
    // Check for external links
    const viteLink = viteLogo.closest('a')
    const reactLink = reactLogo.closest('a')
    
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
  })

  it('displays animation components', () => {
    render(<Home />)
    
    // Check for Web Awesome animations
    const animations = screen.getAllByTestId('wa-animation')
    expect(animations).toHaveLength(3)
    
    // Check specific animation types
    expect(screen.getByTestId('wa-animation')).toHaveAttribute('data-name', 'bounce')
    expect(animations[1]).toHaveAttribute('data-name', 'jello')
    expect(animations[2]).toHaveAttribute('data-name', 'heartBeat')
  })

  it('has a working counter', () => {
    render(<Home />)
    
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')
    
    // Click the button to increment counter
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
    
    // Click again
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 2')
  })

  it('displays Web Awesome icons', () => {
    render(<Home />)
    
    // Check for various icons used in the component
    expect(screen.getByTestId('wa-icon-rocket')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-globe')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-star')).toBeInTheDocument()
  })

  it('displays callout components', () => {
    render(<Home />)
    
    // Check for Web Awesome callouts
    const callouts = screen.getAllByTestId('wa-callout')
    expect(callouts.length).toBeGreaterThan(0)
  })

  it('displays card components', () => {
    render(<Home />)
    
    // Check for Web Awesome cards
    const cards = screen.getAllByTestId('wa-card')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('has proper link attributes for external links', () => {
    render(<Home />)
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i })
    const reactLink = screen.getByRole('link', { name: /react logo/i })
    
    expect(viteLink).toHaveAttribute('target', '_blank')
    expect(viteLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(reactLink).toHaveAttribute('target', '_blank')
    expect(reactLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})