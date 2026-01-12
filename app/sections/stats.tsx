'use client'

import React from "react";
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { Calendar, Code, Briefcase, FolderKanban } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const StatsComponent = () => {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2021; // Started in Feb 2021
    
    const stats = [
        { icon: Calendar, value: `${yearsOfExperience}+`, labelKey: 'stats.yearsExperience' },
        { icon: Briefcase, value: '2', labelKey: 'stats.companies' },
        { icon: FolderKanban, value: '13+', labelKey: 'stats.projects' },
        { icon: Code, value: '14+', labelKey: 'stats.technologies' },
    ];

    return (
        <div id="stats" className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
            <AnimatedContent delay={0} duration={0.6}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.labelKey}
                                className="flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
                            >
                                <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-400 text-center">
                                    {t(stat.labelKey)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </AnimatedContent>
        </div>
    );
};

export const Stats = React.memo(StatsComponent);
