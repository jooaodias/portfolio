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
      t('jobs.experiences.v4.description.3'),
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Fastify", "PostgreSQL", "Docker", "TurboRepo", "React Query", "TypeScript", "GitHub Actions"],
    achievements: [
      t('jobs.experiences.v4.achievements.0'),
      t('jobs.experiences.v4.achievements.1'),
      t('jobs.experiences.v4.achievements.2'),
    ],
    icon: "https://i.imgur.com/pujrYSq.png"
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
    icon: "https://media.licdn.com/dms/image/v2/D4D0BAQEIThwZwzZCEA/company-logo_200_200/B4DZaDCK6qHwAM-/0/1745955106878/venturus_logo?e=2147483647&v=beta&t=HBSf1iSh-bcIM0x42yX0auQu2Cd5b4KRJIvdvIABsKs"
  }
];