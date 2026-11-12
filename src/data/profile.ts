export const profile = {
  name: 'Mykhailo Shepelenko',
  shortName: 'Mike',
  role: 'Full-Stack .NET & React Developer',
  location: 'Budapest, Hungary',
  email: 'shepelenkomykhailo@gmail.com',
  phone: '+36 20 425 7511',
  phoneHref: 'tel:+36204257511',
  cv: '/CV-Shepelenko-Mykhailo.pdf',
  photo: '/myphoto.jpeg',
  links: {
    github: 'https://github.com/shepelenkomikhail',
    linkedin: 'https://www.linkedin.com/in/shepelenkomykhailo/',
    telegram: 'https://t.me/shepelenkom',
  },
} as const

export const stats = [
  { value: '1 yr', label: 'commercial .NET at NIX' },
  { value: '240', label: 'automated tests in my latest product' },
  { value: '4', label: 'languages shipped in one storefront' },
  { value: '30+', label: 'public repositories on GitHub' },
] as const

export interface SkillGroup {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Backend',
    items: ['C#', '.NET 8 / 10', 'ASP.NET Core', 'Web API', 'MVC & Razor', 'ASP.NET Identity', 'EF Core', 'xUnit', 'Node.js', 'Express'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'TypeScript', 'Redux Toolkit / RTK Query', 'TanStack Query', 'Vue.js', 'Tailwind CSS', 'shadcn/ui', 'MUI', 'Vite'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'SQLite', 'Oracle SQL', 'MongoDB'],
  },
  {
    title: 'Cloud & tooling',
    items: ['Azure App Service', 'Azure PostgreSQL', 'Blob Storage', 'Application Insights', 'Docker', 'GitHub Actions', 'Vercel', 'Git', 'Figma'],
  },
  {
    title: 'Also',
    items: ['Java', 'Python', 'PHP', 'C', 'OpenAI API', 'Gemini API'],
  },
]

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'Ukrainian', level: 'Native' },
  { name: 'Russian', level: 'Native' },
  { name: 'German', level: 'A2' },
  { name: 'Italian', level: 'A2' },
  { name: 'Hungarian', level: 'A2' },
] as const

export const certificates = [
  { name: 'Full-Stack .NET Development', issuer: 'NIX', year: '2025' },
  { name: 'Big Data & Analytics', issuer: 'Cisco Networking Academy', year: '2023' },
] as const
