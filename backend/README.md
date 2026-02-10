# Portfolio Blog API

API REST para o blog do portfólio, construída com **Clean Architecture**, **DDD**, **Fastify** e **Prisma**.

## Tech Stack

| Tecnologia | Descrição |
|------------|-----------|
| Fastify | Framework web performático |
| Prisma | ORM para PostgreSQL |
| PostgreSQL | Banco de dados relacional |
| TypeScript | Tipagem estática |
| Zod | Validação de schemas |
| Swagger | Documentação OpenAPI |
| tsup | Build para produção |

## Arquitetura

```
src/
├── domain/                    # Camada de Domínio (DDD)
│   ├── entities/              # Entidades de negócio
│   │   └── post.entity.ts
│   ├── value-objects/         # Value Objects
│   │   ├── slug.vo.ts
│   │   └── reading-time.vo.ts
│   └── repositories/          # Interfaces de repositório
│       └── post-repository.ts
│
├── application/               # Camada de Aplicação
│   ├── use-cases/             # Casos de uso
│   │   ├── create-post.ts
│   │   ├── list-posts.ts
│   │   ├── get-post-by-id.ts
│   │   ├── get-post-by-slug.ts
│   │   ├── update-post.ts
│   │   ├── delete-post.ts
│   │   └── toggle-publish.ts
│   └── validators/            # Schemas Zod
│       └── post.validator.ts
│
├── infra/                     # Camada de Infraestrutura
│   ├── config/
│   │   └── env.ts             # Variáveis de ambiente
│   ├── database/prisma/
│   │   ├── prisma-config.ts
│   │   ├── prisma-post-repository.ts
│   │   └── post-mapper.ts
│   ├── controller/
│   │   └── post-controller.ts
│   └── http/
│       ├── routes/
│       ├── middlewares/
│       └── swagger/
│
└── main.ts                    # Bootstrap + DI
```

## Início Rápido

### Pré-requisitos
- Node.js 18+
- Docker
- pnpm

### 1. Subir infraestrutura

```bash
docker-compose up -d
```

Isso inicia:
- **PostgreSQL** na porta `5432`
- **pgAdmin** na porta `5050`

### 2. Instalar e configurar

```bash
pnpm install
pnpm db:generate
pnpm db:push
pnpm db:seed  # opcional
```

### 3. Rodar

```bash
pnpm dev
```

- API: http://localhost:3001
- Swagger: http://localhost:3001/docs

## Scripts

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Servidor com hot-reload |
| `pnpm build` | Build para produção (tsup) |
| `pnpm start` | Executa build |
| `pnpm db:generate` | Gera cliente Prisma |
| `pnpm db:push` | Sincroniza schema |
| `pnpm db:seed` | Popula com dados de exemplo |
| `pnpm db:studio` | Abre Prisma Studio |
| `pnpm db:migrate:deploy` | Aplica migrations (prod) |

## Variáveis de Ambiente

```env
DATABASE_URL="postgresql://user:pass@localhost:5432/blog"
PORT=3001
HOST="0.0.0.0"
CORS_ORIGIN="http://localhost:3000"
```

## API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/posts` | Listar posts |
| GET | `/api/posts/:id` | Obter por ID |
| GET | `/api/posts/slug/:slug` | Obter por slug |
| POST | `/api/posts` | Criar post |
| PUT | `/api/posts/:id` | Atualizar post |
| DELETE | `/api/posts/:id` | Deletar post |
| PATCH | `/api/posts/:id/toggle-publish` | Publicar/Despublicar |
| GET | `/health` | Health check |

### Query Parameters (GET /api/posts)

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| page | number | Página (padrão: 1) |
| limit | number | Itens por página (max: 50) |
| published | boolean | Filtrar publicados |
| featured | boolean | Filtrar destaques |
| tag | string | Filtrar por tag |