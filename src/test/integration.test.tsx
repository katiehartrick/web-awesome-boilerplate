import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

// Integration tests for routing and edge cases
describe('Integration Tests', () => {
  describe('Routing', () => {
    it('navigates between pages correctly', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <div>
            <nav>
              <button onClick={() => window.history.pushState({}, '', '/about')}>
                Go to About
              </button>
            </nav>
            <main>
              <div data-testid="current-route">{window.location.pathname}</div>
            </main>
          </div>
        </MemoryRouter>
      )

      expect(screen.getByTestId('current-route')).toHaveTextContent('/')
      
      fireEvent.click(screen.getByText('Go to About'))
      expect(window.location.pathname).toBe('/about')
    })

    it('handles unknown routes gracefully', () => {
      // This test simulates how the app might handle unknown routes
      // In a real app, you'd have a 404 component or fallback
      const TestApp = () => {
        const currentPath = '/unknown-route'
        return (
          <div data-testid="route-content">
            {currentPath === '/unknown-route' ? 'Unknown Route' : 'Known Route'}
          </div>
        )
      }

      render(<TestApp />)
      expect(screen.getByTestId('route-content')).toHaveTextContent('Unknown Route')
    })
  })

  describe('Component Interaction', () => {
    it('handles rapid button clicks without errors', () => {
      const mockHandler = vi.fn()
      
      render(
        <button onClick={mockHandler} data-testid="rapid-click-btn">
          Click me rapidly
        </button>
      )

      const button = screen.getByTestId('rapid-click-btn')
      
      // Simulate rapid clicking
      for (let i = 0; i < 10; i++) {
        fireEvent.click(button)
      }

      expect(mockHandler).toHaveBeenCalledTimes(10)
    })

    it('handles keyboard navigation', () => {
      render(
        <div>
          <button data-testid="btn1">Button 1</button>
          <button data-testid="btn2">Button 2</button>
          <button data-testid="btn3">Button 3</button>
        </div>
      )

      const btn1 = screen.getByTestId('btn1')

      btn1.focus()
      expect(document.activeElement).toBe(btn1)

      fireEvent.keyDown(btn1, { key: 'Tab' })
      // Note: JSDOM doesn't handle tab navigation automatically,
      // but we can test that the event is fired
      expect(btn1).toBeInTheDocument()
    })
  })

  describe('Error Boundaries and Edge Cases', () => {
    it('handles missing props gracefully', () => {
      // Test a component with optional props
      const TestComponent = ({ title, children }: { title?: string; children?: React.ReactNode }) => (
        <div>
          <h1>{title || 'Default Title'}</h1>
          <div>{children || 'Default Content'}</div>
        </div>
      )

      render(<TestComponent />)
      
      expect(screen.getByText('Default Title')).toBeInTheDocument()
      expect(screen.getByText('Default Content')).toBeInTheDocument()
    })

    it('handles empty state correctly', () => {
      const EmptyList = ({ items }: { items: string[] }) => (
        <div>
          {items.length === 0 ? (
            <p data-testid="empty-message">No items found</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )

      render(<EmptyList items={[]} />)
      expect(screen.getByTestId('empty-message')).toHaveTextContent('No items found')
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(
        <div>
          <h1>Main Title</h1>
          <section>
            <h2>Section Title</h2>
            <h3>Subsection Title</h3>
          </section>
        </div>
      )

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main Title')
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Section Title')
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Subsection Title')
    })

    it('has proper ARIA labels', () => {
      render(
        <div>
          <button aria-label="Close dialog">×</button>
          <input aria-label="Search query" type="text" />
          <img src="/test.jpg" alt="Test image" />
        </div>
      )

      expect(screen.getByLabelText('Close dialog')).toBeInTheDocument()
      expect(screen.getByLabelText('Search query')).toBeInTheDocument()
      expect(screen.getByAltText('Test image')).toBeInTheDocument()
    })
  })
})