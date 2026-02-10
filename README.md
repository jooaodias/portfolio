# Portfolio - João Aleixo

Portfolio pessoal full stack com blog integrado, desenvolvido com Next.js 16, Fastify e PostgreSQL.

## Tech Stack

### Frontend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Next.js | 16.0.10 | Framework React com App Router |
| React | 19.2.0 | Biblioteca UI |
| TypeScript | 5.7 | Tipagem estática |
| Tailwind CSS | 4 | Estilização utility-first |
| OGL | - | WebGL para background animado |
| Lucide React | - | Ícones |

### Backend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Fastify | 5.2 | Framework web performático |
| Prisma | 6.4 | ORM para PostgreSQL |
| PostgreSQL | 16 | Banco de dados relacional |
| Zod | 3.24 | Validação de schemas |
| Swagger | - | Documentação da API |

### Feature Flags
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| Statsig | 3.31 | Feature flags e A/B testing |
| @statsig/react-bindings | 3.31 | Integração React para Statsig |

### Arquitetura Backend
- **Clean Architecture** com separação de camadas
- **DDD** (Domain-Driven Design) com Value Objects
- **Repository Pattern** com Prisma
- **Use Cases** para regras de negócio

### Hospedagem
| Serviço | Uso |
|---------|-----|
| Vercel | Frontend (Next.js) |
| Render | Backend (Fastify) |
| Neon | PostgreSQL (serverless) |
| Statsig | Feature flags (SaaS) |

## Features

### Portfolio
- Design moderno com glassmorphism e gradientes
- Background WebGL animado (galaxy)
- Internacionalização (PT-BR / EN-US)
- SEO otimizado (Structured Data, Sitemap, Open Graph)
- Animações com IntersectionObserver

### Blog
- Posts com Markdown
- Suporte bilíngue (PT/EN)
- Feature flags para controle de funcionalidades
- Painel admin para gerenciamento

### Admin Panel (`/blog/admin`)
- Criar/Editar posts com editor Markdown
- Publicar/Despublicar posts
- Deletar posts com confirmação
- Preview em tempo real

### Feature Flags (Statsig)
- Controle de funcionalidades em tempo real
- Custom hook `useFeatureFlag` para fácil integração
- Suporte para rollouts graduais e A/B testing
- Configuração sem necessidade de deploy

**Feature Flag: Blog (`blog_feature`)**
- Controla visibilidade do blog no menu
- Protege rotas `/blog`, `/blog/[slug]` e `/blog/admin`
- Redireciona para home quando desabilitado

## Estrutura do Projeto

```
about-me/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Home (portfolio)
│   ├── blog/
│   │   ├── page.tsx          # Lista de posts
│   │   ├── [slug]/page.tsx   # Post individual
│   │   └── admin/            # Painel administrativo
│   └── sections/             # Seções do portfolio
├── lib/
│   ├── components/           # Componentes reutilizáveis
│   ├── hooks/                # Custom React hooks (useFeatureFlag)
│   ├── services/             # API clients
│   ├── i18n/                 # Internacionalização
│   └── types/                # TypeScript types
├── backend/
│   ├── src/
│   │   ├── domain/           # Entidades e Value Objects
│   │   ├── application/      # Use Cases e Validators
│   │   └── infra/            # Controllers, DB, HTTP
│   ├── prisma/               # Schema e migrations
│   └── docker-compose.yml    # PostgreSQL local
└── public/                   # Assets estáticos
```

## Licença

© 2025 João Vitor Aleixo. All rights reserved.

## Contato

- **GitHub**: [@jooaodias](https://github.com/jooaodias)
- **LinkedIn**: [João Aleixo](https://www.linkedin.com/in/joao-aleixo-dias/)
- **Email**: joaovitordias92040@gmail.com
