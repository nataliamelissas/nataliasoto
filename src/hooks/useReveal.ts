import { useEffect, useRef } from 'react';

const REVEAL_CLASS = 'reveal';
const REVEAL_VISIBLE_CLASS = 'reveal-visible';

export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.classList.add(REVEAL_CLASS);

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add(REVEAL_VISIBLE_CLASS);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(REVEAL_VISIBLE_CLASS);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
