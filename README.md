# Portfolio - João Aleixo

Portfolio pessoal moderno e otimizado desenvolvido com Next.js 16, React 19 e TypeScript.

## 🚀 Tecnologias

- **Framework**: Next.js 16.0.10 (App Router)
- **UI**: React 19.2.0
- **Estilização**: Tailwind CSS 4
- **Animações**: IntersectionObserver API (nativo)
- **3D/WebGL**: OGL (Galaxy Background)
- **Ícones**: Lucide React, Simple Icons
- **Internacionalização**: Context API customizado
- **Analytics**: Google Analytics 4

## ✨ Features

### Performance
- ⚡ Animações otimizadas com IntersectionObserver
- 🎨 WebGL background com framerate otimizado
- 🖼️ Lazy loading de imagens com blur placeholder
- 📦 React.memo e useMemo para prevenir re-renders
- 🔤 Fontes com display: swap
- 📉 Debounced resize handlers

### Visual & UX
- 💫 Cards modernos com gradientes e glassmorphism
- ✨ Micro-animações e efeitos hover sofisticados
- 🎯 CTAs evidentes e intuitivos
- 📊 Seção de Skills com indicadores visuais de proficiência
- 📈 Footer com estatísticas profissionais
- 🎨 Design system consistente com cores gradientes

### SEO & Acessibilidade
- 🔍 Structured Data (JSON-LD)
- 🗺️ Sitemap.xml automático
- 🤖 robots.txt otimizado
- 📱 Meta tags Open Graph e Twitter Card
- ♿ ARIA labels e navegação acessível

### Internacionalização
- 🌍 Suporte para Português (BR) e Inglês (US)
- 🔄 Troca de idioma com animação suave
- 💾 Persistência de preferência no localStorage

## 📁 Estrutura do Projeto

```
about-me/
├── app/
│   ├── layout.tsx           # Layout raiz com metadata e providers
│   ├── page.tsx             # Página principal
│   ├── main.tsx             # Wrapper com Galaxy background
│   ├── sitemap.ts           # Sitemap automático
│   ├── robots.ts            # Configuração robots.txt
│   └── sections/
│       ├── about-me.tsx     # Seção sobre mim
│       ├── skills.tsx       # Seção de habilidades
│       ├── jobs.tsx         # Experiências profissionais
│       └── project.tsx      # Projetos
├── lib/
│   ├── components/
│   │   ├── animated-content/     # Animações com IntersectionObserver
│   │   ├── background/galaxy.tsx # Background WebGL otimizado
│   │   ├── experience-card/      # Cards de experiência modernizados
│   │   ├── menu/                 # Navigation menu com indicador
│   │   ├── footer/               # Footer com estatísticas
│   │   └── structured-data/      # SEO structured data
│   ├── i18n/                # Internacionalização
│   ├── hooks/               # Custom hooks
│   ├── constants/           # Dados das experiências
│   └── types/               # TypeScript types
└── public/
    ├── images/              # Imagens otimizadas
    ├── icons/               # SVG icons
    └── favicon/             # Favicons multi-device
```

## 📄 Licença

© 2025 João Vitor Aleixo. All rights reserved.

## 🤝 Contato

- **GitHub**: [@jooaodias](https://github.com/jooaodias)
- **LinkedIn**: [João Aleixo](https://www.linkedin.com/in/joao-aleixo-dias/)
- **Email**: joaovitordias92040@gmail.com
