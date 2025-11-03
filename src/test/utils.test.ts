import { describe, it, expect } from 'vitest'

// Simple utility functions for testing
export const add = (a: number, b: number): number => a + b
export const multiply = (a: number, b: number): number => a * b
export const formatName = (first: string, last: string): string => `${first} ${last}`

describe('Utility Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5)
    })

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5)
      expect(add(5, 0)).toBe(5)
    })
  })

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12)
    })

    it('should handle zero multiplication', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    it('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6)
    })
  })

  describe('formatName', () => {
    it('should format first and last name', () => {
      expect(formatName('John', 'Doe')).toBe('John Doe')
    })

    it('should handle empty strings', () => {
      expect(formatName('', 'Doe')).toBe(' Doe')
      expect(formatName('John', '')).toBe('John ')
    })
  })
})