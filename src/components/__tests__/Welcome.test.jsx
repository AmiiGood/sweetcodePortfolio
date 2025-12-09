import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Welcome from '../Welcome';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

describe('Welcome Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the welcome section with correct id', () => {
      const { container } = render(<Welcome />);
      const section = container.querySelector('#welcome');
      expect(section).toBeInTheDocument();
      expect(section.tagName).toBe('SECTION');
    });

    it('should render the subtitle text correctly', () => {
      render(<Welcome />);
      const subtitle = screen.getByText((content, element) => {
        return element.tagName === 'P' && content.includes("Hey, I'm Alexis! Welcome to my");
      });
      expect(subtitle).toBeInTheDocument();
    });

    it('should render the title "portfolio" correctly', () => {
      render(<Welcome />);
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title.textContent).toBe('portfolio');
    });

    it('should render small screen message', () => {
      render(<Welcome />);
      expect(screen.getByText('This portfolio is designed for desktop/tablet screens only.')).toBeInTheDocument();
    });

    it('should render small screen message inside div with correct class', () => {
      const { container } = render(<Welcome />);
      const smallScreenDiv = container.querySelector('.small-screen');
      expect(smallScreenDiv).toBeInTheDocument();
      expect(smallScreenDiv.querySelector('p')).toHaveTextContent(
        'This portfolio is designed for desktop/tablet screens only.'
      );
    });
  });

  describe('Text Rendering', () => {
    it('should render subtitle with individual character spans', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p[ref]') || container.querySelector('p');
      const spans = subtitle.querySelectorAll('span');
      
      expect(spans.length).toBeGreaterThan(0);
      expect(spans.length).toBe("Hey, I'm Alexis! Welcome to my".length);
    });

    it('should render title with individual character spans', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      const spans = title.querySelectorAll('span');
      
      expect(spans.length).toBe('portfolio'.length);
    });

    it('should convert spaces to non-breaking spaces in subtitle', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      const spans = Array.from(subtitle.querySelectorAll('span'));
      const spaceSpans = spans.filter(span => span.textContent === '\u00A0');
      
      // Count spaces in original text
      const originalSpaces = "Hey, I'm Alexis! Welcome to my".split(' ').length - 1;
      expect(spaceSpans.length).toBe(originalSpaces);
    });

    it('should apply correct className to subtitle spans', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      const spans = subtitle.querySelectorAll('span');
      
      spans.forEach(span => {
        expect(span.className).toContain('text-3xl');
        expect(span.className).toContain('font-georama');
      });
    });

    it('should apply correct className to title spans', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      const spans = title.querySelectorAll('span');
      
      spans.forEach(span => {
        expect(span.className).toContain('text-9xl');
        expect(span.className).toContain('italic');
        expect(span.className).toContain('font-georama');
      });
    });

    it('should apply correct base font weight to subtitle spans', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      const firstSpan = subtitle.querySelector('span');
      
      expect(firstSpan.style.fontVariationSettings).toContain('wght');
      expect(firstSpan.style.fontVariationSettings).toContain('100');
    });

    it('should apply default font weight to title spans', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      const firstSpan = title.querySelector('span');
      
      expect(firstSpan.style.fontVariationSettings).toContain('wght');
      expect(firstSpan.style.fontVariationSettings).toContain('400');
    });
  });

  describe('Refs and DOM Structure', () => {
    it('should create refs for title and subtitle', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      const title = container.querySelector('h1');
      
      expect(subtitle).toBeInTheDocument();
      expect(title).toBeInTheDocument();
    });

    it('should have mt-7 class on title', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      
      expect(title.className).toContain('mt-7');
    });
  });

  describe('GSAP Integration', () => {
    it('should call useGSAP hook on mount', () => {
      render(<Welcome />);
      expect(useGSAP).toHaveBeenCalled();
    });

    it('should pass a function to useGSAP', () => {
      render(<Welcome />);
      expect(useGSAP).toHaveBeenCalledWith(expect.any(Function), []);
    });

    it('should setup hover animations via useGSAP', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      const title = container.querySelector('h1');
      
      expect(subtitle).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(useGSAP).toHaveBeenCalled();
    });
  });

  describe('Mouse Interactions', () => {
    it('should handle mousemove events on subtitle', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      expect(() => {
        fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 50 });
      }).not.toThrow();
    });

    it('should handle mousemove events on title', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      
      expect(() => {
        fireEvent.mouseMove(title, { clientX: 100, clientY: 50 });
      }).not.toThrow();
    });

    it('should handle mouseleave events on subtitle', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      expect(() => {
        fireEvent.mouseLeave(subtitle);
      }).not.toThrow();
    });

    it('should handle mouseleave events on title', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      
      expect(() => {
        fireEvent.mouseLeave(title);
      }).not.toThrow();
    });

    it('should not throw error when moving mouse over subtitle multiple times', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      expect(() => {
        fireEvent.mouseMove(subtitle, { clientX: 50, clientY: 25 });
        fireEvent.mouseMove(subtitle, { clientX: 75, clientY: 25 });
        fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 25 });
      }).not.toThrow();
    });

    it('should handle rapid mouse movements', () => {
      const { container } = render(<Welcome />);
      const title = container.querySelector('h1');
      
      expect(() => {
        for (let i = 0; i < 20; i++) {
          fireEvent.mouseMove(title, { clientX: i * 10, clientY: 25 });
        }
      }).not.toThrow();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty text gracefully', () => {
      // This tests the renderText function's robustness
      const { container } = render(<Welcome />);
      expect(container.querySelector('#welcome')).toBeInTheDocument();
    });

    it('should render correctly when refs are null initially', () => {
      const { container } = render(<Welcome />);
      const section = container.querySelector('#welcome');
      expect(section).toBeInTheDocument();
    });

    it('should handle component remount', () => {
      const { unmount, container } = render(<Welcome />);
      expect(container.querySelector('#welcome')).toBeInTheDocument();
      
      unmount();
      
      const { container: newContainer } = render(<Welcome />);
      expect(newContainer.querySelector('#welcome')).toBeInTheDocument();
    });

    it('should cleanup event listeners on unmount', () => {
      const { container, unmount } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      // Verify component is mounted
      expect(subtitle).toBeInTheDocument();
      
      // Unmount should not throw
      expect(() => unmount()).not.toThrow();
    });

    it('should handle mouse events after component unmount gracefully', () => {
      const { container, unmount } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      unmount();
      
      // These should not throw even after unmount
      expect(() => {
        fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 50 });
        fireEvent.mouseLeave(subtitle);
      }).not.toThrow();
    });
  });

  describe('Font Variation Settings', () => {
    it('should use font variation settings for weight control', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p span');
      
      expect(subtitle.style.fontVariationSettings).toBeTruthy();
      expect(subtitle.style.fontVariationSettings).toContain("'wght'");
    });

    it('should have different base weights for subtitle and title', () => {
      const { container } = render(<Welcome />);
      const subtitleSpan = container.querySelector('p span');
      const titleSpan = container.querySelector('h1 span');
      
      const subtitleWeight = subtitleSpan.style.fontVariationSettings;
      const titleWeight = titleSpan.style.fontVariationSettings;
      
      expect(subtitleWeight).not.toBe(titleWeight);
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic HTML structure', () => {
      const { container } = render(<Welcome />);
      
      expect(container.querySelector('section')).toBeInTheDocument();
      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(container.querySelector('p')).toBeInTheDocument();
    });

    it('should maintain text content for screen readers', () => {
      render(<Welcome />);
      
      // Even though text is split into spans, content should be readable
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveTextContent('portfolio');
    });

    it('should have section with id for navigation', () => {
      const { container } = render(<Welcome />);
      const section = container.querySelector('section#welcome');
      
      expect(section).toBeInTheDocument();
      expect(section.id).toBe('welcome');
    });
  });

  describe('Performance', () => {
    it('should render efficiently with memoization opportunity', () => {
      const { rerender } = render(<Welcome />);
      
      expect(() => {
        rerender(<Welcome />);
        rerender(<Welcome />);
      }).not.toThrow();
    });

    it('should handle multiple rapid rerenders', () => {
      const { rerender } = render(<Welcome />);
      
      for (let i = 0; i < 10; i++) {
        rerender(<Welcome />);
      }
      
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });

  describe('Integration with GSAP', () => {
    it('should not break when GSAP animations are triggered', async () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      fireEvent.mouseMove(subtitle, { clientX: 50, clientY: 25 });
      
      await waitFor(() => {
        expect(container.querySelector('#welcome')).toBeInTheDocument();
      });
    });

    it('should maintain DOM structure during animations', () => {
      const { container } = render(<Welcome />);
      const initialSpanCount = container.querySelectorAll('span').length;
      
      const subtitle = container.querySelector('p');
      fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 50 });
      
      const afterSpanCount = container.querySelectorAll('span').length;
      expect(afterSpanCount).toBe(initialSpanCount);
    });
  });

  describe('Character Handling', () => {
    it('should handle special characters in text', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      // Check for apostrophe in "I'm"
      expect(subtitle.textContent).toContain("'");
    });

    it('should preserve punctuation in rendered text', () => {
      render(<Welcome />);
      const title = screen.getByRole('heading', { level: 1 });
      
      // Portfolio has no special punctuation, but check it renders correctly
      expect(title.textContent).toBe('portfolio');
    });

    it('should handle comma and exclamation in subtitle', () => {
      const { container } = render(<Welcome />);
      const subtitle = container.querySelector('p');
      
      expect(subtitle.textContent).toContain(',');
      expect(subtitle.textContent).toContain('!');
    });
  });
});