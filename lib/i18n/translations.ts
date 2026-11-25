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
      name: 'João Vitor Aleixo',
      roleBadge: 'Front End Software Engineer · Fintech',
      summary: 'Desenvolvo aplicações financeiras usadas diariamente por milhões de pessoas com React, Node.js, TypeScript e SSR, usando IA no dia a dia para acelerar protótipos, entregas e análises de produto.',
      bento: {
        currentStatus: 'Atualmente @ Mercado Pago · Brasil',
        impactTitle: 'Escala & Trajetória',
        dailyUsersValue: 'Milhões',
        dailyUsersLabel: 'Usuários',
        stackTitle: 'Stack Principal & Workflow',
        connectTitle: 'Conexões Diretas',
        basedIn: 'Brasil',
      },
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
      text1: 'Trabalho com desenvolvimento web desde 2021, com base principal em frontend usando React, Next.js e TypeScript, além de experiência em backend com Node.js, Fastify e PostgreSQL.',
      text2: 'Atualmente faço parte do time de fintech do Mercado Pago, onde atuo na construção de produtos financeiros em escala, cuidando de demandas de ponta a ponta com Produto e UX, do desenho técnico ao monitoramento em produção.',
      text3: 'Ao longo da carreira também apoiei o Chapter de frontend em code reviews, padronização de arquitetura e acompanhamento de novos integrantes como Buddy.',
    },
    // Jobs
    jobs: {
      title: 'Experiência Profissional',
      achievements: 'Principais Conquistas',
      current: 'Atual',
      experiences: {
        mercadolivre: {
          role: 'Software Engineer Front End',
          period: 'Mai 2026 - Atual',
          description: {
            0: 'Atuação em produtos de fintech com React, Node.js, TypeScript e SSR, conduzindo demandas entre times com Produto e UX e acompanhando métricas de negócio e performance.',
            1: 'Condução de demandas cross-team, da análise à implantação, em parceria com Produto e UX',
            2: 'Ownership de temas, participação em deploys e testes automatizados no ciclo de entrega'
          },
          achievements: {
            0: 'Evolução de fluxos financeiros acessados diariamente por milhões de usuários',
            1: 'Uso de IA no desenvolvimento de tarefas, protótipos rápidos, análise de métricas com Produto e acompanhamento de rollout/deploy',
            2: 'Atualizações de arquitetura, testes automatizados e plantões de produção',
            3: 'Participação em migrações de tecnologia e atualização de bibliotecas para versões modernas',
            4: 'Investigação e resolução de incidentes em produção'
          },
        },
        v4: {
          role: 'Desenvolvedor Frontend Pleno',
          period: 'Mar 2025 - Abr 2026',
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
      name: 'João Vitor Aleixo',
      roleBadge: 'Front End Software Engineer · Fintech',
      summary: 'I build financial applications used daily by millions of people with React, Node.js, TypeScript, and SSR, using AI day-to-day to speed up prototypes, delivery, and product metrics analysis.',
      bento: {
        currentStatus: 'Currently @ Mercado Pago · Brazil',
        impactTitle: 'Scale & Track Record',
        dailyUsersValue: 'Millions',
        dailyUsersLabel: 'Users',
        stackTitle: 'Core Stack & Workflow',
        connectTitle: 'Direct Links',
        basedIn: 'Brazil',
      },
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
      text1: 'I have been building web applications since 2021, with a primary focus on frontend using React, Next.js, and TypeScript, alongside backend work with Node.js, Fastify, and PostgreSQL.',
      text2: 'I currently work on Mercado Pago’s fintech team building financial products at scale, partnering with Product and UX from technical design through rollout and production monitoring.',
      text3: 'Along the way I have also supported the frontend Chapter through code reviews, architecture standards, and mentoring new engineers as an onboarding Buddy.',
    },
    // Jobs
    jobs: {
      title: 'Work Experience',
      achievements: 'Main Achievements',
      current: 'Current',
      experiences: {
        mercadolivre: {
          role: 'Front End Software Engineer',
          period: 'May 2026 - Current',
          description: {
            0: 'Working on fintech products with React, Node.js, TypeScript, and SSR, leading cross-team initiatives with Product and UX while tracking business and performance metrics.',
            1: 'Leading cross-team initiatives, from analysis to deployment, in partnership with Product and UX',
            2: 'Ownership of key initiatives, rollout monitoring, and automated testing'
          },
          achievements: {
            0: 'Evolution of financial flows accessed daily by millions of users',
            1: 'Daily use of AI for task implementation, rapid prototypes, metrics analysis shared with Product, and rollout/deploy tracking',
            2: 'Architecture upgrades, automated tests, and production on-call support',
            3: 'Contribution to technology migrations and library upgrades to modern versions',
            4: 'Production incident investigation and resolution'
          },
        },
        v4: {
          role: 'Mid-level Frontend Developer',
          period: 'Mar 2025 - Apr 2026',
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
