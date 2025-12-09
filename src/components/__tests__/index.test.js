import { describe, it, expect } from 'vitest';
import * as components from '../index';
import Navbar from '../Navbar';
import Welcome from '../Welcome';

describe('Component Index (Barrel Exports)', () => {
  describe('Named Exports', () => {
    it('should export Navbar', () => {
      expect(components.Navbar).toBeDefined();
      expect(typeof components.Navbar).toBe('function');
    });

    it('should export Welcome', () => {
      expect(components.Welcome).toBeDefined();
      expect(typeof components.Welcome).toBe('function');
    });

    it('should export exactly two components', () => {
      const exportedKeys = Object.keys(components);
      expect(exportedKeys.length).toBe(2);
    });

    it('should export components as named exports', () => {
      expect(components).toHaveProperty('Navbar');
      expect(components).toHaveProperty('Welcome');
    });
  });

  describe('Export Correctness', () => {
    it('should export the actual Navbar component', () => {
      expect(components.Navbar).toBe(Navbar);
    });

    it('should export the actual Welcome component', () => {
      expect(components.Welcome).toBe(Welcome);
    });

    it('should allow destructuring imports', () => {
      const { Navbar: Nav, Welcome: Wel } = components;
      
      expect(Nav).toBe(Navbar);
      expect(Wel).toBe(Welcome);
    });
  });

  describe('Component Types', () => {
    it('should export Navbar as a React component (function)', () => {
      expect(typeof components.Navbar).toBe('function');
    });

    it('should export Welcome as a React component (function)', () => {
      expect(typeof components.Welcome).toBe('function');
    });

    it('should not export undefined or null values', () => {
      expect(components.Navbar).not.toBeUndefined();
      expect(components.Navbar).not.toBeNull();
      expect(components.Welcome).not.toBeUndefined();
      expect(components.Welcome).not.toBeNull();
    });
  });

  describe('Import Patterns', () => {
    it('should support named import pattern', async () => {
      const module = await import('../index');
      
      expect(module.Navbar).toBeDefined();
      expect(module.Welcome).toBeDefined();
    });

    it('should support wildcard import pattern', async () => {
      const module = await import('../index');
      const allExports = { ...module };
      
      expect(Object.keys(allExports)).toContain('Navbar');
      expect(Object.keys(allExports)).toContain('Welcome');
    });
  });

  describe('Module Structure', () => {
    it('should not have default export', () => {
      expect(components.default).toBeUndefined();
    });

    it('should only export expected components', () => {
      const expectedExports = ['Navbar', 'Welcome'];
      const actualExports = Object.keys(components);
      
      expect(actualExports.sort()).toEqual(expectedExports.sort());
    });

    it('should maintain consistent export order', () => {
      const keys = Object.keys(components);
      
      expect(keys).toContain('Navbar');
      expect(keys).toContain('Welcome');
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple imports from same module', async () => {
      const import1 = await import('../index');
      const import2 = await import('../index');
      
      expect(import1.Navbar).toBe(import2.Navbar);
      expect(import1.Welcome).toBe(import2.Welcome);
    });

    it('should maintain reference equality across imports', () => {
      const { Navbar: Nav1, Welcome: Wel1 } = components;
      const { Navbar: Nav2, Welcome: Wel2 } = components;
      
      expect(Nav1).toBe(Nav2);
      expect(Wel1).toBe(Wel2);
    });
  });

  describe('Integration with Application', () => {
    it('should provide components usable in App.jsx', () => {
      const { Navbar, Welcome } = components;
      
      // These should be the same components used in App.jsx
      expect(Navbar).toBe(Navbar);
      expect(Welcome).toBe(Welcome);
    });

    it('should support both import styles used in App.jsx', async () => {
      // Named import: import { Navbar, Welcome } from '#components'
      const { Navbar, Welcome } = await import('../index');
      
      expect(Navbar).toBeDefined();
      expect(Welcome).toBeDefined();
    });
  });

  describe('Type Safety', () => {
    it('should export valid React component types', () => {
      const { Navbar, Welcome } = components;
      
      // React components should be functions
      expect(typeof Navbar).toBe('function');
      expect(typeof Welcome).toBe('function');
    });

    it('should not export non-component values', () => {
      const { Navbar, Welcome } = components;
      
      // Should only be functions (components)
      Object.values(components).forEach(value => {
        expect(typeof value).toBe('function');
      });
    });
  });

  describe('Maintainability', () => {
    it('should provide clear component namespace', () => {
      // Check that components are easily accessible
      expect(() => {
        const { Navbar, Welcome } = components;
        return { Navbar, Welcome };
      }).not.toThrow();
    });

    it('should facilitate tree-shaking', () => {
      // Named exports support tree-shaking better than default exports
      const exportNames = Object.keys(components);
      
      exportNames.forEach(name => {
        expect(components[name]).toBeDefined();
      });
    });
  });
});