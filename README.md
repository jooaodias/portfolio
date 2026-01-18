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
| Redis | 7 | Cache (ioredis) |
| Zod | 3.24 | Validação de schemas |
| Swagger | - | Documentação da API |

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
| Upstash | Redis (serverless) |

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
- Cache Redis para performance
- Painel admin para gerenciamento

### Admin Panel (`/blog/admin`)
- Criar/Editar posts com editor Markdown
- Publicar/Despublicar posts
- Deletar posts com confirmação
- Preview em tempo real

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
│   ├── services/             # API clients
│   ├── i18n/                 # Internacionalização
│   └── types/                # TypeScript types
├── backend/
│   ├── src/
│   │   ├── domain/           # Entidades e Value Objects
│   │   ├── application/      # Use Cases e Validators
│   │   └── infra/            # Controllers, DB, Cache
│   ├── prisma/               # Schema e migrations
│   └── docker-compose.yml    # PostgreSQL + Redis local
└── public/                   # Assets estáticos
```

## Licença

© 2025 João Vitor Aleixo. All rights reserved.

## Contato

- **GitHub**: [@jooaodias](https://github.com/jooaodias)
- **LinkedIn**: [João Aleixo](https://www.linkedin.com/in/joao-aleixo-dias/)
- **Email**: joaovitordias92040@gmail.com
