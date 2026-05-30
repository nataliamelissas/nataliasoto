import React from 'react';
import type { Writing } from '../constants/content';

const WritingCard: React.FC<{ writing: Writing }> = ({ writing }) => {
  const isComingSoon = writing.status === 'coming-soon';

  return (
    <a
      href={writing.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full rounded-3xl bg-white border border-ivory-300/70 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:shadow-rose-lift"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zM19.5 9.75v9a2.25 2.25 0 01-2.25 2.25h-12A2.25 2.25 0 013 18.75v-12A2.25 2.25 0 015.25 4.5h9" />
            </svg>
          </span>
          <span className="text-xs uppercase tracking-widest text-rose-500 font-bold">
            {writing.meta}
          </span>
        </div>
        {isComingSoon && (
          <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-butter-100 text-butter-600 border border-butter-200">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3 group-hover:text-rose-500 transition-colors">
        {writing.name}
      </h3>

      <p className="text-ink-400 text-sm leading-relaxed mb-6">
        {writing.description}
      </p>

      <span className="inline-flex items-center gap-1 text-sm font-semibold text-rose-500 group-hover:text-rose-600 transition-colors">
        {isComingSoon ? 'Preview the site' : 'Read it'}
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </a>
  );
};

export default WritingCard;
