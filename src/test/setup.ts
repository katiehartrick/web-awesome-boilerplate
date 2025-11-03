import '@testing-library/jest-dom'
import React from 'react'
import { vi } from 'vitest'

interface MockComponentProps {
  children?: React.ReactNode
  className?: string
  variant?: string
  name?: string
  onClick?: () => void
  duration?: number
  play?: boolean
  [key: string]: any
}

// Mock Web Awesome components to avoid import issues in tests
vi.mock('@awesome.me/webawesome/dist/react', () => ({
  WaIcon: ({ name, className, ...props }: MockComponentProps) => 
    React.createElement('span', { 
      'data-testid': `wa-icon-${name}`, 
      className, 
      ...props 
    }),
  WaButton: ({ children, variant, onClick, ...props }: MockComponentProps) => 
    React.createElement('button', {
      'data-testid': 'wa-button',
      'data-variant': variant,
      onClick,
      ...props
    }, children),
  WaCallout: ({ children, variant, ...props }: MockComponentProps) => 
    React.createElement('div', {
      'data-testid': 'wa-callout',
      'data-variant': variant,
      ...props
    }, children),
  WaCard: ({ children, ...props }: MockComponentProps) => 
    React.createElement('div', {
      'data-testid': 'wa-card',
      ...props
    }, children),
  WaAnimation: ({ children, name, duration, play, ...props }: MockComponentProps) => 
    React.createElement('div', {
      'data-testid': 'wa-animation',
      'data-name': name,
      'data-duration': duration,
      'data-play': play,
      ...props
    }, children),
}))

// Global test utilities can be added here
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
})