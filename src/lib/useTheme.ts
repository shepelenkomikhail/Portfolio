import { useCallback, useState } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'dark' | 'light'

function initialTheme(): Theme {
  // index.html already applied the saved choice before first paint; dark is the default
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

/** Writes the theme to the page in a single frame, with every CSS transition switched off meanwhile. */
function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.add('theme-switching')
  root.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a0c11' : '#f8f5ee')
  try {
    localStorage.setItem('theme', theme)
  } catch {
    // storage can be unavailable (private mode); the theme still applies for this visit
  }
  void root.offsetHeight // commit the new styles while transitions are off
  // a timer, not requestAnimationFrame: rAF never fires in a background tab, which would leave transitions off
  window.setTimeout(() => root.classList.remove('theme-switching'), 50)
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  const toggle = useCallback(() => {
    const next: Theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    const swap = () => {
      applyTheme(next)
      flushSync(() => setTheme(next))
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Cross-fade old → new as one GPU snapshot instead of hundreds of separate colour transitions
    if (document.startViewTransition && !reduceMotion) document.startViewTransition(swap)
    else swap()
  }, [])

  return { theme, toggle }
}
