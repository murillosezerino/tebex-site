'use client'

import { useEffect, useRef, useState, createContext, useContext } from 'react'

// ── Scroll Y context (one listener, shared by all consumers) ──
const ScrollContext = createContext(0)

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>
}

export function useScrollY() {
  return useContext(ScrollContext)
}

// ── Parallax background image ──
export function ParallaxBg({
  src, speed = 0.3, opacity = 0.15, style,
}: {
  src: string; speed?: number; opacity?: number; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollY = useScrollY()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.parentElement?.getBoundingClientRect()
    if (!rect) return
    const relativeScroll = scrollY - (scrollY + rect.top)
    setOffset(relativeScroll * speed)
  }, [scrollY, speed])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: '-20%',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity,
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: 'transform',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

// ── Reveal on scroll ──
export function Reveal({
  children, direction = 'up', delay = 0, distance = 60, style, className,
}: {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  distance?: number
  style?: React.CSSProperties
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translate = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, -${distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(-${distance}px, 0, 0)`,
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : translate[direction],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ── Animated counter ──
export function Counter({
  value, suffix = '', duration = 2000, style,
}: {
  value: number; suffix?: string; duration?: number; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState('0')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setDisplay(Math.round(eased * value).toString())
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, value, duration])

  return <span ref={ref} style={style}>{display}{suffix}</span>
}

// ── Floating parallax element (moves relative to scroll) ──
export function FloatingElement({
  children, speed = 0.1, style,
}: {
  children: React.ReactNode; speed?: number; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollY = useScrollY()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const elementCenter = scrollY + rect.top + rect.height / 2
    const viewportCenter = scrollY + window.innerHeight / 2
    setOffset((viewportCenter - elementCenter) * speed)
  }, [scrollY, speed])

  return (
    <div ref={ref} style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform', ...style }}>
      {children}
    </div>
  )
}
