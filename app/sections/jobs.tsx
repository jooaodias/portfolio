'use client'

import React, { useCallback } from "react";
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { ExperienceCard } from "@/lib/components/experience-card/experience-card";
import { useI18n } from "@/lib/i18n/context";
import { getExperiences } from "@/lib/constants/jobsExperiences";

const JobsComponent = () => {
    const { t } = useI18n()
    const experiences = React.useMemo(() => getExperiences(t), [t])
    
    return (
        <div id="jobs" className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto px-4 sm:px-6 pb-2 pt-10">
            <AnimatedContent delay={0} duration={0.6}>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{t('jobs.title')}</h2>
                </div>
            </AnimatedContent>

            <div className="flex flex-col gap-6 sm:gap-8 w-full">
                {experiences.map((exp, index) => (
                    <AnimatedContent
                        key={exp.company}
                        delay={0.1 * (index + 1)}
                        duration={0.6}
                        direction="vertical"
                        reverse={false}
                    >
                        <ExperienceCard exp={exp} />
                    </AnimatedContent>
                ))}
            </div>
        </div>
    )
}

export const Jobs = React.memo(JobsComponent);