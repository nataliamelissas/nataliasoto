import { useState } from 'react';
import { NAV_SECTIONS } from '../constants/content';
import { useScrollSpy } from '../hooks/useScrollSpy';
import linkedinIcon from '../assets/linkedin-black.svg';
import githubIcon from '../assets/github.svg';
import { SOCIAL } from '../constants/content';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-ivory-100/85 backdrop-blur-md border-b border-ivory-300/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-3.5 flex items-center justify-between">
        <button
          onClick={() => handleNav('hero')}
          className="font-display text-ink-900 font-semibold text-lg tracking-tight hover:text-butter-500 transition-colors"
        >
          NS<span className="text-rose-400">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleNav(section.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-ink-900' : 'text-ink-400 hover:text-ink-700'
                }`}
              >
                {section.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-butter-400 transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3 ml-4">
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="" className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubIcon} alt="" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <button
          className="md:hidden text-ink-900 p-2"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-ivory-300 bg-ivory-100/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_SECTIONS.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNav(section.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-ink-900 bg-butter-100'
                      : 'text-ink-600 hover:text-ink-900 hover:bg-ivory-200'
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
            <div className="flex gap-4 pt-3 mt-2 border-t border-ivory-300">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="" className="w-6 h-6" />
              </a>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={githubIcon} alt="" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
