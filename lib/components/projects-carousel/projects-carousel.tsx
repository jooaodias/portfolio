'use client'

import type { KeyboardEvent } from 'react'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { PortfolioProject } from '@/lib/types/projects'
import { ProjectCard } from '@/lib/components/project-card/project-card'

function getScrollBehavior(): ScrollBehavior {
  if (typeof window === 'undefined') return 'smooth'
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth'
}

interface ProjectsCarouselProps {
  projects: PortfolioProject[]
  /** Accessible name for the carousel region (e.g. translated section title). */
  ariaLabel: string
}

export function ProjectsCarousel({ projects, ariaLabel }: ProjectsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const rafRef = useRef<number | null>(null)

  const updateIndexFromScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el || projects.length === 0) return
    const w = el.clientWidth
    if (w <= 0) return
    const i = Math.round(el.scrollLeft / w)
    const clamped = Math.max(0, Math.min(projects.length - 1, i))
    setActiveIndex(clamped)
  }, [projects.length])

  const onScroll = useCallback(() => {
    if (rafRef.current != null) return
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null
      updateIndexFromScroll()
    })
  }, [updateIndexFromScroll])

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = viewportRef.current
      if (!el || projects.length === 0) return
      const clamped = Math.max(0, Math.min(projects.length - 1, index))
      const w = el.clientWidth
      el.scrollTo({
        left: clamped * w,
        behavior: getScrollBehavior(),
      })
    },
    [projects.length],
  )

  const goPrev = useCallback(() => {
    const el = viewportRef.current
    if (!el || projects.length === 0) return
    const w = el.clientWidth
    const i = Math.round(el.scrollLeft / w)
    scrollToIndex(i - 1)
  }, [projects.length, scrollToIndex])

  const goNext = useCallback(() => {
    const el = viewportRef.current
    if (!el || projects.length === 0) return
    const w = el.clientWidth
    const i = Math.round(el.scrollLeft / w)
    scrollToIndex(i + 1)
  }, [projects.length, scrollToIndex])

  const onViewportKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goNext()
      }
    },
    [goPrev, goNext],
  )

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const onScrollEnd = () => updateIndexFromScroll()
    el.addEventListener('scrollend', onScrollEnd)

    const ro = new ResizeObserver(() => {
      updateIndexFromScroll()
    })
    ro.observe(el)

    return () => {
      el.removeEventListener('scrollend', onScrollEnd)
      ro.disconnect()
    }
  }, [updateIndexFromScroll])

  const atStart = activeIndex <= 0
  const atEnd = activeIndex >= projects.length - 1

  if (projects.length === 0) {
    return null
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      className="relative w-full"
    >
      <div className="relative group/carousel">
        <div
          ref={viewportRef}
          onScroll={onScroll}
          onKeyDown={onViewportKeyDown}
          className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          tabIndex={0}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full min-w-full shrink-0 snap-center snap-always"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            disabled={atStart}
            aria-label="Previous project"
            className="pointer-events-auto ml-0 sm:-ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-700/80 bg-gray-900/90 text-gray-200 shadow-lg backdrop-blur-sm transition-colors hover:border-purple-500/50 hover:text-white disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={atEnd}
            aria-label="Next project"
            className="pointer-events-auto mr-0 sm:-mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-700/80 bg-gray-900/90 text-gray-200 shadow-lg backdrop-blur-sm transition-colors hover:border-purple-500/50 hover:text-white disabled:pointer-events-none disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <nav
        className="mt-6 flex justify-center gap-2"
        aria-label={`${ariaLabel} pagination`}
      >
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to project ${index + 1}: ${project.title}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            className={`h-2.5 w-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
              activeIndex === index
                ? 'scale-110 bg-gradient-to-r from-blue-400 to-purple-400'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </nav>
    </section>
  )
}
