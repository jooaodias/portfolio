import { Code, Zap } from "lucide-react";
import { JobExperience } from "../types/jobs";

export const getExperiences = (t: (key: string) => string): JobExperience[] => [
  {
    company: "V4 Company",
    role: t('jobs.experiences.v4.role'),
    period: t('jobs.experiences.v4.period'),
    description: [
      t('jobs.experiences.v4.description.0'),
      t('jobs.experiences.v4.description.1'),
      t('jobs.experiences.v4.description.2'),
    ],
    technologies: ["React.js", "Next.js", "TurboRepo", "React Query", "TypeScript", "GitHub Actions"],
    achievements: [
      t('jobs.experiences.v4.achievements.0'),
      t('jobs.experiences.v4.achievements.1'),
    ],
    icon: <Zap className="w-5 h-5" />
  },
  {
    company: "Venturus",
    role: t('jobs.experiences.venturus.role'),
    period: t('jobs.experiences.venturus.period'),
    description: [
      t('jobs.experiences.venturus.description.0'),
      t('jobs.experiences.venturus.description.1'),
      t('jobs.experiences.venturus.description.2'),
    ],
    technologies: ["React.js", "Next.js", "Redux", "React Query", "TypeScript"],
    icon: <Code className="w-5 h-5" />
  }
];