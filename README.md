# shepelenkomykhailo.com

Personal portfolio of Mykhailo Shepelenko — a single-page site with a dark/light theme and an always-on firefly background.

**Stack:** React 19, TypeScript, Vite 8, Tailwind CSS 4. No router or UI library; the contact form uses EmailJS (loaded on demand).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # type-check + production build into dist/
```

## Where things live

| What | File |
| --- | --- |
| Contacts, stats, skills, languages, certificates | `src/data/profile.ts` |
| Work experience and education | `src/data/experience.ts` |
| Projects — featured case study first, then ranked list | `src/data/projects.ts` |
| Firefly canvas | `src/components/Fireflies.tsx` |
| Theme colours (dark + light tokens) | `src/index.css` |
| CV download | `public/CV-Shepelenko-Mykhailo.pdf` (built from the LaTeX CV) |

To reorder projects, change the order of the `projects` array — cards are numbered automatically.

## Deploy

Every push to `main` is deployed to production by Vercel's Git integration (project `portfolio-upd`, domain shepelenkomykhailo.com).
Pull requests and other branches get preview deployments. `vercel.json` redirects the old `/aboutme` and `/projects` routes and adds long-term caching for hashed assets.
