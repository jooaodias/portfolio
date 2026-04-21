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
    <article className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-purple-500/10 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4 min-w-0">
            <div
              className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-2xl border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-300 group-hover:scale-110"
              aria-hidden
            >
              {project.emoji}
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-base text-gray-300 font-medium">{project.subtitle}</p>
            </div>
          </div>
          {project.metric ? (
            <span className="shrink-0 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200">
              {project.metric}
            </span>
          ) : null}
        </div>

        <div className="mb-6 space-y-3">
          {project.description.map((paragraph, i) => (
            <p key={i} className="text-gray-300 leading-relaxed text-justify sm:text-left">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="pt-2 border-t border-gray-800/50 group-hover:border-purple-500/30 transition-colors duration-300">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-700/60 bg-gray-800/40 px-4 py-2.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-purple-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            <Github className="w-4 h-4 shrink-0" aria-hidden />
            <span>{linkLabel}</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export const ProjectCard = React.memo(ProjectCardComponent)
