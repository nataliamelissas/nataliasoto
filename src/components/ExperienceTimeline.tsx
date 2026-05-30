import React from 'react';
import type { Job } from '../constants/content';
import ivantiImg from '../assets/ivanti-logo.gif';
import pluralsightImg from '../assets/pluralsight.webp';
import proofpointImg from '../assets/s67VT62Z_400x400.png';

const LOGOS: Record<NonNullable<Job['logoKey']>, string> = {
  ivanti: ivantiImg,
  pluralsight: pluralsightImg,
  proofpoint: proofpointImg,
};

interface Props {
  jobs: Job[];
}

const ExperienceTimeline: React.FC<Props> = ({ jobs }) => {
  return (
    <ol className="relative space-y-6">
      {/* Spine */}
      <span
        aria-hidden
        className="absolute left-4 md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-butter-400 via-butter-200 to-rose-200"
      />

      {jobs.map((job, idx) => {
        const logo = job.logoKey ? LOGOS[job.logoKey] : undefined;
        const key = `${job.company}-${job.date}`;
        return (
          <li
            key={key}
            className="group relative pl-12 md:pl-16"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            {/* Spine medallion / logo */}
            <span className="absolute left-0 top-2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white ring-2 ring-butter-300 group-hover:ring-rose-400 transition-all overflow-hidden shadow-soft">
              {logo ? (
                <img
                  src={logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-butter-500 text-xs font-bold">
                  {job.company.charAt(0)}
                </span>
              )}
            </span>

            <article className="rounded-3xl bg-white border border-ivory-300/70 p-6 md:p-7 shadow-soft transition-all duration-300 group-hover:border-butter-400 group-hover:shadow-lift">
              <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-900">
                  {job.title}
                  <span className="text-rose-500"> · {job.company}</span>
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-butter-600 bg-butter-50 border border-butter-200 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  {job.date}
                </span>
              </header>
              <p className="text-xs text-ink-400 mb-4">{job.location}</p>

              <ul className="space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm text-ink-600 leading-relaxed before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {job.site && (
                <a
                  href={job.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
                >
                  Visit site
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
};

export default ExperienceTimeline;
