import React from 'react';
import type { Project } from '../constants/content';

const STATUS_LABEL: Record<NonNullable<Project['status']>, string> = {
  building: 'Currently building',
  live: 'Live',
  'shipping-soon': 'Shipping soon',
};

const STATUS_STYLE: Record<NonNullable<Project['status']>, string> = {
  building: 'bg-amber-400/15 text-amber-300 border-amber-400/40',
  live: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/40',
  'shipping-soon': 'bg-purple-400/15 text-purple-200 border-purple-400/40',
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-xl hover:shadow-amber-500/10">
      <div className="flex items-start justify-between mb-4 gap-3">
        <h3 className="text-xl font-semibold text-white font-mono tracking-tight">
          {project.name}
        </h3>
        {project.status && (
          <span
            className={`shrink-0 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border ${STATUS_STYLE[project.status]}`}
          >
            {STATUS_LABEL[project.status]}
          </span>
        )}
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] uppercase tracking-wider text-purple-200/70 bg-purple-500/10 border border-purple-300/20 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 pt-4 border-t border-white/10">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-amber-300 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors"
          >
            Live site
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
