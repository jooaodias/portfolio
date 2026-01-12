export type Locale = 'pt-BR' | 'en-US'

export const translations = {
  'pt-BR': {
    // Menu
    menu: {
      home: 'Início',
      aboutMe: 'Sobre mim',
      jobs: 'Trabalhos',
      projects: 'Projetos',
      extra: 'Extra',
    },
    // Home page
    home: {
      from: 'do',
      name: 'João Vitor',
      typing: {
        text1: 'Meu nome é João Vitor',
        text2: 'Sou desenvolvedor Full Stack',
        text3: 'Frontend & Backend com Node.js 💻',
        text4: 'Bem-vindo ao meu site'
      },
      cta: {
        viewExperiences: 'Ver Experiências',
        contact: 'Entre em Contato'
      }
    },
    // About me
    aboutMe: {
      text1: 'Sou um Desenvolvedor Full Stack com forte experiência em frontend, atuando desde 2021 na criação de aplicações web modernas e escaláveis. Trabalho com React.js, Next.js e TypeScript no frontend, e Node.js, Fastify e PostgreSQL no backend, sempre focado em arquiteturas robustas e performáticas.',
      text2: 'Contribuo ativamente como suporte ao Chapter, participando de code reviews, ajudando na definição de padrões técnicos e atuando como Buddy no onboarding de novos desenvolvedores frontend. Acredito na importância da colaboração e compartilhamento de conhecimento em times de alta performance.',
      text3: 'Sou movido pela vontade de aprender continuamente, crescer como desenvolvedor full stack, e entregar soluções que gerem impacto real para usuários e negócios.',
    },
    // Jobs
    jobs: {
      title: 'Experiência Profissional',
      achievements: 'Principais Conquistas',
      current: 'Atual',
      experiences: {
        v4: {
          role: 'Desenvolvedor Frontend Pleno',
          period: 'Mar 2025 - Atual',
          description: {
            0: 'Desenvolvimento e manutenção de aplicações web full stack de alta disponibilidade, utilizadas por mais de 4 mil usuários ativos, com foco em arquitetura frontend e APIs backend em Node.js',
            1: 'Criação de APIs RESTful com Node.js e Fastify, integração com bancos de dados PostgreSQL, e implementação de arquiteturas de microserviços',
            2: 'Suporte ao Chapter Lead com code reviews, definição de padrões de código e boas práticas. Atuação como Buddy no onboarding de novos desenvolvedores frontend',
            3: 'Colaboração com times multifuncionais (design, backend e produto), promovendo consistência técnica entre projetos'
          },
          achievements: {
            0: 'Implementação de APIs backend com Fastify que suportam +4mil usuários ativos com alta performance',
            1: 'Atuação como Buddy, auxiliando no onboarding e desenvolvimento de novos membros do time frontend',
            2: 'Padronização de arquitetura frontend e contribuição em projetos de alto impacto'
          },
        },
        venturus: {
          role: 'Desenvolvedor Frontend Jr',
          period: 'Fev 2021 - Mar 2025',
          description: {
            0: 'Colaboração em ambiente Ágil (Scrum) com foco em entregas contínuas e melhoria constante dos produtos',
            1: 'Desenvolvimento com React.js e Next.js, utilizando Context API, Redux e React Query para gerenciamento de estado e otimização de performance',
            2: 'Documentação técnica e onboarding de novos membros, promovendo padronização',
          },
        },
      },
    },
    // Social badges
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    // Stats
    stats: {
      yearsExperience: 'Anos de Experiência',
      companies: 'Empresas',
      technologies: 'Tecnologias',
      projects: 'Projetos'
    }
  },
  'en-US': {
    // Menu
    menu: {
      home: 'Home',
      aboutMe: 'About me',
      jobs: 'Jobs',
      projects: 'Projects',
      extra: 'Extra',
    },
    // Home page
    home: {
      from: 'from',
      name: 'João Vitor',
      typing: {
        text1: 'My name is João Vitor',
        text2: "I'm a Full Stack Developer",
        text3: 'Frontend & Backend with Node.js 💻',
        text4: 'Welcome to my website'
      },
      cta: {
        viewExperiences: 'View Experience',
        contact: 'Get in Touch'
      }
    },
    // About me
    aboutMe: {
      text1: 'I am a Full Stack Developer with strong frontend expertise, working since 2021 on creating modern and scalable web applications. I work with React.js, Next.js and TypeScript on the frontend, and Node.js, Fastify and PostgreSQL on the backend, always focused on robust and performant architectures.',
      text2: 'I actively contribute as support to the Chapter, participating in code reviews, helping to define technical standards and acting as Buddy in onboarding new frontend developers. I believe in the importance of collaboration and knowledge sharing in high-performance teams.',
      text3: 'I am driven by the desire to learn continuously, grow as a full stack developer, and deliver solutions that generate real impact for users and businesses.',
    },
    // Jobs
    jobs: {
      title: 'Work Experience',
      achievements: 'Main Achievements',
      current: 'Current',
      experiences: {
        v4: {
          role: 'Mid-level Frontend Developer',
          period: 'Mar 2025 - Current',
          description: {
            0: 'Development and maintenance of high-availability full stack web applications, used by more than 4,000 active users, focusing on frontend architecture and Node.js backend APIs',
            1: 'Creation of RESTful APIs with Node.js and Fastify, PostgreSQL database integration, and implementation of microservices architectures',
            2: 'Support to Chapter Lead with code reviews, code standards definition and best practices. Acting as Buddy in onboarding of new frontend developers',
            3: 'Collaboration with cross-functional teams (design, backend and product), promoting technical consistency across projects'
          },
          achievements: {
            0: 'Implementation of backend APIs with Fastify supporting +4k active users with high performance',
            1: 'Acting as Buddy, assisting in onboarding and development of new frontend team members',
            2: 'Standardization of frontend architecture and contribution to high-impact projects'
          },
        },
        venturus: {
          role: 'Entry-level Frontend Developer',
          period: 'Feb 2021 - Mar 2025',
          description: {
            0: 'Collaboration in an Agile environment (Scrum) focused on continuous delivery and constant product improvement',
            1: 'Development with React.js and Next.js, using Context API, Redux and React Query for state management and performance optimization',
            2: 'Technical documentation and onboarding of new members, promoting standardization',
          },
        },
      },
    },
    // Social badges
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    // Stats
    stats: {
      yearsExperience: 'Years of Experience',
      companies: 'Companies',
      technologies: 'Technologies',
      projects: 'Projects'
    }
  },
} as const

