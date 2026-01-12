import { Code2, Database, Wrench } from "lucide-react";
import {
    siReact, siNextdotjs, siTypescript, siJavascript, siHtml5, siCss,
    siTailwindcss, siNodedotjs, siExpress, siGit, siGithubactions, siReactquery,
    siWebpack, siVite, siFastify, siDocker, siPostgresql
} from 'simple-icons';

export type SkillCategory = 'frontend' | 'backend' | 'tools';

export interface Skill {
    name: string;
    icon: string;
    color: string;
    category: SkillCategory;
}

export interface CategoryConfig {
    icon: typeof Code2;
    label: string;
    color: string;
}

export const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: siReact.path, color: '#61DAFB', category: 'frontend' },
    { name: 'Next.js', icon: siNextdotjs.path, color: '#000000', category: 'frontend' },
    { name: 'TypeScript', icon: siTypescript.path, color: '#3178C6', category: 'frontend' },
    { name: 'JavaScript', icon: siJavascript.path, color: '#F7DF1E', category: 'frontend' },
    { name: 'HTML5', icon: siHtml5.path, color: '#E34F26', category: 'frontend' },
    { name: 'CSS3', icon: siCss.path, color: '#1572B6', category: 'frontend' },
    { name: 'Tailwind CSS', icon: siTailwindcss.path, color: '#06B6D4', category: 'frontend' },
    { name: 'React Query', icon: siReactquery.path, color: '#764ABC', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: siNodedotjs.path, color: '#339933', category: 'backend' },
    { name: 'Express', icon: siExpress.path, color: '#61DAFB', category: 'backend' },
    { name: 'Fastify', icon: siFastify.path, color: '#FF8700', category: 'backend' },
    { name: 'PostgreSQL', icon: siPostgresql.path, color: '#336791', category: 'backend' },

    // Tools
    { name: 'Git', icon: siGit.path, color: '#F05032', category: 'tools' },
    { name: 'GitHub Actions', icon: siGithubactions.path, color: '#2088FF', category: 'tools' },
    { name: 'Docker ', icon: siDocker.path, color: '#2496ED', category: 'tools' },
    { name: 'Vite', icon: siVite.path, color: '#646CFF', category: 'tools' },
];

export const categories: Record<SkillCategory, CategoryConfig> = {
    frontend: { icon: Code2, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { icon: Database, label: 'Backend', color: 'from-green-500 to-emerald-500' },
    tools: { icon: Wrench, label: 'Tools & DevOps', color: 'from-purple-500 to-pink-500' },
};
