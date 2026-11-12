export interface Role {
  title: string
  period: string
}

export interface Job {
  company: string
  url: string
  location: string
  period: string
  roles: Role[]
  summary: string
  points: string[]
  stack: string[]
}

export const experience: Job[] = [
  {
    company: 'NIX',
    url: 'https://nixs.com/',
    location: 'Budapest, Hungary',
    period: 'May 2025 – May 2026',
    roles: [
      { title: 'Junior Full-Stack .NET Developer', period: 'Oct 2025 – May 2026' },
      { title: '.NET Trainee', period: 'May 2025 – Oct 2025' },
    ],
    summary: 'Backend development and cloud operations for US clients.',
    points: [
      'Built backend features in C# / ASP.NET Core for a US healthcare product and a US marketplace for photographers: REST APIs, business logic and EF Core data access.',
      'Managed and configured the projects’ Azure resources and deployments across environments.',
      'Communicated actively with the US clients on requirements, priorities and progress, and with managers and teams across the company.',
      'Worked with frontend developers, QA and product owners on end-to-end features; code reviews, debugging and performance fixes.',
      'Hired as a developer after completing the 5-month NIX .NET programme (ASP.NET Core, EF Core, clean N-layer architecture, unit testing).',
    ],
    stack: ['C#', 'ASP.NET Core', 'EF Core', 'Azure', 'REST', 'SQL'],
  },
  {
    company: 'Ericsson',
    url: 'https://www.ericsson.com/',
    location: 'Budapest, Hungary',
    period: 'Feb 2025 – May 2025',
    roles: [{ title: 'Software Engineer Intern', period: 'Feb 2025 – May 2025' }],
    summary: 'Frontend for CodeChecker, Ericsson’s open-source static-analysis platform.',
    points: [
      'Built and maintained UI features in Vue.js for the CodeChecker web viewer.',
      'Integrated new views with the existing backend API together with backend engineers and product owners; fixed UI defects and improved responsiveness.',
    ],
    stack: ['Vue.js', 'JavaScript', 'CSS', 'REST'],
  },
]

export const education = {
  school: 'Eötvös Loránd University (ELTE)',
  url: 'https://www.inf.elte.hu/en/',
  degree: 'BSc in Computer Science',
  period: 'Sep 2022 – Jul 2025',
  location: 'Budapest, Hungary',
  thesis: 'YPS — a real-time productivity dashboard (React, Node.js, MongoDB, Socket.IO)',
  topics: [
    'Algorithms & data structures',
    'Object-oriented programming',
    'Concurrent & functional programming',
    'Databases',
    'Telecommunications',
    'AI & machine learning',
    'Web development',
  ],
}

export interface Hackathon {
  event: string
  edition: string
  url: string
  logo: string
  place: string
  period: string
  result: string
  facts: string[]
  project: {
    title: string
    tagline: string
    description: string
    stack: string[]
    image: string
    live: string
    github: string
  }
}

export const hackathons: Hackathon[] = [
  {
    event: 'START Hack',
    edition: '2026',
    url: 'https://www.startglobal.org/start-hack',
    logo: '/hackathons/start-hack.svg',
    place: 'St. Gallen, Switzerland',
    period: 'March 2026',
    result: 'Top 3',
    facts: [
      '36-hour hackathon, run alongside START Summit — Europe’s largest student-run entrepreneurship conference',
      'Participants from 125 countries',
      'Team of 4, with engineers from Cloudera and Genesis',
    ],
    project: {
      title: 'StudyOnd',
      tagline: 'AI-powered thesis journey · Studyond challenge',
      description:
        'A platform that connects students with thesis topics, supervisors, industry experts and companies. It has an AI chat assistant and AI topic finder, AI rewriting of messages to supervisors (Gemini), a thesis-journey tracker, and XP and rankings that keep students moving.',
      stack: ['React', 'TypeScript', 'Supabase', 'Edge Functions', 'Gemini', 'Tailwind', 'shadcn/ui'],
      image: '/projects/studybuddy.webp',
      live: 'https://studyond-start.lovable.app',
      github: 'https://github.com/yuriipalam/studybuddy-mock',
    },
  },
]
