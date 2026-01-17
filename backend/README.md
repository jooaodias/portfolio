# Portfolio Blog API

API REST para o blog do portfólio, construída com **Fastify**, **Prisma** e **TypeScript**.

## Tecnologias

- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para Node.js
- **SQLite** - Banco de dados leve (pode migrar para PostgreSQL)
- **TypeScript** - Tipagem estática
- **Zod** - Validação de schemas

## Instalação

```bash
# Instalar dependências
npm install

# Gerar cliente Prisma
npm run db:generate

# Criar/atualizar banco de dados
npm run db:push

# (Opcional) Popular com dados de exemplo
npm run db:seed
```

## Scripts Disponíveis

```bash
# Desenvolvimento (com hot-reload)
npm run dev

# Build para produção
npm run build

# Executar em produção
npm run start

# Prisma Studio (interface visual do banco)
npm run db:studio
```

## Endpoints da API

### Posts

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/posts` | Listar posts |
| GET | `/api/posts/:id` | Obter post por ID |
| GET | `/api/posts/slug/:slug` | Obter post por slug |
| POST | `/api/posts` | Criar post |
| PUT | `/api/posts/:id` | Atualizar post |
| DELETE | `/api/posts/:id` | Deletar post |
| PATCH | `/api/posts/:id/toggle-publish` | Alternar publicação |

### Query Parameters (GET /api/posts)

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| page | number | Página (padrão: 1) |
| limit | number | Itens por página (padrão: 10, max: 50) |
| published | boolean | Filtrar por publicados |
| featured | boolean | Filtrar por destaque |
| tag | string | Filtrar por tag |

### Exemplo de criação de post

```json
POST /api/posts
{
  "title": "Meu primeiro post",
  "titleEn": "My first post",
  "excerpt": "Um resumo do post para atrair leitores",
  "excerptEn": "A post summary to attract readers",
  "content": "Conteúdo completo do post em markdown...",
  "contentEn": "Full post content in markdown...",
  "coverImage": "https://example.com/image.jpg",
  "tags": ["react", "nextjs", "typescript"],
  "published": true,
  "featured": false
}
```

## Variáveis de Ambiente

```env
DATABASE_URL="file:./dev.db"
PORT=3001
HOST="0.0.0.0"
CORS_ORIGIN="http://localhost:3000"
```

## Estrutura do Projeto

```
backend/
├── prisma/
│   └── schema.prisma    # Schema do banco de dados
├── src/
│   ├── config/          # Configurações (DB, env)
│   ├── controllers/     # Lógica dos endpoints
│   ├── models/          # Schemas de validação
│   ├── routes/          # Definição de rotas
│   ├── utils/           # Utilitários
│   └── server.ts        # Entrada da aplicação
└── package.json
```

## Próximos Passos

- [ ] Adicionar autenticação para rotas admin
- [ ] Migrar para PostgreSQL em produção
- [ ] Adicionar upload de imagens
- [ ] Implementar cache com Redis
- [ ] Adicionar testes automatizados
