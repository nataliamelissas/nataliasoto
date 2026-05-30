import React from 'react';
import ContactBanner from '../components/ContactBanner';
import ProfileImage from '../components/ProfileImage';
import CollapsibleMenu from '../components/CollapsableMenu';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import WritingCard from '../components/WritingCard';
import SkillTag from '../components/SkillTag';
import Reveal from '../components/Reveal';
import InlineLinkedText from '../components/InlineLinkedText';
import profileImg from '../assets/mission-profile-2.jpg';
import ivantiImg from '../assets/ivanti-logo.gif';
import pluralsightImg from '../assets/pluralsight.webp';
import proofpointImg from '../assets/s67VT62Z_400x400.png';
import resume from '../../public/resume.pdf';
import {
  SECTION_IDS,
  PROFILE,
  PROJECTS,
  WRITING,
  FEATURED_PILLARS,
  SKILL_GROUPS,
  JOBS,
  EDUCATION,
} from '../constants/content';

const SECTION_OFFSET = 'scroll-mt-24';

const COMPANY_LOGOS = [
  { src: ivantiImg, alt: 'Ivanti' },
  { src: pluralsightImg, alt: 'Pluralsight' },
  { src: proofpointImg, alt: 'Proofpoint' },
];

const jobsForCollapsibleMenu = JOBS.map((job) => ({
  title: `${job.title} at ${job.company}`,
  date: `${job.location} · ${job.date}`,
  description: job.bullets.map((b) => `• ${b}`).join('\n'),
  site: job.site,
}));

const scrollToContact = () => {
  const el = document.getElementById(SECTION_IDS.contact);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section
        id={SECTION_IDS.hero}
        className={`relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white min-h-screen flex items-center ${SECTION_OFFSET}`}
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-purple-500/30 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.08),transparent_55%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-20 py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-300/90 mb-5">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 leading-[0.95]">
            Natalia <span className="font-semibold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Soto</span>
          </h1>

          <p className="text-lg leading-relaxed text-white/70 max-w-2xl mb-6 mt-8">
            {PROFILE.summary}
          </p>

          <p className="text-sm md:text-base italic text-white/55 border-l-2 border-amber-400/50 pl-4 mb-12 max-w-2xl">
            {PROFILE.quote}
            <span className="not-italic text-white/40"> — {PROFILE.quoteSource}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-amber-400 text-purple-950 px-7 py-3 rounded-full font-semibold hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
            >
              Message me
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white/90 px-7 py-3 rounded-full font-medium hover:border-amber-300 hover:text-amber-300 transition-all duration-300"
            >
              View resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id={SECTION_IDS.projects}
        className={`relative bg-gradient-to-b from-purple-950 to-purple-900 text-white py-28 ${SECTION_OFFSET}`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="What I'm building"
              title={
                <>
                  Current <span className="font-semibold">projects</span>
                </>
              }
              subtitle="Side projects I'm shipping right now."
              tone="dark"
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Writing */}
      <section
        id={SECTION_IDS.writing}
        className={`relative bg-slate-50 text-slate-900 py-28 ${SECTION_OFFSET}`}
      >
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="What I'm writing"
              title={
                <>
                  Notes <span className="font-semibold">in public</span>
                </>
              }
              subtitle="Two newsletters where I share what I'm learning."
              tone="light"
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-6">
            {WRITING.map((entry) => (
              <WritingCard key={entry.name} writing={entry} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id={SECTION_IDS.stack}
        className={`relative bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white py-28 ${SECTION_OFFSET}`}
      >
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="What I work with"
              title={
                <>
                  Tech <span className="font-semibold">stack</span>
                </>
              }
              subtitle="Optimizing for AI-driven development, with C# and TypeScript at the core."
              tone="dark"
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-3 gap-5 mb-14">
            {FEATURED_PILLARS.map((pillar) => (
              <div
                key={pillar.name}
                className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-purple-500/10 p-7 hover:border-amber-300/60 transition-colors"
              >
                <h3 className="text-xl font-semibold text-amber-300 mb-3">
                  {pillar.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {pillar.blurb}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="space-y-7">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-xs tracking-[0.25em] uppercase text-amber-300/80 mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <SkillTag key={tag} label={tag} tone="dark" />
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-14 flex justify-center">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-amber-400 text-purple-950 px-7 py-3 rounded-full font-semibold hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download resume
            </a>
          </Reveal>
        </div>
      </section>

      {/* Work Experience */}
      <section
        id={SECTION_IDS.experience}
        className={`relative bg-gradient-to-b from-purple-900 to-purple-950 text-white py-28 ${SECTION_OFFSET}`}
      >
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Career"
              title={
                <>
                  Work <span className="font-semibold">experience</span>
                </>
              }
              subtitle="Building scalable systems and pioneering AI-assisted workflows since 2019."
              tone="dark"
            />
          </Reveal>

          <Reveal className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mb-14 opacity-70">
            {COMPANY_LOGOS.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </Reveal>

          <Reveal>
            <CollapsibleMenu items={jobsForCollapsibleMenu} />
          </Reveal>
        </div>
      </section>

      {/* Education */}
      <section
        id={SECTION_IDS.education}
        className={`relative bg-slate-50 text-slate-900 py-28 ${SECTION_OFFSET}`}
      >
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="School"
              title={
                <>
                  Education & <span className="font-semibold">degrees</span>
                </>
              }
              subtitle="Two degrees from the University of Utah — computer science and educational technology."
              tone="light"
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((degree) => (
              <article
                key={degree.degree}
                className="rounded-2xl bg-white border border-purple-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-1">{degree.degree}</h3>
                <p className="text-sm text-purple-700 font-medium mb-3">
                  {degree.school}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  <InlineLinkedText
                    text={degree.detail}
                    links={degree.inlineLinks}
                  />
                </p>
                {degree.link && (
                  <a
                    href={degree.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-amber-600 transition-colors"
                  >
                    {degree.link.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section
        id={SECTION_IDS.contact}
        className={`relative bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white py-28 ${SECTION_OFFSET}`}
      >
        <div className="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="flex justify-center md:justify-start">
              <ProfileImage imageUrl={profileImg} />
            </Reveal>

            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-amber-300 mb-3">
                Get in touch
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-5">
                Let's <span className="font-semibold">connect</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-md">
                Want to know more about me or my work? Or just say hello? I'd love to hear from you.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <a
                  href={PROFILE.emailHref}
                  className="inline-flex items-center gap-3 text-white/85 hover:text-amber-300 transition-colors group w-fit"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-amber-300/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.phoneHref}
                  className="inline-flex items-center gap-3 text-white/85 hover:text-amber-300 transition-colors group w-fit"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-amber-300/20 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span>{PROFILE.phone}</span>
                </a>
              </div>

              <div className="flex justify-start">
                <ContactBanner linkedInBlack={false} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
