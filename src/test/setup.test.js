import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Test Environment Setup', () => {
  describe('Vitest Configuration', () => {
    it('should have globals enabled', () => {
      expect(describe).toBeDefined();
      expect(it).toBeDefined();
      expect(expect).toBeDefined();
    });

    it('should support vi (Vitest mock utilities)', () => {
      expect(vi).toBeDefined();
      expect(vi.fn).toBeDefined();
      expect(vi.mock).toBeDefined();
    });
  });

  describe('React Testing Library Setup', () => {
    it('should import render without errors', () => {
      expect(render).toBeDefined();
      expect(typeof render).toBe('function');
    });

    it('should import screen without errors', () => {
      expect(screen).toBeDefined();
    });

    it('should render a simple component', () => {
      const TestComponent = () => <div>Test</div>;
      const { container } = render(<TestComponent />);
      expect(container).toBeDefined();
      expect(container.textContent).toBe('Test');
    });
  });

  describe('jest-dom Matchers', () => {
    it('should have toBeInTheDocument matcher', () => {
      const TestComponent = () => <div data-testid="test">Content</div>;
      render(<TestComponent />);
      expect(screen.getByTestId('test')).toBeInTheDocument();
    });

    it('should have toHaveTextContent matcher', () => {
      const TestComponent = () => <div>Hello World</div>;
      const { container } = render(<TestComponent />);
      expect(container.firstChild).toHaveTextContent('Hello World');
    });

    it('should have toHaveAttribute matcher', () => {
      const TestComponent = () => <div data-test="value">Content</div>;
      const { container } = render(<TestComponent />);
      expect(container.firstChild).toHaveAttribute('data-test', 'value');
    });
  });

  describe('JSDOM Environment', () => {
    it('should have window object', () => {
      expect(window).toBeDefined();
    });

    it('should have document object', () => {
      expect(document).toBeDefined();
    });

    it('should support querySelector', () => {
      const div = document.createElement('div');
      div.className = 'test-class';
      document.body.appendChild(div);
      
      const found = document.querySelector('.test-class');
      expect(found).toBeDefined();
      
      document.body.removeChild(div);
    });

    it('should have matchMedia mock', () => {
      expect(window.matchMedia).toBeDefined();
      const mq = window.matchMedia('(min-width: 768px)');
      expect(mq).toBeDefined();
      expect(mq.matches).toBeDefined();
    });
  });

  describe('GSAP Mocks', () => {
    it('should have gsap mock available', async () => {
      const gsap = await import('gsap');
      expect(gsap.default).toBeDefined();
      expect(gsap.default.to).toBeDefined();
    });

    it('should mock gsap.to function', async () => {
      const gsap = await import('gsap');
      const result = gsap.default.to({}, { x: 100 });
      expect(result).toBeDefined();
      expect(vi.isMockFunction(gsap.default.to)).toBe(true);
    });

    it('should have useGSAP mock', async () => {
      const { useGSAP } = await import('@gsap/react');
      expect(useGSAP).toBeDefined();
      expect(vi.isMockFunction(useGSAP)).toBe(true);
    });
  });

  describe('Element.getBoundingClientRect Mock', () => {
    it('should have getBoundingClientRect mock', () => {
      const div = document.createElement('div');
      const rect = div.getBoundingClientRect();
      
      expect(rect).toBeDefined();
      expect(rect.width).toBeDefined();
      expect(rect.height).toBeDefined();
      expect(rect.top).toBeDefined();
      expect(rect.left).toBeDefined();
    });

    it('should return consistent values', () => {
      const div = document.createElement('div');
      const rect = div.getBoundingClientRect();
      
      expect(rect.width).toBe(100);
      expect(rect.height).toBe(50);
      expect(rect.left).toBe(0);
      expect(rect.top).toBe(0);
    });
  });

  describe('Cleanup', () => {
    it('should cleanup after each test', () => {
      const TestComponent = () => <div data-testid="cleanup-test">Test</div>;
      render(<TestComponent />);
      
      // After this test, cleanup should remove the component
      expect(screen.getByTestId('cleanup-test')).toBeInTheDocument();
    });
  });

  describe('Path Aliases', () => {
    it('should resolve #components alias', async () => {
      const module = await import('#components');
      expect(module).toBeDefined();
    });

    it('should resolve #constants alias', async () => {
      const module = await import('#constants');
      expect(module).toBeDefined();
    });
  });
});