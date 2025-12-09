import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock the child components
vi.mock('../Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

vi.mock('../Welcome', () => ({
  default: () => <section data-testid="welcome">Welcome</section>,
}));

describe('App Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      expect(() => render(<App />)).not.toThrow();
    });

    it('should render main element', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      expect(main).toBeInTheDocument();
    });

    it('should render Navbar component', () => {
      render(<App />);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('should render Welcome component', () => {
      render(<App />);
      expect(screen.getByTestId('welcome')).toBeInTheDocument();
    });

    it('should render both Navbar and Welcome components', () => {
      render(<App />);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('welcome')).toBeInTheDocument();
    });
  });

  describe('Component Structure', () => {
    it('should render components in correct order (Navbar before Welcome)', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      const children = Array.from(main.children);
      
      expect(children[0]).toHaveAttribute('data-testid', 'navbar');
      expect(children[1]).toHaveAttribute('data-testid', 'welcome');
    });

    it('should have exactly two direct children in main', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      
      expect(main.children.length).toBe(2);
    });

    it('should wrap components in main element', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      const navbar = screen.getByTestId('navbar');
      const welcome = screen.getByTestId('welcome');
      
      expect(main).toContainElement(navbar);
      expect(main).toContainElement(welcome);
    });
  });

  describe('Component Integration', () => {
    it('should pass no props to Navbar', () => {
      const { container } = render(<App />);
      const navbar = container.querySelector('[data-testid="navbar"]');
      
      // Navbar should exist without requiring props
      expect(navbar).toBeInTheDocument();
    });

    it('should pass no props to Welcome', () => {
      const { container } = render(<App />);
      const welcome = container.querySelector('[data-testid="welcome"]');
      
      // Welcome should exist without requiring props
      expect(welcome).toBeInTheDocument();
    });
  });

  describe('Semantic HTML', () => {
    it('should use semantic main tag', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      
      expect(main).toBeInTheDocument();
      expect(main.tagName).toBe('MAIN');
    });

    it('should be the root component', () => {
      const { container } = render(<App />);
      
      expect(container.firstChild.tagName).toBe('MAIN');
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple renders', () => {
      const { rerender } = render(<App />);
      
      expect(() => {
        rerender(<App />);
        rerender(<App />);
      }).not.toThrow();
    });

    it('should maintain structure after rerender', () => {
      const { rerender, container } = render(<App />);
      
      rerender(<App />);
      
      const main = container.querySelector('main');
      expect(main.children.length).toBe(2);
    });

    it('should cleanup properly on unmount', () => {
      const { unmount } = render(<App />);
      
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('Snapshot Consistency', () => {
    it('should maintain consistent structure', () => {
      const { container: container1 } = render(<App />);
      const { container: container2 } = render(<App />);
      
      expect(container1.innerHTML).toBe(container2.innerHTML);
    });
  });
});