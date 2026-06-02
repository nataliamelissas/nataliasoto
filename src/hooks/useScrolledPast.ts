import { useEffect, useState } from 'react';

/**
 * Returns true once the window has scrolled past `threshold` pixels.
 * Zero-dep, passive scroll listener throttled with requestAnimationFrame.
 */
export function useScrolledPast(threshold = 0): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update(); // sync initial state (e.g. on reload mid-page)
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return scrolled;
}
