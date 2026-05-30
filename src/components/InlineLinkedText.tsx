import React from 'react';
import type { InlineLink } from '../constants/content';

interface Props {
  text: string;
  links?: InlineLink[];
  className?: string;
  linkClassName?: string;
}

/**
 * Renders `text`, wrapping any substring that appears in `links[i].match`
 * with an anchor tag. Case-sensitive, first-match-wins.
 */
const InlineLinkedText: React.FC<Props> = ({
  text,
  links,
  className,
  linkClassName = 'text-purple-700 underline underline-offset-2 hover:text-amber-600 transition-colors',
}) => {
  if (!links || links.length === 0) {
    return <span className={className}>{text}</span>;
  }

  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let nextMatch: { index: number; link: InlineLink } | null = null;
    for (const link of links) {
      const idx = text.indexOf(link.match, cursor);
      if (idx !== -1 && (!nextMatch || idx < nextMatch.index)) {
        nextMatch = { index: idx, link };
      }
    }

    if (!nextMatch) {
      nodes.push(text.slice(cursor));
      break;
    }

    if (nextMatch.index > cursor) {
      nodes.push(text.slice(cursor, nextMatch.index));
    }
    nodes.push(
      <a
        key={`${nextMatch.link.href}-${nextMatch.index}`}
        href={nextMatch.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {nextMatch.link.match}
      </a>
    );
    cursor = nextMatch.index + nextMatch.link.match.length;
  }

  return <span className={className}>{nodes}</span>;
};

export default InlineLinkedText;
