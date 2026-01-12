'use client'

import React from 'react';
import AnimatedContent from "@/lib/components/animated-content/animated-content";
import { skills, categories } from '@/lib/constants/skills';
import { SkillCategoryCard } from '@/lib/components/skill-category-card/skill-category-card';
import type { SkillCategory } from '@/lib/constants/skills';

const SkillsComponent = () => {
    const groupedSkills = React.useMemo(() => {
        return Object.keys(categories).reduce((acc, cat) => {
            acc[cat as SkillCategory] = skills.filter(s => s.category === cat);
            return acc;
        }, {} as Record<SkillCategory, typeof skills>);
    }, []);

    return (
        <div id="skills" className="flex flex-col justify-start items-start w-full max-w-4xl mx-auto px-4 sm:px-6 pb-8 pt-10">
            <AnimatedContent delay={0} duration={0.6}>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Skills & Tecnologias</h2>
                </div>
            </AnimatedContent>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                {Object.entries(groupedSkills).map(([catKey, categorySkills], catIndex) => {
                    if (categorySkills.length === 0) return null;

                    const category = categories[catKey as SkillCategory];

                    return (
                        <AnimatedContent
                            key={catKey}
                            delay={0.1 * (catIndex + 1)}
                            duration={0.6}
                            direction="vertical"
                        >
                            <SkillCategoryCard 
                                category={category} 
                                skills={categorySkills} 
                            />
                        </AnimatedContent>
                    );
                })}
            </div>
        </div>
    );
};

export const Skills = React.memo(SkillsComponent);
