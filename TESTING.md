# Testing Guide

This project uses **Vitest** and **React Testing Library** for comprehensive testing.

## Getting Started

### Running Tests

```bash
# Run tests in watch mode (for development)
npm test

# Run tests once (for CI/CD)
npm run test:run

# Run tests with UI (interactive browser interface)
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

### Test Files
- `src/App.test.tsx` - Tests for the main App component
- `src/components/Navigation.test.tsx` - Navigation component tests
- `src/pages/Home.test.tsx` - Home page component tests
- `src/pages/About.test.tsx` - About page component tests
- `src/test/utils.test.ts` - Utility function tests
- `src/test/integration.test.tsx` - Integration and edge case tests

### Test Setup
- `src/test/setup.ts` - Global test configuration and mocks
- `vitest.config.ts` - Vitest configuration
- Mock components for Web Awesome UI library

## Test Categories

### Unit Tests
- Component rendering
- Props handling
- State management
- Event handlers
- Utility functions

### Integration Tests
- Routing between pages
- Component interactions
- Error boundaries
- Edge cases

### Accessibility Tests
- ARIA labels
- Heading hierarchy
- Keyboard navigation
- Screen reader compatibility

## Mocking Strategy

### Web Awesome Components
All Web Awesome components are mocked in `src/test/setup.ts` to:
- Avoid external dependencies in tests
- Provide consistent test data attributes
- Ensure fast test execution

### React Router
Router components are mocked when needed to test navigation without full router setup.

## Best Practices

### Writing Tests
1. **Descriptive test names** - Use clear, specific descriptions
2. **Test behavior, not implementation** - Focus on what users see and do
3. **Use proper selectors** - Prefer accessible queries (`getByRole`, `getByLabelText`)
4. **Test error states** - Include tests for edge cases and error conditions

### Test Organization
1. **Group related tests** - Use `describe` blocks for logical grouping
2. **Setup and teardown** - Use `beforeEach`/`afterEach` for common setup
3. **Avoid test interdependence** - Each test should be independent

### Examples

#### Basic Component Test
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

#### User Interaction Test
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Button Component', () => {
  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<button onClick={handleClick}>Click me</button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

#### Router Test
```typescript
import { MemoryRouter } from 'react-router-dom'

const renderWithRouter = (component, initialEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {component}
    </MemoryRouter>
  )
}
```

## Configuration

### Vitest Config (`vitest.config.ts`)
- **Environment**: jsdom (browser-like environment)
- **Globals**: true (no need to import test functions)
- **Setup files**: Automatic setup with jest-dom matchers
- **CSS**: true (enables CSS imports in tests)

### Dependencies
- `vitest` - Fast test runner
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - Additional DOM matchers
- `jsdom` - Browser environment simulation

## Coverage

Coverage reports show:
- **Statements** - Lines of code executed
- **Branches** - Conditional paths taken
- **Functions** - Functions called
- **Lines** - Source lines covered

Aim for:
- ✅ **80%+ overall coverage**
- ✅ **Critical paths 100% covered**
- ✅ **All user-facing features tested**

## Debugging Tests

### Common Issues
1. **Element not found** - Check selectors and component rendering
2. **Async operations** - Use `waitFor` for async updates
3. **Mock issues** - Verify mock setup in `setup.ts`
4. **Router errors** - Ensure proper router wrapping

### Debug Commands
```bash
# Run specific test file
npx vitest run src/components/Navigation.test.tsx

# Run tests with detailed output
npx vitest --reporter=verbose

# Debug with browser
npm run test:ui
```

## Continuous Integration

Tests run automatically on:
- Pull requests
- Main branch commits
- Release builds

All tests must pass before code can be merged.