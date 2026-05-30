import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], topOffset = 96): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return;

    const handler = () => {
      const scrollY = window.scrollY + topOffset + 1;
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollY >= top) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [sectionIds, topOffset]);

  return activeId;
}
