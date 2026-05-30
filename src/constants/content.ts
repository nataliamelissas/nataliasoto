export const SECTION_IDS = {
  hero: 'hero',
  projects: 'projects',
  writing: 'writing',
  stack: 'stack',
  experience: 'experience',
  education: 'education',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_SECTIONS: { id: SectionId; label: string }[] = [
  { id: SECTION_IDS.projects, label: 'Projects' },
  { id: SECTION_IDS.writing, label: 'Writing' },
  { id: SECTION_IDS.stack, label: 'Stack' },
  { id: SECTION_IDS.experience, label: 'Experience' },
  { id: SECTION_IDS.education, label: 'Education' },
  { id: SECTION_IDS.contact, label: 'Contact' },
];

export const PROFILE = {
  name: 'Natalia Soto',
  role: 'Software Engineer',
  company: 'Ivanti',
  email: 'nataliamelissas@gmail.com',
  phone: '(801) 649-7843',
  phoneHref: 'tel:8016497843',
  emailHref: 'mailto:nataliamelissas@gmail.com',
  summary:
    'Software engineer building agents that automate coding, testing, and GitHub deployments using Claude Code and markdown pipelines. Committed to clean, secure code, graceful error handling, and systems built to scale.',
  quote:
    '"The greatest evil is convincing us that we have no choice. But choice … cannot be taken away."',
  quoteSource: 'Chevalier (2022)',
};

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/nataliamsoto/',
  github: 'https://github.com/nataliamelissas',
  etsy: 'https://etsy.com/shop/CharmBitsDesign',
};

export interface Project {
  name: string;
  description: string;
  repo: string;
  live?: string;
  tags: string[];
  status?: 'building' | 'live' | 'shipping-soon';
}

export const PROJECTS: Project[] = [
  {
    name: 'scriptures_app',
    description:
      "Built because my congregation was invited to read scriptures daily with a topic in mind, then start fresh and do it again. No app out there lets you start a clean copy of a book of scripture with new notes — so I'm making one for myself and my congregation.",
    repo: 'https://github.com/nataliamelissas/scriptures_app',
    tags: ['Flutter', 'Dart', 'Firebase'],
    status: 'building',
  },
  {
    name: 'resume-builder',
    description:
      "Most resume builders do too much yet so little of what I actually need. This one lets me input my data, import/export it, and save it in an ATS-friendly format with no formatting or color distractions — it's all going to be parsed by a machine or AI anyway.",
    repo: 'https://github.com/nataliamelissas/resume-builder',
    live: 'https://nataliamelissas.github.io/resume-builder/',
    tags: ['Flutter', 'Dart', 'Local-first'],
    status: 'live',
  },
  {
    name: 'tali-tech-client',
    description:
      "Currently the site for the in-person kids' coding classes I teach. An online kids' coding academy is coming soon.",
    repo: 'https://github.com/nataliamelissas/tali-tech-client',
    live: 'https://talitech.org',
    tags: ['React', 'TypeScript', 'Cloudflare'],
    status: 'live',
  },
];

export interface Writing {
  name: string;
  description: string;
  url: string;
  meta: string;
  status: 'live' | 'coming-soon';
}

export const WRITING: Writing[] = [
  {
    name: 'That Family AI Guide',
    description:
      'A practical resource for families trying to navigate the world of AI. Co-written with a neighborhood friend.',
    url: 'https://substack.com/@thefamilyaiguide',
    meta: 'Substack · Co-authored',
    status: 'live',
  },
  {
    name: 'The Unprompted Engineer',
    description:
      "Everything I'm currently studying, practicing, and learning that's worth sharing.",
    url: 'https://theunpromptedengineer.com',
    meta: 'theunpromptedengineer.com',
    status: 'coming-soon',
  },
];

export const FEATURED_PILLARS = [
  {
    name: 'AI-driven development',
    blurb:
      'Claude Code, agents, MCP servers, and markdown pipelines that automate building, testing, and shipping.',
  },
  {
    name: 'C#',
    blurb:
      'Backend microservices on Azure — distributed systems, MongoDB optimization, and customer-facing MCP features.',
  },
  {
    name: 'TypeScript',
    blurb:
      'React + Angular frontends and Node services. Type-safe end-to-end, from API contracts to UI.',
  },
];

