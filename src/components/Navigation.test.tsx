import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

const mockNavigate = vi.fn()

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: '/' }),
  }
})

// Helper function to render Navigation with router
const renderWithRouter = (pathname = '/') => {
  // Mock useLocation to return the desired pathname
  vi.doMock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom')
    return {
      ...actual,
      useNavigate: () => mockNavigate,
      useLocation: () => ({ pathname }),
    }
  })
  
  return render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  )
}

describe('Navigation', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renders navigation with brand logo and text', () => {
    renderWithRouter()
    
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-rocket')).toBeInTheDocument()
    expect(screen.getByText('Web Awesome Demo')).toBeInTheDocument()
  })

  it('renders home and about navigation links', () => {
    renderWithRouter()
    
    const homeButton = screen.getByText('Home').closest('button')
    const aboutButton = screen.getByText('About').closest('button')
    
    expect(homeButton).toBeInTheDocument()
    expect(aboutButton).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-home')).toBeInTheDocument()
    expect(screen.getByTestId('wa-icon-info-circle')).toBeInTheDocument()
  })

  it('navigates to home when home button is clicked', () => {
    renderWithRouter()
    
    const homeButton = screen.getByText('Home').closest('button')
    fireEvent.click(homeButton!)
    
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('navigates to about when about button is clicked', () => {
    renderWithRouter()
    
    const aboutButton = screen.getByText('About').closest('button')
    fireEvent.click(aboutButton!)
    
    expect(mockNavigate).toHaveBeenCalledWith('/about')
  })

  it('has correct CSS classes', () => {
    renderWithRouter()
    
    expect(screen.getByRole('navigation')).toHaveClass('navigation')
    expect(screen.getByText('Web Awesome Demo').parentElement).toHaveClass('nav-brand')
    expect(screen.getByRole('list')).toHaveClass('nav-links')
  })
})