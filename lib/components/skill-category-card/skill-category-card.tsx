import React from 'react';
import type { Skill, CategoryConfig } from '@/lib/constants/skills';
import { SkillItem } from '@/lib/components/skill-item/skill-item';

interface SkillCategoryCardProps {
    category: CategoryConfig;
    skills: Skill[];
}

const SkillCategoryCardComponent = ({ category, skills }: SkillCategoryCardProps) => {
    const Icon = category.icon;

    return (
        <div className="bg-[#111216] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-[#38bdf8]/40 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="p-2 bg-white/[0.05] border border-white/10 rounded-lg">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#38bdf8]" aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">{category.label}</h3>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export const SkillCategoryCard = React.memo(SkillCategoryCardComponent);
