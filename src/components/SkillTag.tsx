import React from 'react';

interface SkillTagProps {
  label: string;
  variant?: 'butter' | 'rose';
}

const SkillTag: React.FC<SkillTagProps> = ({ label, variant = 'butter' }) => {
  const base =
    'inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200';
  const variantClasses =
    variant === 'butter'
      ? 'bg-butter-50 text-ink-800 border-butter-200 hover:border-butter-400 hover:bg-butter-100 hover:-translate-y-0.5'
      : 'bg-rose-50 text-ink-800 border-rose-200 hover:border-rose-400 hover:bg-rose-100 hover:-translate-y-0.5';
  return <span className={`${base} ${variantClasses}`}>{label}</span>;
};

export default SkillTag;
