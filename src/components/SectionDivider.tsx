import React from 'react';

/**
 * Small decorative flourish placed between sections:
 *   ─── ● ─── ●  ─── ● ───
 * Renders as a quiet horizontal punctuation — three dots in butter/rose.
 */
const SectionDivider: React.FC = () => {
  return (
    <div
      aria-hidden
      className="flex justify-center items-center gap-3 py-6 select-none"
    >
      <span className="w-12 h-px bg-ivory-300" />
      <span className="w-1.5 h-1.5 rounded-full bg-butter-400" />
      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
      <span className="w-1.5 h-1.5 rounded-full bg-butter-400" />
      <span className="w-12 h-px bg-ivory-300" />
    </div>
  );
};

export default SectionDivider;
