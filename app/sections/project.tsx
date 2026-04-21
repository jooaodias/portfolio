'use client'

import React from 'react'
import AnimatedContent from '@/lib/components/animated-content/animated-content'
import { ProjectCard } from '@/lib/components/project-card/project-card'
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

      <div className="flex flex-col gap-6 sm:gap-8 w-full">
        {projects.map((project, index) => (
          <AnimatedContent
            key={project.id}
            delay={0.1 * (index + 1)}
            duration={0.6}
            direction="vertical"
            reverse={false}
          >
            <ProjectCard project={project} />
          </AnimatedContent>
        ))}
      </div>
    </div>
  )
}

export const Project = React.memo(ProjectComponent)
