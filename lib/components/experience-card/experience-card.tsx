'use client'

import { Calendar, TrendingUp } from "lucide-react";
import { Badge } from "../badge/badge";
import { JobExperience } from "@/lib/types/jobs";
import { useI18n } from "@/lib/i18n/context";

interface ExperienceCardProps {
    exp: JobExperience;
}
export function ExperienceCard({ exp }: ExperienceCardProps) {
    const { t } = useI18n()
    return (<>
        <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-gray-700/50 transition-all duration-300 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50">
                        {exp.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-base text-gray-300 font-medium">{exp.company}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium">{exp.period}</span>
                </div>
            </div>

            <div className="mb-6 space-y-3">
                {exp.description.map((desc, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed">
                        {desc}
                    </p>
                ))}
            </div>

            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            className="bg-gray-800/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:border-gray-600/50"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            {exp.achievements && exp.achievements.length > 0 && (
                <div className="pt-6 border-t border-gray-800/50">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide">{t('jobs.achievements')}</h4>
                    </div>
                    <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                                <span className="text-green-400">→</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </>)
}