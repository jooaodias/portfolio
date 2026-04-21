'use client'

import React from 'react'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { ProjectsCarousel } from '@/lib/components/projects-carousel/projects-carousel'
import { useI18n } from '@/lib/i18n/context'
import { getProjects } from '@/lib/constants/projects'

const ProjectComponent = () => {
  const { t } = useI18n()
  const projects = React.useMemo(() => getProjects(t), [t])

  return (
    <div
      id="projects"
      className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto px-4 sm:px-6 pb-4 pt-10"
    >
      <AnimatedContent delay={0} duration={0.6}>
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{t('projects.title')}</h2>
        </div>
      </AnimatedContent>

      <ProjectsCarousel projects={projects} ariaLabel={t('projects.title')} />
    </div>
  )
}

export const Project = React.memo(ProjectComponent)
