import React from 'react';
import type { Skill } from '@/lib/constants/skills';

interface SkillItemProps {
    skill: Skill;
}

const SkillItemComponent = ({ skill }: SkillItemProps) => {
    return (
        <div
            className="flex flex-col items-center gap-2 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group/item"
            title={skill.name}
        >
            <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover/item:scale-110"
                fill={skill.color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={skill.icon} />
            </svg>
            <span className="text-[10px] sm:text-xs text-gray-400 text-center group-hover/item:text-white transition-colors">
                {skill.name}
            </span>
        </div>
    );
};

export const SkillItem = React.memo(SkillItemComponent);
