/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import { Calendar, TrendingUp } from "lucide-react";
import { Badge } from "../badge/badge";
import { JobExperience } from "@/lib/types/jobs";
import { useI18n } from "@/lib/i18n/context";
import Image from "next/image";

interface ExperienceCardProps {
    exp: JobExperience;
}

const ExperienceCardComponent = ({ exp }: ExperienceCardProps) => {
    const { t } = useI18n()
    return (
        <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-purple-500/10 group overflow-hidden">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl group-hover:border-purple-500/30 transition-all duration-300 group-hover:scale-110">
                            <img src={exp.icon} alt={exp.company} width={40} height={40} className="object-cover w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">{exp.role}</h3>
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
                                className="bg-gray-800/30 border-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {exp.achievements && exp.achievements.length > 0 && (
                    <div className="pt-6 border-t border-gray-800/50 group-hover:border-purple-500/30 transition-colors duration-300">
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
        </div>
    )
}

export const ExperienceCard = React.memo(ExperienceCardComponent);