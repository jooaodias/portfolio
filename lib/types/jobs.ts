export interface JobExperience {
    company: string;
    role: string;
    period: string;
    description: string[];
    technologies: string[];
    achievements?: string[];
    icon?: React.ReactNode;
  }