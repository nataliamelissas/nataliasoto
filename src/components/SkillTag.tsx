import React from 'react';

interface SkillTagProps {
  label: string;
  tone?: 'light' | 'dark';
}

const SkillTag: React.FC<SkillTagProps> = ({ label, tone = 'light' }) => {
  const base =
    'inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200';
  const variant =
    tone === 'dark'
      ? 'bg-white/5 text-amber-200 border-amber-300/30 hover:border-amber-300/70 hover:bg-amber-300/10'
      : 'bg-white text-purple-800 border-purple-200 hover:border-amber-400 hover:text-purple-900 hover:shadow-sm';
  return <span className={`${base} ${variant}`}>{label}</span>;
};

export default SkillTag;
