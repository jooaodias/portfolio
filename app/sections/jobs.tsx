'use client'

import React from "react";
import Image from "next/image";
import { Calendar, TrendingUp } from "lucide-react";
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { Badge } from "@/lib/components/badge/badge";
import { useI18n } from "@/lib/i18n/context";
import { getExperiences } from "@/lib/constants/jobsExperiences";

const JobsComponent = () => {
    const { t } = useI18n();
    const experiences = React.useMemo(() => getExperiences(t), [t]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const activeExp = experiences[selectedIndex] ?? experiences[0];

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((index + 1) % experiences.length);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((index - 1 + experiences.length) % experiences.length);
        }
    };

    return (
        <section id="jobs" className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto px-4 sm:px-6 pb-2 pt-8">
            <AnimatedContent delay={0} duration={0.45}>
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{t('jobs.title')}</h2>
                </div>
            </AnimatedContent>

            {/* Company Selector Tabs */}
            <div
                role="tablist"
                aria-label={t('jobs.title')}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full mb-4"
            >
                {experiences.map((exp, index) => {
                    const isActive = index === selectedIndex;
                    return (
                        <button
                            key={exp.company}
                            role="tab"
                            type="button"
                            id={`job-tab-${index}`}
                            aria-selected={isActive}
                            aria-controls={`job-panel-${index}`}
                            onClick={() => setSelectedIndex(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] ${
                                isActive
                                    ? 'bg-[#111216] border-[#38bdf8]/60 text-white'
                                    : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-zinc-200'
                            }`}
                        >
                            <div className="w-9 h-9 rounded-lg overflow-hidden bg-zinc-900 border border-white/10 shrink-0">
                                {exp.icon && (
                                    <Image
                                        src={exp.icon}
                                        alt={exp.company}
                                        width={36}
                                        height={36}
                                        className="w-9 h-9 object-cover"
                                    />
                                )}
                            </div>
                            <div className="min-w-0">
                                <div className="text-sm font-semibold truncate">{exp.company}</div>
                                <div className="text-xs text-zinc-400 truncate">{exp.period}</div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Active Experience Panel */}
            {activeExp && (
                <div
                    role="tabpanel"
                    id={`job-panel-${selectedIndex}`}
                    aria-labelledby={`job-tab-${selectedIndex}`}
                    className="w-full bg-[#111216] border border-white/10 rounded-2xl p-6 md:p-8"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-zinc-900 border border-white/10 rounded-xl w-12 h-12 shrink-0 overflow-hidden">
                                {activeExp.icon && (
                                    <Image
                                        src={activeExp.icon}
                                        alt={activeExp.company}
                                        width={48}
                                        height={48}
                                        className="object-cover w-12 h-12"
                                    />
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{activeExp.role}</h3>
                                <p className="text-base text-[#38bdf8] font-medium">{activeExp.company}</p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 text-zinc-400 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-lg self-start">
                            <Calendar className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                            <span className="text-xs font-medium">{activeExp.period}</span>
                        </div>
                    </div>

                    <div className="mb-6 space-y-3">
                        {activeExp.description.map((desc, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed">
                                {desc}
                            </p>
                        ))}
                    </div>

                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {activeExp.technologies.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="outline"
                                    className="bg-white/[0.03] border-white/12 text-zinc-300 hover:border-[#38bdf8]/50 transition-colors duration-200"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {activeExp.achievements && activeExp.achievements.length > 0 && (
                        <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                                <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">
                                    {t('jobs.achievements')}
                                </h4>
                            </div>
                            <ul className="space-y-2">
                                {activeExp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-zinc-300">
                                        <span className="text-emerald-400 mt-0.5" aria-hidden="true">→</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export const Jobs = React.memo(JobsComponent);
