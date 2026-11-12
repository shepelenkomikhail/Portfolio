import { useEffect } from 'react'

/**
 * Fades in every `.reveal` element the first time it scrolls into view.
 * One shared IntersectionObserver; a MutationObserver picks up elements rendered later
 * (for example cards shown by "Show more").
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0 },
    )

    const seen = new WeakSet<Element>()
    const observeNew = () =>
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
        if (seen.has(el)) return
        seen.add(el)
        io.observe(el)
      })

    observeNew()
    const mo = new MutationObserver(observeNew)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      io.disconnect()
    }
  }, [])
}
