export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  stack: string[]
  /** Screenshot in /public; projects without one get a generated cover */
  image?: string
  live?: string
  github?: string
  /** Shown instead of a GitHub link, e.g. for a private repository */
  note?: string
  kind: 'Full-stack' | 'Backend' | 'Frontend' | 'AI' | 'Client work' | 'Game'
}

/**
 * Featured case study — shown first and largest.
 */
export const featured = {
  title: 'Garden Rose',
  tagline: 'E-commerce platform for a Budapest florist',
  intro:
    'The online flower shop of Garden Rose, a florist with two boutiques in Budapest. Customers order ready-made bouquets and gifts or design their own bouquet, then choose same-day delivery or pickup at a boutique. The shop team runs orders, catalogue, delivery slots and reports from the admin panel.',
  live: 'https://gardenrose.shepelenkomykhailo.com/en',
  note: 'Private repository — happy to walk through the code',
  images: [
    { src: '/projects/gardenrose.webp', alt: 'Garden Rose home page with the hero bouquet illustration' },
    { src: '/projects/gardenrose-shop.webp', alt: 'Garden Rose shop with category chips, filters and product cards' },
    { src: '/projects/gardenrose-builder.webp', alt: 'Garden Rose bouquet builder, step one: choosing the size' },
  ],
  metrics: [
    { value: '4', label: 'languages: HU · EN · UA · RU, each with its own search-indexed pages' },
    { value: '40k', label: 'lines of C# and TypeScript' },
    { value: '0', label: 'WCAG 2.2 AA violations: usable with keyboard and screen readers' },
    { value: '52', label: 'pages, including 23 admin screens' },
  ],
  highlights: [
    'Modular monolith on .NET 10 — Web, Application, Core, Data and Integrations layers with 150+ REST endpoints. Prices, delivery fees and slot rules are enforced only on the server.',
    'Bouquet builder with live pricing, same-day delivery slots, delivery fees from real driving distance (OpenRouteService), cart, checkout and customer accounts.',
    'SEO-aware server fallback: per-page meta tags, hreflang, JSON-LD and an HTML content shell, so crawlers see real content in a React SPA.',
    'Admin panel with orders, catalogue, delivery settings and sales reports; transactional email through an outbox; images resized to WebP on upload.',
    'GitHub Actions CI/CD: lint, build, tests against PostgreSQL, EF migrations bundle, zip deploy to Azure App Service and a health-check smoke test.',
  ],
  stack: ['.NET 10', 'ASP.NET Core', 'EF Core 10', 'PostgreSQL 17', 'React 19', 'TypeScript', 'TanStack Query', 'Tailwind', 'shadcn/ui', 'Azure', 'GitHub Actions', 'xUnit'],
} as const

/**
 * Everything else, strongest first.
 */
