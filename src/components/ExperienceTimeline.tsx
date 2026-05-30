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
    <ol className="relative space-y-5">
      {/* Spine */}
      <span
        aria-hidden
        className="absolute left-4 md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-amber-300/40 via-white/10 to-amber-300/0"
      />

      {jobs.map((job, idx) => {
        const logo = job.logoKey ? LOGOS[job.logoKey] : undefined;
        // Unique key — two Proofpoint entries share company + title.
        const key = `${job.company}-${job.date}`;
        return (
          <li
            key={key}
            className="group relative pl-12 md:pl-16"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            {/* Spine dot / logo medallion */}
            <span className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-purple-950 ring-2 ring-amber-300/40 group-hover:ring-amber-300/80 transition-all overflow-hidden">
              {logo ? (
                <img
                  src={logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-amber-300 text-xs font-bold">
                  {job.company.charAt(0)}
                </span>
              )}
            </span>

            <article className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-7 transition-all duration-300 group-hover:border-amber-300/40 group-hover:bg-white/[0.07] group-hover:shadow-lg group-hover:shadow-amber-500/5">
              <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {job.title}
                  <span className="text-amber-300"> · {job.company}</span>
                </h3>
                <span className="text-xs font-medium uppercase tracking-wider text-amber-300/80 bg-amber-300/10 border border-amber-300/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  {job.date}
                </span>
              </header>
              <p className="text-xs text-white/50 mb-4">{job.location}</p>

              <ul className="space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm text-white/75 leading-relaxed before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-300/70"
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
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
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
