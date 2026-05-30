import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  as?: 'div' | 'section' | 'article';
  className?: string;
  threshold?: number;
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({
  as = 'div',
  className = '',
  threshold,
  children,
}) => {
  const ref = useReveal<HTMLDivElement>(threshold);
  const Tag = as as 'div';
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
