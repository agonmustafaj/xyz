/**
 * Editable site content for Blerta Ferati's portfolio.
 * Replace placeholders marked with YOUR_* or labeled as placeholders.
 * Do not invent personal/professional facts beyond what is confirmed.
 */

export const site = {
  name: 'Blerta Ferati',
  initials: 'BF',
  eyebrow: 'BSC COMPUTER SCIENCE',
  manifesto: ['Exploring technology.', 'Building ideas.', 'Creating digital experiences.'],
  status: 'Exploring the digital world',
  year: new Date().getFullYear(),
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const

export const about = {
  eyebrow: 'About',
  heading: 'Curious mind. Careful craft.',
  paragraphs: [
    'I am a Computer Science graduate interested in technology, software, and the quiet discipline of turning ideas into digital experiences.',
    'I care about problem-solving, clarity, and building things that feel intentional — whether that means exploring new tools, refining an interface, or understanding how systems fit together.',
    // PLACEHOLDER — replace with a personal detail when ready
    'Currently focused on growing as a developer and exploring where software, design, and curiosity meet. [YOUR_CURRENT_FOCUS]',
  ],
  asideLabel: 'Focus',
  asideItems: [
    'Software & digital products',
    'Problem-solving',
    'Digital innovation',
    // PLACEHOLDER
    '[YOUR_FOCUS_AREA]',
  ],
} as const

export type Project = {
  id: string
  number: string
  title: string
  description: string
  tech: string[]
  github: string
  live: string | null
  /** Visual accent for the project media block */
  tone: 'blush' | 'rose' | 'mist'
  placeholder: boolean
}

export const projects: Project[] = [
  {
    id: 'project-01',
    number: '01',
    title: '[Placeholder Project One]',
    description:
      'Short description of a selected project — replace with a real case study: problem, approach, and outcome. [YOUR_PROJECT_1_DESC]',
    tech: ['React', 'TypeScript', 'YOUR_STACK'],
    github: '#', // YOUR_GITHUB_REPO_1
    live: null, // YOUR_LIVE_URL_1 or null
    tone: 'blush',
    placeholder: true,
  },
  {
    id: 'project-02',
    number: '02',
    title: '[Placeholder Project Two]',
    description:
      'Another selected work. Keep this editable and honest — swap title, description, and links when ready. [YOUR_PROJECT_2_DESC]',
    tech: ['Node.js', 'YOUR_STACK'],
    github: '#', // YOUR_GITHUB_REPO_2
    live: '#', // YOUR_LIVE_URL_2
    tone: 'rose',
    placeholder: true,
  },
  {
    id: 'project-03',
    number: '03',
    title: '[Placeholder Project Three]',
    description:
      'Optional third case study. Remove or rewrite this entry in src/data/content.ts. [YOUR_PROJECT_3_DESC]',
    tech: ['YOUR_STACK'],
    github: '#', // YOUR_GITHUB_REPO_3
    live: null,
    tone: 'mist',
    placeholder: true,
  },
]

export type TechCategory = {
  id: string
  label: string
  skills: string[]
}

export const techStack: TechCategory[] = [
  {
    id: 'languages',
    label: 'Programming languages',
    skills: ['JavaScript', 'TypeScript', 'Python', '[YOUR_LANGUAGE]'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', '[YOUR_FRONTEND]'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', '[YOUR_BACKEND]'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['SQL', '[YOUR_DATABASE]'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', '[YOUR_TOOL]'],
  },
]

export type JourneyItem = {
  id: string
  year: string
  title: string
  detail: string
  kind: 'education' | 'milestone' | 'certification' | 'learning'
}

export const journey: JourneyItem[] = [
  {
    id: 'j1',
    year: 'YYYY', // YOUR_GRAD_YEAR
    title: 'BSc Computer Science',
    detail:
      'Completed undergraduate studies in Computer Science. [YOUR_UNIVERSITY / YOUR_THESIS_OR_FOCUS]',
    kind: 'education',
  },
  {
    id: 'j2',
    year: 'YYYY', // YOUR_MILESTONE_YEAR
    title: '[Academic milestone]',
    detail: 'Placeholder for a notable academic project, award, or milestone. [YOUR_MILESTONE]',
    kind: 'milestone',
  },
  {
    id: 'j3',
    year: 'YYYY', // YOUR_CERT_YEAR
    title: '[Certification or course]',
    detail: 'Placeholder for a certification or completed course. [YOUR_CERTIFICATION]',
    kind: 'certification',
  },
  {
    id: 'j4',
    year: 'Now',
    title: 'Continuous learning',
    detail:
      'Exploring modern web technologies, refining craft, and building toward meaningful digital work. [YOUR_LEARNING_FOCUS]',
    kind: 'learning',
  },
]

export const personality = {
  eyebrow: 'Personality',
  heading: 'Beyond the terminal',
  blocks: [
    {
      id: 'exploring',
      label: 'Exploring',
      body: 'Curious about how thoughtful software can feel — interfaces, systems, and the spaces between. [YOUR_EXPLORING]',
    },
    {
      id: 'learning',
      label: 'Learning',
      body: 'Always picking up new tools and patterns; preferring depth over noise. [YOUR_LEARNING]',
    },
    {
      id: 'inspires',
      label: 'Inspires',
      body: 'Clear design, careful engineering, and people who build with intention. [YOUR_INSPIRES]',
    },
    {
      id: 'interests',
      label: 'Interests',
      body: 'Placeholder interests outside of code — replace with real ones. [YOUR_INTERESTS]',
    },
  ],
} as const

export const contact = {
  eyebrow: 'Contact',
  heading: "Let's build something meaningful.",
  body: 'Open to conversations about technology, collaboration, and thoughtful digital work.',
  email: 'YOUR_EMAIL@example.com', // YOUR_EMAIL
  linkedin: '#', // YOUR_LINKEDIN_URL
  github: '#', // YOUR_GITHUB_URL
  cta: 'Say hello',
} as const
