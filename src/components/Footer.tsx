import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-faint">Built with React, TypeScript, Tailwind — and fireflies</p>
        <a href="#top" className="link-underline hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
