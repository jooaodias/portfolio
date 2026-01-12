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
        <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-500 shadow-xl group overflow-hidden">
            <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{category.label}</h3>
                </div>

                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                    {skills.map((skill) => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const SkillCategoryCard = React.memo(SkillCategoryCardComponent);
