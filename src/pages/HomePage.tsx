import React from "react";
import ContactBanner from "../components/ContactBanner";
import ProfileImage from "../components/ProfileImage";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import WritingCard from "../components/WritingCard";
import SkillTag from "../components/SkillTag";
import Reveal from "../components/Reveal";
import InlineLinkedText from "../components/InlineLinkedText";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SectionDivider from "../components/SectionDivider";
import profileImg from "../assets/white-profile.jpg";
import resume from "../../public/resume.pdf";
import {
  SECTION_IDS,
  PROFILE,
  PROJECTS,
  WRITING,
  FEATURED_PILLARS,
  SKILL_GROUPS,
  JOBS,
  EDUCATION,
} from "../constants/content";

const SECTION_OFFSET = "scroll-mt-24";

// Tinted section backgrounds. Shared with the trailing SectionDivider so the
// divider blends into the section above it instead of sitting in its own band.
const BG_WRITING = "bg-rose-50/60";
const BG_EDUCATION = "bg-butter-50/60";

const scrollToContact = () => {
  const el = document.getElementById(SECTION_IDS.contact);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-ink-900 bg-ivory-100">
      {/* Hero */}
      <section
        id={SECTION_IDS.hero}
        className={`relative overflow-hidden bg-ivory-100 min-h-screen flex items-center ${SECTION_OFFSET}`}
      >
        {/* Playful decorative shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-butter-200/60 blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] rounded-full bg-rose-200/50 blur-3xl pointer-events-none" />
        <svg
          aria-hidden
          className="absolute top-1/4 right-12 w-10 h-10 text-rose-300 hidden md:block"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1l2.4 7.6L22 11l-7.6 2.4L12 21l-2.4-7.6L2 11l7.6-2.4z" />
        </svg>
        <svg
          aria-hidden
          className="absolute bottom-20 right-1/4 w-6 h-6 text-butter-400 hidden md:block"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="6" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-20 py-28">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-rose-500 font-semibold mb-6">
            <span aria-hidden className="w-6 h-px bg-rose-400" />
            Hi, I'm
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-8 leading-[0.95] text-ink-900">
            Natalia Soto
            <span className="text-rose-400">.</span>
          </h1>

          <p className="text-lg leading-relaxed text-ink-600 max-w-2xl mb-6">
            {PROFILE.summary}
          </p>

          <p className="font-display text-base md:text-lg italic text-ink-400 border-l-2 border-rose-300 pl-4 mb-12 max-w-2xl">
            {PROFILE.quote}
            <span className="not-italic text-ink-400/80">
              {" "}
              — {PROFILE.quoteSource}
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-ink-900 text-ivory-100 px-7 py-3 rounded-full font-semibold hover:bg-rose-500 transition-all duration-300 shadow-soft hover:shadow-rose-lift"
            >
              Message me
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink-900/15 text-ink-900 px-7 py-3 rounded-full font-medium hover:border-butter-400 hover:bg-butter-50 transition-all duration-300"
            >
              View resume
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Projects */}
      <section
        id={SECTION_IDS.projects}
        className={`relative bg-ivory-100 py-24 ${SECTION_OFFSET}`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="What I'm building"
              title={
                <>
                  Current{" "}
                  <span className="italic font-semibold text-rose-500">
                    projects
                  </span>
                </>
              }
              subtitle="Side projects I'm shipping right now."
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Writing */}
      <section
        id={SECTION_IDS.writing}
        className={`relative ${BG_WRITING} py-24 ${SECTION_OFFSET}`}
      >
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="What I'm writing"
              title={
                <>
                  Notes{" "}
                  <span className="italic font-semibold text-rose-500">
                    in public
                  </span>
                </>
              }
              subtitle="Two newsletters where I share what I'm learning."
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-6">
            {WRITING.map((entry) => (
              <WritingCard key={entry.name} writing={entry} />
            ))}
          </Reveal>
        </div>
      </section>

      <SectionDivider bgClass={BG_WRITING} />

      {/* Tech Stack */}
      <section
        id={SECTION_IDS.stack}
        className={`relative bg-ivory-100 py-24 ${SECTION_OFFSET}`}
      >
        <div className="max-w-6xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="What I work with"
              title={
                <>
                  Tech{" "}
                  <span className="italic font-semibold text-butter-500">
                    stack
                  </span>
                </>
              }
              subtitle="Building agents and tools, with C# and TypeScript at the core."
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-3 gap-5 mb-14">
            {FEATURED_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.name}
                className={`rounded-3xl border p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                  idx === 1
                    ? "bg-butter-50 border-butter-200 hover:border-butter-400 hover:shadow-lift"
                    : "bg-white border-ivory-300/70 hover:border-rose-400 hover:shadow-rose-lift"
                }`}
              >
                <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3">
                  {pillar.name}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed">
                  {pillar.blurb}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="space-y-7">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={group.label}>
                <p className="text-xs tracking-[0.25em] uppercase text-ink-400 font-semibold mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <SkillTag
                      key={tag}
                      label={tag}
                      variant={idx % 2 === 0 ? "butter" : "rose"}
                    />
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
              className="group inline-flex items-center gap-2 bg-butter-400 text-ink-900 px-7 py-3 rounded-full font-semibold hover:bg-butter-500 hover:shadow-lift transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download resume
            </a>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Work Experience */}
      <section
        id={SECTION_IDS.experience}
        className={`relative bg-ivory-100 py-24 ${SECTION_OFFSET}`}
      >
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="Career"
              title={
                <>
                  Work{" "}
                  <span className="italic font-semibold text-rose-500">
                    experience
                  </span>
                </>
              }
              subtitle="Building scalable systems and pioneering AI-assisted workflows since 2019."
            />
          </Reveal>

          <Reveal>
            <ExperienceTimeline jobs={JOBS} />
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Education */}
      <section
        id={SECTION_IDS.education}
        className={`relative ${BG_EDUCATION} py-24 ${SECTION_OFFSET}`}
      >
        <div className="max-w-5xl mx-auto px-8">
          <Reveal>
            <SectionHeader
              eyebrow="School"
              title={
                <>
                  Education{" "}
                  <span className="italic font-semibold text-butter-500">
                    & degrees
                  </span>
                </>
              }
              subtitle="Two degrees from the University of Utah — computer science and educational technology."
            />
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((degree) => (
              <article
                key={degree.degree}
                className="rounded-3xl bg-white border border-ivory-300/70 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-butter-400 hover:shadow-lift"
              >
                <div className="w-11 h-11 rounded-2xl bg-butter-100 text-butter-600 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-1 text-ink-900">
                  {degree.degree}
                </h3>
                <p className="text-sm text-rose-500 font-semibold mb-3">
                  {degree.school}
                </p>
                <p className="text-ink-600 text-sm leading-relaxed mb-4">
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
                    className="inline-flex items-center gap-1 text-sm font-semibold text-butter-600 hover:text-butter-500 transition-colors"
                  >
                    {degree.link.label}
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <SectionDivider bgClass={BG_EDUCATION} />

      {/* Contact */}
      <section
        id={SECTION_IDS.contact}
        className={`relative bg-ivory-100 py-24 overflow-hidden ${SECTION_OFFSET}`}
      >
        <div className="absolute -top-10 -left-20 w-72 h-72 rounded-full bg-butter-200/60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-rose-200/50 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="flex justify-center md:justify-start">
              <ProfileImage imageUrl={profileImg} />
            </Reveal>

            <Reveal>
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-rose-500 font-semibold mb-3">
                <span aria-hidden className="w-6 h-px bg-rose-400" />
                Get in touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-ink-900 mb-5">
                Let's{" "}
                <span className="italic font-semibold text-rose-500">
                  connect
                </span>
                <span className="text-butter-400">.</span>
              </h2>
              <p className="text-lg text-ink-600 mb-8 max-w-md">
                Want to know more about me or my work? Or just say hello? I'd
                love to hear from you.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <a
                  href={PROFILE.emailHref}
                  className="inline-flex items-center gap-3 text-ink-700 hover:text-rose-500 transition-colors group w-fit"
                >
                  <span className="w-10 h-10 rounded-xl bg-white border border-ivory-300 flex items-center justify-center group-hover:border-rose-300 group-hover:bg-rose-50 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <span className="font-medium">{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.phoneHref}
                  className="inline-flex items-center gap-3 text-ink-700 hover:text-butter-500 transition-colors group w-fit"
                >
                  <span className="w-10 h-10 rounded-xl bg-white border border-ivory-300 flex items-center justify-center group-hover:border-butter-300 group-hover:bg-butter-50 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  <span className="font-medium">{PROFILE.phone}</span>
                </a>
              </div>

              <div className="flex justify-start">
                <ContactBanner linkedInBlack={true} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
