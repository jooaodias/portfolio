'use client'

import React from 'react'
import { Github } from 'lucide-react'
import type { PortfolioProject } from '@/lib/types/projects'
import { useI18n } from '@/lib/i18n/context'

interface ProjectCardProps {
  project: PortfolioProject
}

function ProjectCardComponent({ project }: ProjectCardProps) {
  const { t } = useI18n()
  const githubHref = `https://github.com/${project.githubSlug}`
  const linkLabel = `${t('projects.viewOnGithub')} (${project.githubSlug})`

  return (
    <article className="bg-[#111216] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#38bdf8]/40 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div className="flex items-start gap-4 min-w-0">
          <div
            className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] text-2xl border border-white/10"
            aria-hidden
          >
            {project.emoji}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#38bdf8] font-medium">{project.subtitle}</p>
          </div>
        </div>
        {project.metric ? (
          <span className="shrink-0 inline-flex items-center rounded-full border border-[#38bdf8]/35 bg-[#38bdf8]/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            {project.metric}
          </span>
        ) : null}
      </div>

      <div className="mb-6 space-y-3">
        {project.description.map((paragraph, i) => (
          <p key={i} className="text-zinc-300 leading-relaxed text-justify sm:text-left">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="pt-4 border-t border-white/10">
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-[#38bdf8]/50 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111216]"
        >
          <Github className="w-4 h-4 shrink-0" aria-hidden />
          <span>{linkLabel}</span>
        </a>
      </div>
    </article>
  )
}

export const ProjectCard = React.memo(ProjectCardComponent)
