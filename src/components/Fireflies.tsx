import { useEffect, useRef } from 'react'

/**
 * Always-on ambient background: softly glowing fireflies that wander and drift toward the cursor.
 *
 * Kept cheap on purpose:
 * - one fixed canvas, pointer-events: none
 * - each firefly is a pre-rendered glow sprite drawn with drawImage (no per-frame gradients or shadows)
 * - particle count scales with screen area (24–64), device pixel ratio capped at 1.5
 * - capped at ~40 fps, fully paused while the tab is hidden
 * - touch devices (phones/tablets): ≤ 26 flies, 30 fps, DPR 1, plain alpha blending, no redraw while a finger
 *   scrolls, and the canvas is sized to the largest viewport so the iOS toolbar showing/hiding never reallocates it
 * - prefers-reduced-motion: draws one still frame and never animates
 */

interface Fly {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  phase: number
  speed: number
  wander: number
  alt: boolean
}


function makeSprite(rgb: string, size = 64): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')!
  const r = size / 2
  const grad = g.createRadialGradient(r, r, 0, r, r, r)
  grad.addColorStop(0, `rgba(${rgb}, 1)`)
  grad.addColorStop(0.12, `rgba(${rgb}, 0.85)`)
  grad.addColorStop(0.35, `rgba(${rgb}, 0.22)`)
  grad.addColorStop(1, `rgba(${rgb}, 0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, size, size)
  return c
}

export default function Fireflies({ theme }: { theme: 'dark' | 'light' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const themeRef = useRef(theme)
  // Set by the animation effect; swaps colours without restarting the simulation
  const applyThemeRef = useRef<(() => void) | null>(null)

  // Theme changes only recolour the fireflies — the loop and their positions keep running
  useEffect(() => {
    themeRef.current = theme
    applyThemeRef.current?.()
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(pointer: coarse)').matches
    const FRAME_MS = 1000 / (touch ? 30 : 40)
    const MAX_FLIES = touch ? 26 : 64

    // Same values as --glow / --glow-2 in index.css
    let isLight = false
    let sprite: HTMLCanvasElement
    let sprite2: HTMLCanvasElement
    let composite: GlobalCompositeOperation = 'source-over'
    const applyTheme = () => {
      isLight = themeRef.current === 'light'
      sprite = makeSprite(isLight ? '214, 150, 40' : '245, 198, 107')
      sprite2 = makeSprite(isLight ? '56, 140, 190' : '125, 211, 252')
      // 'lighter' (additive) blending looks best on dark, but is slow in mobile Safari
      composite = isLight || touch ? 'source-over' : 'lighter'
    }
    applyTheme()

    let width = 0
    let height = 0
    let flies: Fly[] = []
    const mouse = { x: -9999, y: -9999, active: false }

    const spawn = (): Fly => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 10 + Math.random() * 16,
      phase: Math.random() * Math.PI * 2,
      speed: 0.6 + Math.random() * 1.2,
      wander: Math.random() * Math.PI * 2,
      alt: Math.random() < 0.18,
    })

    const resize = () => {
      const dpr = touch ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)
      // On phones use the largest viewport height (toolbar hidden) so scrolling never changes the canvas size
      const h = touch ? Math.max(window.innerHeight, document.documentElement.clientHeight, window.screen.height) : window.innerHeight
      if (flies.length && canvas.width === Math.round(window.innerWidth * dpr) && canvas.height === Math.round(h * dpr)) return
      width = window.innerWidth
      height = h
      canvas.style.height = `${h}px`
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const target = Math.max(touch ? 18 : 24, Math.min(MAX_FLIES, Math.round((width * height) / 26000)))
      while (flies.length < target) flies.push(spawn())
      if (flies.length > target) flies = flies.slice(0, target)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = composite
      for (const f of flies) {
        // flicker: slow breathing with an occasional brighter blink
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.0012 * f.speed + f.phase)
        const alpha = (isLight ? 0.18 : 0.25) + pulse * (isLight ? 0.4 : 0.75)
        const s = f.size * (0.75 + pulse * 0.45)
        ctx.globalAlpha = alpha
        ctx.drawImage(f.alt ? sprite2 : sprite, f.x - s / 2, f.y - s / 2, s, s)
      }
      ctx.globalAlpha = 1
    }

    const step = (dt: number) => {
      const k = dt / 16.7
      for (const f of flies) {
        // wander: rotate a heading a little each frame
        f.wander += (Math.random() - 0.5) * 0.25 * k
        f.vx += Math.cos(f.wander) * 0.012 * k
        f.vy += Math.sin(f.wander) * 0.012 * k - 0.002 * k // slight upward drift

        if (mouse.active) {
          const dx = mouse.x - f.x
          const dy = mouse.y - f.y
          const d2 = dx * dx + dy * dy
          if (d2 < 200 * 200 && d2 > 400) {
            const d = Math.sqrt(d2)
            f.vx += (dx / d) * 0.02 * k
            f.vy += (dy / d) * 0.02 * k
          }
        }

        f.vx *= 0.97
        f.vy *= 0.97
        f.x += f.vx * f.speed * k
        f.y += f.vy * f.speed * k

        const m = 30
        if (f.x < -m) f.x = width + m
        else if (f.x > width + m) f.x = -m
        if (f.y < -m) f.y = height + m
        else if (f.y > height + m) f.y = -m
      }
    }

    let raf = 0
    let last = 0
    let acc = 0
    let scrollingUntil = 0
    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      const dt = last ? Math.min(t - last, 100) : FRAME_MS
      last = t
      // on touch devices keep the main thread free for the finger while it scrolls; the last frame stays visible
      if (touch && t < scrollingUntil) return
      acc += dt
      if (acc < FRAME_MS) return
      step(acc)
      draw(t)
      acc = 0
    }

    const start = () => {
      if (raf || reduceMotion) return
      last = 0
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const onVisibility = () => (document.hidden ? stop() : start())
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => (mouse.active = false)
    const onScroll = () => {
      scrollingUntil = performance.now() + 180
    }
    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        resize()
        if (reduceMotion) draw(performance.now())
      }, 150)
    }

    resize()
    draw(performance.now())
    start()
    applyThemeRef.current = () => {
      applyTheme()
      draw(performance.now()) // recolour immediately (also covers reduced motion, where nothing loops)
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    if (touch) window.addEventListener('scroll', onScroll, { passive: true })
    else window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      applyThemeRef.current = null
      stop()
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full" />
}
