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
        text2: 'Sou desenvolvedor frontend',
        text3: 'Aprendendo Node.js também 💻',
        text4: 'Bem-vindo ao meu site'
      },
    },
    // About me
    aboutMe: {
      text1: 'Sou um Desenvolvedor Front-end apaixonado por criar aplicações web modernas e escaláveis. Desde 2020, tenho me dedicado a aprimorar minhas habilidades em desenvolvimento front-end, acompanhando as tecnologias mais atuais e enfrentando desafios complexos em times colaborativos.',
      text2: 'Também estou expandindo meus conhecimentos em Node.js, buscando compreender melhor o ecossistema full stack e aprimorar minha capacidade de integração entre front-end e back-end.',
      text3: 'Sou movido pela vontade de aprender continuamente, crescer como desenvolvedor e entregar soluções que gerem impacto real para usuários e negócios.',
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
            0: 'Desenvolvimento e manutenção de aplicações web de alta disponibilidade, utilizadas por mais de 4 mil usuários ativos',
            1: 'Criação e evolução de arquiteturas front-end, aplicando padrões de projeto com foco em performance e experiência do usuário',
            2: 'Colaboração com times multifuncionais (design, backend e produto), promovendo boas práticas e consistência entre projetos'
          },
          achievements: {
            0: 'Aumento de performance em aplicações críticas',
            1: 'Padronização de código e contribuição em projetos com alto volume de usuários'
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
        text2: "I'm frontend developer",
        text3: 'Learning Node.js too 💻',
        text4: 'Welcome to my website'
      },
    },
    // About me
    aboutMe: {
      text1: 'I am a Front-end Developer passionate about creating modern and scalable web applications. Since 2020, I have dedicated myself to improving my skills in front-end development, keeping up with the latest technologies and facing complex challenges in collaborative teams.',
      text2: 'I am also expanding my knowledge in Node.js, seeking to better understand the full stack ecosystem and improve my ability to integrate between front-end and back-end.',
      text3: 'I am driven by the desire to learn continuously, grow as a developer and deliver solutions that generate real impact for users and businesses.',
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
            0: 'Development and maintenance of high-availability web applications, used by more than 4,000 active users',
            1: 'Creation and evolution of front-end architectures, applying design patterns focused on performance and user experience',
            2: 'Collaboration with cross-functional teams (design, backend and product), promoting best practices and consistency between projects'
          },
          achievements: {
            0: 'Performance increase in critical applications',
            1: 'Code standardization and contribution to projects with high user volume'
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
  },
} as const

