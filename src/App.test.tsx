import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

// Helper function to render App with router
const renderWithRouter = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    renderWithRouter()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders navigation component', () => {
    renderWithRouter()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders home page by default', () => {
    renderWithRouter(['/'])
    expect(screen.getByText('Web Awesome 3 + Vite + React')).toBeInTheDocument()
  })

  it('renders about page when navigating to /about', () => {
    renderWithRouter(['/about'])
    expect(screen.getByText('About Web Awesome')).toBeInTheDocument()
  })

  it('has correct CSS classes applied', () => {
    renderWithRouter()
    const appDiv = screen.getByRole('main').parentElement
    expect(appDiv).toHaveClass('app')
    expect(screen.getByRole('main')).toHaveClass('main-content')
  })
})