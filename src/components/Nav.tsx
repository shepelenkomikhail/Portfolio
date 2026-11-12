import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import type { Theme } from '../lib/useTheme'
import { Close, Download, Menu, Moon, Sun } from './Icons'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2.5 font-display font-semibold" onClick={() => setOpen(false)}>
          <span className="logo-mark relative inline-flex h-8 items-center gap-1 overflow-hidden rounded-lg px-2.5 font-mono text-sm">
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">❯</span>
            <span className="text-ink">ms</span>
            <span className="h-[1.05em] w-[7px] translate-y-px animate-[blink_1.1s_steps(1)_infinite] bg-accent" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <a href={profile.cv} download="Shepelenko_Mykhailo_CV.pdf" className="btn-primary hidden px-4! py-2! sm:inline-flex">
            <Download width={16} height={16} /> CV
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line md:hidden">
        <ul className="container-x flex flex-col py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-base text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <a href={profile.cv} download="Shepelenko_Mykhailo_CV.pdf" className="btn-primary w-full">
              <Download width={16} height={16} /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
