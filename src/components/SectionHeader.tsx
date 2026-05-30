import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  tone = 'dark',
  align = 'center',
}) => {
  const eyebrowColor = tone === 'dark' ? 'text-amber-300' : 'text-purple-600';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-slate-900';
  const subtitleColor = tone === 'dark' ? 'text-white/60' : 'text-slate-600';
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-14 max-w-2xl ${alignment}`}>
      <p className={`text-xs tracking-[0.25em] uppercase ${eyebrowColor} mb-3`}>
        {eyebrow}
      </p>
      <h2 className={`text-4xl md:text-5xl font-light ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
