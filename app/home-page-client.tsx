'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { toast } from 'react-toastify'
import { useI18n } from '@/lib/i18n/context'
import { getExperiences } from '@/lib/constants/jobsExperiences'
import { getProjects } from '@/lib/constants/projects'
import { useFeatureFlag } from '@/lib/hooks/useFeatureFlag'
import { ThemeToggle } from '@/lib/components/theme-toggle/theme-toggle'
import { useShortcutLabel } from '@/lib/components/command-palette/command-palette'
import { SkillGlyph, type SkillIconName } from '@/lib/components/skill-icon/skill-icon'

const SKILL_GROUPS: {
  titlePt: string
  titleEn: string
  items: { labelPt: string; labelEn?: string; icon: SkillIconName }[]
}[] = [
  {
    titlePt: 'Frontend',
    titleEn: 'Frontend',
    items: [
      { labelPt: 'React.js', icon: 'react' },
      { labelPt: 'Next.js', icon: 'nextjs' },
      { labelPt: 'TypeScript', icon: 'typescript' },
      { labelPt: 'Tailwind CSS', icon: 'tailwind' },
      { labelPt: 'React Query & Redux', icon: 'state' },
    ],
  },
  {
    titlePt: 'Backend',
    titleEn: 'Backend',
    items: [
      { labelPt: 'Node.js', icon: 'nodejs' },
      { labelPt: 'Fastify & Express', icon: 'fastify' },
      { labelPt: 'PostgreSQL', icon: 'postgres' },
      { labelPt: 'SSR & APIs REST', labelEn: 'SSR & REST APIs', icon: 'ssr' },
    ],
  },
  {
    titlePt: 'Obs, Infra & IA',
    titleEn: 'Obs, Infra & AI',
    items: [
      { labelPt: 'Datadog & Grafana', icon: 'datadog' },
      { labelPt: 'Claude & Codex', icon: 'ai' },
      { labelPt: 'Docker & TurboRepo', icon: 'docker' },
      { labelPt: 'Git & GitHub Actions', icon: 'git' },
      { labelPt: 'Jest & Testing Library', icon: 'jest' },
    ],
  },
]