export const projects: Project[] = [
  {
    slug: 'tapehouse',
    title: 'Tapehouse',
    tagline: 'Telegram Mini App + bot for real music playlists',
    description:
      'Forward audio to the bot and it lands in your Inbox. Sort tracks into playlists, drag to reorder, smart-shuffle, play in the app or send them back to a chat. Playlists sync across devices via Telegram CloudStorage; groups and channels get shared playlists.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Telegram Bot API', 'Mini Apps', 'Vercel Functions', 'Vercel Blob', 'Zod'],
    image: '/projects/tapehouse.webp',
    live: 'https://t.me/tapehouse_bot',
    github: 'https://github.com/shepelenkomikhail/tapehouse',
    kind: 'Full-stack',
  },
  {
    slug: 'nutrition-book',
    title: 'Nutrition Book',
    tagline: 'Recipe platform with an AI assistant',
    description:
      'Recipes with nutrition tables, shopping lists, comments, ratings and PDF export. Gemini runs server-side for recipe suggestions and nutrition analysis. Identity + JWT auth, Serilog logging, Docker.',
    stack: ['ASP.NET Core', 'EF Core', 'Identity + JWT', 'React', 'TypeScript', 'Redux', 'Ant Design', 'Gemini'],
    image: '/projects/nutritionbook.webp',
    live: 'https://nutrition-book.vercel.app',
    github: 'https://github.com/shepelenkomikhail/NutritionBook',
    kind: 'Full-stack',
  },
  {
    slug: 'yps',
    title: 'YPS — BSc thesis',
    tagline: 'Real-time productivity dashboard',
    description:
      'Drag-and-drop widgets for notes, calendar, weather and news, plus real-time chat with presence, typing indicators and file sharing. JWT and Google/GitHub OAuth sign-in.',
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'MUI'],
    image: '/projlogos/yps.png',
    github: 'https://github.com/shepelenkomikhail/YPS-Thesis',
    kind: 'Full-stack',
  },
  {
    slug: 'ai-translator',
    title: 'AI Translator',
    tagline: 'Chrome extension',
    description:
      'Translates between 100+ languages with automatic direction detection, phonetic transcription and right-click translation of selected text. Manifest V3.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'OpenAI API'],
    image: '/projlogos/translator.png',
    live: 'https://ai-translator-depl.vercel.app/',
    github: 'https://github.com/shepelenkomikhail/AI-Translator',
    kind: 'AI',
  },
  {
    slug: 'towing',
    title: 'ODŤAHOVÁ SLUŽBA',
    tagline: 'Landing page for a towing company',
    description:
      'Design, build and launch for a real towing business in Bratislava: responsive layout, automatic deployments and brand-focused Google Ads.',
    stack: ['HTML', 'Tailwind', 'JavaScript', 'Vercel', 'Google Ads'],
    image: '/projects/evacuator.webp',
    live: 'https://mz-odtahova-sluzba.com/',
    kind: 'Client work',
  },
  {
    slug: 'education-portal',
    title: 'Education Portal',
    tagline: 'Learning management system',
    description:
      'Courses with books, videos and articles, enrolment, progress tracking and skills earned on completion. Clean N-layer architecture with Repository and Unit of Work, role-based access and unit tests.',
    stack: ['.NET 8', 'ASP.NET Core MVC', 'EF Core', 'Identity', 'SQLite', 'Razor'],
    image: '/projlogos/education.png',
    github: 'https://github.com/shepelenkomikhail/Education-Portal',
    kind: 'Backend',
  },
  {
    slug: 'task-manager',
    title: 'Task Manager',
    tagline: '.NET Web API + React',
    description:
      'Task CRUD over a .NET 8 REST API with an RTK Query client, validated forms, dark/light theme, lazy-loaded routes and error boundaries.',
    stack: ['.NET 8', 'Web API', 'React', 'TypeScript', 'RTK Query', 'React Hook Form', 'MUI'],
    github: 'https://github.com/shepelenkomikhail/TaskManager',
    kind: 'Full-stack',
  },
  {
    slug: 'notes-agent',
    title: 'Notes Agent',
    tagline: 'AI analysis of Apple Notes',
    description:
      'A local macOS app that reads Apple Notes, lets you browse, search and select notes, and returns a structured analysis — themes, action items, dates and risks — locally or through OpenAI.',
    stack: ['Node.js', 'JavaScript', 'SQLite', 'OpenAI API'],
    github: 'https://github.com/shepelenkomikhail/NotesAgent',
    kind: 'AI',
  },
  {
    slug: 'fitness',
    title: 'Personal Coach',
    tagline: 'Fitness coach website',
    description: 'Portfolio for a fitness coach with services, consultation booking and programme purchase.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    image: '/projects/fitness.webp',
    live: 'https://maxfitness-eight.vercel.app/',
    github: 'https://github.com/shepelenkomikhail/PersonalCoach',
    kind: 'Client work',
  },
  {
    slug: 'boombastic',
    title: 'Boombastic',
    tagline: 'Multiplayer Bomberman-style game',
    description: 'University team project (4 people): multiplayer and competition modes, monsters, power-ups and curses, in pure Java.',
    stack: ['Java', 'Maven'],
    image: '/projlogos/bomberman.png',
    github: 'https://github.com/shepelenkomikhail/Boombastic',
    kind: 'Game',
  },
  {
    slug: 'job-portal',
    title: 'Job Portal',
    tagline: 'Job board dashboard',
    description: 'Filtering, search and sorting of vacancies, saved jobs, applications and detailed job pages.',
    stack: ['React', 'TypeScript', 'Tailwind'],
    image: '/projlogos/jobboard.png',
    live: 'https://job-portal-one-blush.vercel.app/',
    github: 'https://github.com/shepelenkomikhail/Job-Portal',
    kind: 'Frontend',
  },
]

/**
 * Smaller and older work, shown as a compact list.
 */
export const moreProjects: { title: string; note: string; stack: string; href: string }[] = [
  { title: 'Car rental app', note: 'Catalogue, booking form with price calculation', stack: 'React · TypeScript', href: 'https://shepelenkomikhail.github.io/udemx-test/' },
  { title: 'Rick & Morty library', note: 'UI for the public Rick & Morty API', stack: 'React · Chakra UI', href: 'https://shepelenkomikhail.github.io/RickMorty/' },
  { title: '2D board game', note: 'Browser game with multiplayer and limited moves', stack: 'JavaScript', href: 'https://ik-1.vercel.app/' },
  { title: 'Tron / Snake', note: 'Two-player game with a high-score database', stack: 'Java · MySQL', href: 'https://github.com/shepelenkomikhail/Tron-Game' },
  { title: 'Pebble game', note: 'Board game with a configurable board', stack: 'Java', href: 'https://github.com/shepelenkomikhail/Pebble-Game' },
  { title: 'Payment bot', note: 'Telegram bot for payments', stack: 'Python', href: 'https://github.com/shepelenkomikhail/PaymentBot' },
]
