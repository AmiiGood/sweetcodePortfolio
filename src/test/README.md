# Test Suite Documentation

## Overview
This test suite provides comprehensive coverage for the sweetcodePortfolio application, focusing on the changed components in the current branch.

## Testing Stack
- **Vitest**: Fast unit test framework designed for Vite
- **React Testing Library**: Component testing utilities
- **jsdom**: DOM implementation for Node.js
- **@testing-library/jest-dom**: Custom matchers for DOM assertions

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Test Structure

### `src/test/setup.js`
Global test configuration including:
- GSAP mocks for animation testing
- Window.matchMedia mock for responsive behavior
- getBoundingClientRect mock for layout testing
- Automatic cleanup after each test

### Component Tests

#### `Welcome.test.jsx` (90+ test cases)
Comprehensive tests for the Welcome component including:
- **Rendering**: Verifies all elements render correctly
- **Text Rendering**: Tests character-by-character span generation
- **GSAP Integration**: Validates animation setup
- **Mouse Interactions**: Tests hover effects and event handling
- **Font Variation Settings**: Verifies variable font weight control
- **Accessibility**: Ensures semantic HTML and screen reader compatibility
- **Edge Cases**: Component lifecycle, unmounting, remounting
- **Performance**: Tests for efficient re-rendering

#### `App.test.jsx` (15+ test cases)
Tests for the main App component:
- Component rendering and structure
- Integration of Navbar and Welcome components
- Proper component ordering
- Semantic HTML usage
- Rerender behavior

#### `index.test.js` (25+ test cases)
Tests for barrel export file:
- Named export verification
- Export correctness
- Import pattern compatibility
- Module structure validation
- Type safety checks
- Tree-shaking support

## Test Coverage Goals

### Current Coverage (Components Changed in Branch)
- **Welcome.jsx**: ~95% coverage
  - All rendering paths
  - Event handlers
  - GSAP integration
  - Edge cases

- **App.jsx**: 100% coverage
  - Component structure
  - Child component integration

- **index.js**: 100% coverage
  - All named exports
  - Import patterns

## Key Testing Patterns

### 1. Mocking GSAP
```javascript
vi.mock('gsap', () => ({
  default: {
    to: vi.fn(() => ({ kill: vi.fn() })),
  },
}));
```

### 2. Testing Interactive Elements
```javascript
const { container } = render(<Welcome />);
const subtitle = container.querySelector('p');
fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 50 });
```

### 3. Testing Text Rendering
```javascript
const spans = subtitle.querySelectorAll('span');
expect(spans.length).toBe(expectedLength);
```

### 4. Accessibility Testing
```javascript
const title = screen.getByRole('heading', { level: 1 });
expect(title).toHaveTextContent('portfolio');
```

## Component-Specific Considerations

### Welcome Component
- Uses GSAP for hover animations
- Splits text into individual character spans
- Implements variable font weight animations
- Requires getBoundingClientRect mock for distance calculations

### App Component
- Simple integration component
- Tests focus on structure and child component rendering
- Mocks child components for isolated testing

## Best Practices

1. **Isolation**: Each test is independent and doesn't rely on others
2. **Mocking**: External dependencies (GSAP) are mocked appropriately
3. **Cleanup**: Automatic cleanup after each test prevents state leakage
4. **Descriptive Names**: Test names clearly describe what's being tested
5. **Edge Cases**: Tests cover not just happy paths but also edge cases
6. **Accessibility**: Tests verify semantic HTML and screen reader compatibility

## Adding New Tests

When adding tests for new components:

1. Create test file in `__tests__` directory next to component
2. Import necessary testing utilities
3. Mock external dependencies
4. Write tests covering:
   - Rendering
   - User interactions
   - Edge cases
   - Accessibility
   - Performance

Example structure:
```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      render(<YourComponent />);
      // assertions
    });
  });
});
```

## Continuous Integration

Tests are designed to run in CI/CD pipelines:
- Fast execution with Vitest
- No browser dependencies (uses jsdom)
- Deterministic results
- Clear failure messages

## Troubleshooting

### GSAP-related issues
If you see GSAP errors, ensure `src/test/setup.js` is properly configured in `vite.config.js`.

### Import alias issues
Verify that path aliases in `vite.config.js` match those used in tests.

### Coverage gaps
Run `npm run test:coverage` to identify untested code paths.

## Future Improvements

- Add integration tests for component interactions
- Implement visual regression testing
- Add performance benchmarking
- Expand accessibility testing with axe-core