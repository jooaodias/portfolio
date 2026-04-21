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
      blog: 'Blog',
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
    // Projects
    projects: {
      title: 'Projetos destacados',
      viewOnGithub: 'Ver no GitHub',
      items: {
        agroecologia: {
          title: 'Site de Agroecologia',
          subtitle: 'IFSP Campus Campinas · Iniciação Científica',
          description: {
            0: 'Desenvolvido durante bolsa de Iniciação Científica junto ao grupo de Ecologia do IFSP Campus Campinas. O projeto consistiu na criação e reformulação do site institucional do núcleo de Agroecologia da instituição, conectando a comunidade acadêmica a práticas sustentáveis e ao trabalho com assentamentos rurais da região de Campinas. Uma experiência que uniu tecnologia, meio ambiente e impacto social.',
          },
        },
        votacidade: {
          title: 'Votacidade',
          subtitle: 'Minha Campinas · Iniciação Científica',
          description: {
            0: 'Plataforma de participação cidadã desenvolvida em parceria com a ONG Minha Campinas, durante outra bolsa de Iniciação Científica. O Votacidade permite que moradores da cidade votem e participem de decisões municipais de forma digital e acessível. O projeto reforçou minha experiência com desenvolvimento voltado à comunidade e com colaboração em ambientes open source de impacto real.',
          },
          metric: '15k+ usuários',
        },
        mapaAcessivel: {
          title: 'Mapa Acessível',
          subtitle: 'Ensino técnico · Trabalho de conclusão de curso (TCC)',
          description: {
            0: 'Projeto de conclusão de curso do ensino técnico, desenvolvido para mapear colaborativamente locais acessíveis a pessoas com deficiência ou mobilidade reduzida. A aplicação permite que usuários contribuam com informações sobre acessibilidade em espaços públicos e privados, promovendo inclusão através da tecnologia. Foi meu primeiro grande projeto autoral, e um dos que mais me orgulho até hoje.',
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
    },
    // Blog
    blog: {
      title: 'Blog',
      description: 'Artigos sobre desenvolvimento, projetos e minha jornada como desenvolvedor',
      noPosts: 'Nenhum post encontrado',
      noPostsDescription: 'Volte em breve para novos artigos!',
      readMore: 'Leia mais',
      backToBlog: 'Voltar ao Blog',
      share: 'Compartilhar',
      minRead: 'min de leitura',
      searchPlaceholder: 'Buscar posts...',
      allTags: 'Todos',
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
      blog: 'Blog',
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
    // Projects
    projects: {
      title: 'Featured projects',
      viewOnGithub: 'View on GitHub',
      items: {
        agroecologia: {
          title: 'Agroecology website',
          subtitle: 'IFSP Campinas · Undergraduate research (IC)',
          description: {
            0: 'Built during a scientific initiation scholarship with the Ecology group at IFSP Campinas. The project involved creating and redesigning the institutional website for the campus agroecology hub, connecting the academic community with sustainable practices and work with rural settlements in the Campinas region—bringing together technology, the environment, and social impact.',
          },
        },
        votacidade: {
          title: 'Votacidade',
          subtitle: 'Minha Campinas · Undergraduate research (IC)',
          description: {
            0: 'A civic participation platform developed in partnership with the Minha Campinas NGO during another scientific initiation scholarship. Votacidade lets residents vote and take part in municipal decisions digitally and accessibly. It strengthened my experience building community-focused software and collaborating in open source projects with real-world impact.',
          },
          metric: '15k+ users',
        },
        mapaAcessivel: {
          title: 'Accessible Map',
          subtitle: 'Technical high school · Capstone (TCC)',
          description: {
            0: 'Technical high school capstone aimed at collaboratively mapping places accessible to people with disabilities or reduced mobility. The app lets users contribute accessibility information for public and private spaces, promoting inclusion through technology. It was my first major authored project and one I am still especially proud of.',
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
    },
    // Blog
    blog: {
      title: 'Blog',
      description: 'Articles about development, projects, and my journey as a developer',
      noPosts: 'No posts found',
      noPostsDescription: 'Check back soon for new articles!',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
      share: 'Share',
      minRead: 'min read',
      searchPlaceholder: 'Search posts...',
      allTags: 'All',
    }
  },
} as const

