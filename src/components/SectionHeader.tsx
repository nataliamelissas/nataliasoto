import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-14 max-w-2xl ${alignment}`}>
      <p className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-butter-500 font-semibold mb-3">
        <span aria-hidden className="w-6 h-px bg-butter-400" />
        {eyebrow}
        <span aria-hidden className="w-6 h-px bg-butter-400" />
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-light text-ink-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
