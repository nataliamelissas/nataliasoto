import React from "react";
import { PROFILE } from "../constants/content";
import { useScrolledPast } from "../hooks/useScrolledPast";

// Expand as soon as the user begins scrolling down from the top.
const EXPAND_THRESHOLD_PX = 32;

const SHARED_QUOTE = "font-display italic border-l-2 border-rose-300 pl-4";

/**
 * Hero quote that stays compact at the top of the page — a single muted
 * teaser line — then expands to the full quote + attribution once the user
 * starts scrolling. Height morphs via the grid-rows 0fr→1fr trick; both
 * states cross-fade. Honors prefers-reduced-motion.
 */
const HeroQuote: React.FC = () => {
  const scrolled = useScrolledPast(EXPAND_THRESHOLD_PX);
  const [hovered, setHovered] = React.useState(false);
  const [tapped, setTapped] = React.useState(false);

  // Open on scroll, on hover (desktop), or on tap/focus (touch + keyboard).
  const expanded = scrolled || hovered || tapped;

  return (
    <div
      className="mb-12 max-w-2xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setTapped((t) => !t)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      aria-label="Show quote"
    >
      {/* Collapsed teaser: one muted line, attribution hidden */}
      <div
        aria-hidden={expanded}
        className={`overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none ${
          expanded ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <p className={`${SHARED_QUOTE} text-base text-ink-400/70 truncate`}>
          {PROFILE.quote}
        </p>
      </div>

      {/* Expanded: full quote + attribution */}
      <div
        className={`grid transition-all duration-700 ease-out motion-reduce:transition-none ${
          expanded
            ? "grid-rows-[1fr] opacity-100 translate-y-0"
            : "grid-rows-[0fr] opacity-0 translate-y-2"
        }`}
      >
        <div className="overflow-hidden">
          <p className={`${SHARED_QUOTE} text-base md:text-lg text-ink-400`}>
            {PROFILE.quote}
            <span className="not-italic text-ink-400/80">
              {" "}
              — {PROFILE.quoteSource}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroQuote;