export interface SkillGroup {
  label: string;
  tags: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'AI',
    tags: [
      'Claude Code',
      'AI agents',
      'MCP servers',
      'Markdown workflows',
      'Context engineering',
      'Prompt engineering',
      'Copilot',
    ],
  },
  {
    label: 'Systems & Scripting',
    tags: ['Linux', 'WSL', 'Bash', 'Python', 'PowerShell', 'YAML'],
  },
  {
    label: 'Backend',
    tags: [
      'GraphQL',
      'MongoDB',
      'REST APIs',
      'Scala',
      'AWS',
      'Docker',
      'Terraform',
      'OWASP',
    ],
  },
  {
    label: 'Frontend',
    tags: [
      'React',
      'JavaScript',
      'Angular',
      'SCSS/SASS',
      'Tailwind',
      'Node.js',
      'Build Tools',
    ],
  },
  {
    label: 'Cloud',
    tags: ['AWS SDK', 'AWS Amplify', 'Azure Blob Storage', 'Cloudflare'],
  },
];

export interface Job {
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
  site?: string;
  logoKey?: 'ivanti' | 'pluralsight' | 'proofpoint';
}

export const JOBS: Job[] = [
  {
    title: 'Software Engineer',
    company: 'Ivanti',
    location: 'South Jordan, UT',
    date: 'Aug 2023 – Present',
    site: 'https://www.ivanti.com/products/neurons',
    logoKey: 'ivanti',
    bullets: [
      'Led AI development for the engineering team. Maximized AI productivity through agents, skills, and rules to automate code building, testing, and GitHub deployments; drove team adoption through bi-weekly learning forums that tripled individual productivity.',
      'Developed customer-facing MCP server features, ensuring seamless integration through precise API alignment and comprehensive documentation for implementation teams.',
      'Optimized critical MongoDB queries by ~40% through compound indexes and aggregation pipelines.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Pluralsight',
    location: 'Draper, UT',
    date: 'Feb 2023 – Sept 2023',
    site: 'https://www.pluralsight.com',
    logoKey: 'pluralsight',
    bullets: [
      'Spearheaded development of a scalable cloud-based checkout page on Linux-backed AWS infrastructure using event-driven architecture, TypeScript, and NewRelic for performance monitoring.',
      'Built a responsive checkout UI using React and Apollo GraphQL, delivering a fast and intuitive customer purchase flow.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Proofpoint',
    location: 'Draper, UT',
    date: 'May 2022 – Aug 2022',
    site: 'https://www.proofpoint.com/us/products/cloud-security/cloud-app-security-broker',
    logoKey: 'proofpoint',
    bullets: [
      'Built Python and Bash automation on Linux EC2 instances using the AWS Cost Explorer API and MS Teams webhooks to identify and eliminate unused cloud resources, reducing monthly AWS spending.',
      'Rapidly learned Terraform to provision AWS infrastructure and built Python Lambda functions for platform cronjobs, reducing manual operational overhead.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Proofpoint',
    location: 'Draper, UT',
    date: 'May 2019 – Aug 2020',
    site: 'https://www.proofpoint.com/us/products/cloud-security/cloud-app-security-broker',
    logoKey: 'proofpoint',
    bullets: [
      'Engineered cloud security features in Scala and GraphQL, implementing access control mechanisms and traffic monitoring for third-party application integrations.',
      'Built and shipped a production ReactJS and TypeScript web application, collaborating with engineering and design teams to deliver a major new product feature.',
    ],
  },
];

export interface InlineLink {
  match: string;
  href: string;
}

export interface Degree {
  degree: string;
  school: string;
  detail: string;
  /** Substrings inside `detail` to render as anchor tags. */
  inlineLinks?: InlineLink[];
  link?: { label: string; href: string };
}

export const EDUCATION: Degree[] = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of Utah',
    detail:
      'Social Media Director of the Society of Women Engineers · Member of Women in Computing',
  },
  {
    degree: 'M.Ed. Instructional Design & Educational Technology',
    school: 'University of Utah',
    detail:
      'Founder and course designer at talitech.org, teaching K-12 coding using research-backed learning strategies.',
    inlineLinks: [{ match: 'talitech.org', href: 'https://talitech.org' }],
    link: {
      label: 'Program details',
      href: 'https://ed-psych.utah.edu/instructional-design/',
    },
  },
];
