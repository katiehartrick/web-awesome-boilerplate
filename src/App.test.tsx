import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

// Helper function to render App
const renderApp = () => {
  // App already has a BrowserRouter, so we can render it directly
  return render(<App />)
}

describe('App', () => {
  it('renders without crashing', () => {
    renderApp()
    expect(document.body).toBeInTheDocument()
  })

  it('renders navigation component', () => {
    renderApp()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders main content area', () => {
    renderApp()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('has correct CSS classes applied', () => {
    renderApp()
    const mainElement = screen.getByRole('main')
    expect(mainElement).toHaveClass('wa-stack', 'wa-align-items-stretch')
    expect(mainElement.parentElement).toHaveClass('app', 'wa-stack', 'wa-align-items-stretch')
  })

  it('renders the app structure correctly', () => {
    renderApp()
    
    // Check that navigation and main content are present
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    
    // Check that we can find content from the default route (Home)
    expect(screen.getByText('Web Awesome 3 + Vite + React')).toBeInTheDocument()
  })
})