export default function HomePageClient() {
  const { locale, setLocale, t } = useI18n()
  const isEn = locale === 'en-US'
  const experiences = useMemo(() => getExperiences(t), [t])
  const projects = useMemo(() => getProjects(t), [t])
  const { isEnabled: isBlogEnabled } = useFeatureFlag('blog_feature')
  const { label: shortcutLabel, isTouchOnly } = useShortcutLabel()
  const [activeSection, setActiveSection] = useState('about-me')
  const [secondaryLogoError, setSecondaryLogoError] = useState(false)

  useEffect(() => {
    const sectionIds = ['about-me', 'jobs', 'projects', 'skills', ...(isBlogEnabled ? ['blog'] : [])]
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-25% 0px -60% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isBlogEnabled])

  const navItems = useMemo(() => {
    const base = [
      { id: 'about-me', label: t('menu.aboutMe') },
      { id: 'jobs', label: isEn ? 'Experience' : 'Experiência' },
      { id: 'projects', label: t('menu.projects') },
      { id: 'skills', label: 'Skills' },
    ]
    if (isBlogEnabled) {
      base.push({ id: 'blog', label: t('menu.blog') })
    }
    return base
  }, [t, isEn, isBlogEnabled])

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('joaovitordias92040@gmail.com')
    toast.success(isEn ? 'Email copied!' : 'Email copiado!')
  }

  return (
    <div id="home" className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-12">
        {/* LEFT COLUMN (STICKY ON DESKTOP) */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            {/* Identity */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/25 shrink-0 bg-elevated">
                <Image
                  src="/images/its-me.jpeg"
                  alt={t('home.name')}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                  priority
                  quality={85}
                />
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-accent-text">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                {t('home.bento.currentStatus')}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.025em] text-ink sm:text-5xl">
              <a href="#about-me">{t('home.name')}</a>
            </h1>
            <p className="mt-3 text-lg font-medium tracking-tight text-ink-secondary sm:text-xl">
              {t('home.roleBadge')}
            </p>
            <p className="mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-ink-muted">
              {t('home.summary')}
            </p>

            {/* Quick controls: Command Palette + Theme + Language */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                className="inline-flex items-center gap-2.5 rounded-lg border border-border-subtle bg-elevated px-3 py-1.5 text-xs text-ink-secondary hover:border-border-hover hover:text-ink transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Quick nav' : 'Navegação rápida'}</span>
                {!isTouchOnly && (
                  <kbd className="font-mono rounded bg-canvas px-1.5 py-0.5 text-[11px] text-ink-muted border border-border-subtle">
                    {shortcutLabel}
                  </kbd>
                )}
              </button>

              <ThemeToggle />

              <button
                type="button"
                onClick={() => setLocale(isEn ? 'pt-BR' : 'en-US')}
                aria-label={isEn ? 'Mudar idioma para Português' : 'Switch language to English'}
                className="inline-flex items-center justify-center h-8 px-2.5 rounded-lg border border-border-subtle bg-elevated text-xs font-mono font-medium text-ink-muted hover:border-border-hover hover:text-accent transition-colors cursor-pointer"
              >
                {isEn ? 'PT' : 'EN'}
              </button>
            </div>

            {/* Vertical ScrollSpy Navigation */}
            <nav aria-label={isEn ? 'Main navigation' : 'Navegação principal'} className="hidden lg:block mt-12">
              <ul className="flex flex-col gap-3.5 w-max">
                {navItems.map((item) => {
                  const active = activeSection === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`nav-link group flex items-center py-1 rounded-sm ${active ? 'active' : ''}`}
                      >
                        <span className="nav-indicator mr-4" aria-hidden="true" />
                        <span className="nav-text text-xs font-semibold uppercase tracking-widest text-ink-muted transition-colors">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Social & Direct Links */}
          <div className="mt-8 lg:mt-0 flex items-center gap-5 text-ink-muted">
            <a
              href="https://github.com/jooaodias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joao-aleixo-dias/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              LinkedIn
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="hover:text-accent transition-colors text-sm font-medium inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email
            </button>
          </div>
        </header>

        {/* RIGHT COLUMN (SCROLLABLE CONTENT) */}
        <main className="pt-16 lg:w-[54%] lg:py-24 flex flex-col gap-24">
          {/* ABOUT */}
          <section id="about-me" className="scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-sticky px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:mb-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ink-secondary lg:text-ink-muted">
                {t('menu.aboutMe')}
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-[15px] sm:text-base leading-relaxed text-ink-secondary max-w-[65ch]">
              <p>{t('aboutMe.text1')}</p>
              <p>{t('aboutMe.text2')}</p>
              <p>{t('aboutMe.text3')}</p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="jobs" className="scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-sticky px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:mb-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ink-secondary lg:text-ink-muted">
                {isEn ? 'Experience' : 'Experiência'}
              </h2>
            </div>

            <div className="hover-group flex flex-col gap-6">
              {experiences.map((job) => (
                <article
                  key={job.company}
                  className="hover-card group relative grid sm:grid-cols-8 gap-4 rounded-xl p-5 -mx-5 border border-transparent hover:border-border-hover hover:bg-surface"
                >
                  <div className="sm:col-span-2 flex flex-col gap-2.5 pt-1">
                    <span className="font-mono text-xs text-ink-muted uppercase tracking-wide">
                      {job.period}
                    </span>
                    <div className="flex items-center gap-2">
                      {job.icon && (
                        <Image
                          src={job.icon}
                          alt={job.company}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain rounded"
                        />
                      )}
                      {job.secondaryIcon && !secondaryLogoError && (
                        <Image
                          src={job.secondaryIcon}
                          alt="Mercado Pago"
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain rounded"
                          onError={() => setSecondaryLogoError(true)}
                        />
                      )}
                      {job.secondaryIcon && secondaryLogoError && (
                        <span
                          title="Mercado Pago"
                          className="w-7 h-7 rounded bg-accent-soft border border-accent/25 text-accent-text text-[10px] font-bold inline-flex items-center justify-center"
                        >
                          MP
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                      {job.role} · {job.company}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {job.description[0]}
                    </p>
                    {job.achievements && job.achievements.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-1 text-xs text-ink-muted list-disc pl-4">
                        {job.achievements.slice(0, 3).map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-sticky px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:mb-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ink-secondary lg:text-ink-muted">
                {t('menu.projects')}
              </h2>
            </div>

            <div className="hover-group flex flex-col gap-5">
              {projects.map((project) => {
                const href = project.githubSlug
                  ? `https://github.com/${project.githubSlug}`
                  : undefined
                return (
                  <a
                    key={project.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-card group block rounded-xl p-5 -mx-5 border border-transparent hover:border-border-hover hover:bg-surface"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors inline-flex items-center gap-1.5">
                        {project.title}
                        <ArrowUpRight
                          className="w-4 h-4 text-ink-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          aria-hidden="true"
                        />
                      </h3>
                      {project.metric && (
                        <span className="font-mono text-xs text-accent-text shrink-0">
                          {project.metric}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-ink-muted mt-0.5">{project.subtitle}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                      {project.description[0]}
                    </p>
                  </a>
                )
              })}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 bg-sticky px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:mb-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ink-secondary lg:text-ink-muted">
                Skills
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 border-t border-border-subtle pt-8">
              {SKILL_GROUPS.map((group) => (
                <div key={group.titlePt}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-ink mb-4">
                    {isEn ? group.titleEn : group.titlePt}
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-sm text-ink-muted">
                    {group.items.map((item) => (
                      <li
                        key={item.labelPt}
                        className="group flex items-center gap-2.5 hover:text-ink transition-colors"
                      >
                        <SkillGlyph name={item.icon} />
                        <span>{isEn && item.labelEn ? item.labelEn : item.labelPt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* BLOG TEASER */}
          {isBlogEnabled && (
            <section id="blog" className="scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-sticky px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:bg-transparent lg:px-0 lg:py-0 lg:mb-5">
                <h2 className="text-xs font-bold uppercase tracking-widest text-ink-secondary lg:text-ink-muted">
                  {t('menu.blog')}
                </h2>
              </div>
              <div className="rounded-xl border border-border-subtle bg-surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {isEn
                      ? 'Notes on frontend engineering, architecture, and product'
                      : 'Notas sobre engenharia frontend, arquitetura e produto'}
                  </h3>
                  <p className="text-sm text-ink-muted mt-1">
                    {isEn
                      ? 'Practical write-ups on what I have been building and studying.'
                      : 'Textos práticos sobre o que venho construindo e estudando.'}
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="group inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-accent-soft text-accent-text hover:opacity-90 text-sm font-medium transition-opacity shrink-0"
                >
                  {isEn ? 'Read posts' : 'Ler artigos'}
                  <ArrowUpRight
                    className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>
          )}

          {/* FOOTER */}
          <footer className="pb-12 pt-4 border-t border-border-subtle text-xs text-ink-muted flex flex-wrap items-center justify-between gap-2">
            <span>{t('home.name')} · Campinas, {isEn ? 'Brazil' : 'Brasil'}</span>
            <span>Next.js, TypeScript &amp; Tailwind CSS</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
