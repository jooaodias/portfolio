# Portfolio Blog API

API REST para o blog do portfólio, construída com **Fastify**, **Prisma**, **PostgreSQL** e **TypeScript**.

## Tecnologias

- **Fastify** - Framework web rápido e eficiente
- **Prisma** - ORM moderno para Node.js
- **PostgreSQL** - Banco de dados relacional robusto
- **Docker** - Containerização do banco de dados
- **TypeScript** - Tipagem estática
- **Zod** - Validação de schemas

---

## Início Rápido

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ 
- [Docker](https://www.docker.com/) e Docker Compose

### 1. Iniciar o banco de dados (PostgreSQL)

```bash
# Inicia o PostgreSQL e pgAdmin em containers Docker
docker-compose up -d
```

Isso vai criar:
- **PostgreSQL** rodando na porta `5432`
- **pgAdmin** (interface gráfica) na porta `5050`

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o banco de dados

```bash
# Gerar o cliente Prisma
npm run db:generate

# Criar as tabelas no banco
npm run db:push

# (Opcional) Popular com dados de exemplo
npm run db:seed
```

### 4. Iniciar o servidor

```bash
npm run dev
```

O servidor estará disponível em: **http://localhost:3001**

---

## Docker Compose Explicado

O arquivo `docker-compose.yml` configura dois serviços:

### PostgreSQL (Banco de Dados)

```yaml
postgres:
  image: postgres:16-alpine     # Imagem oficial do PostgreSQL
  container_name: portfolio-blog-db
  environment:
    POSTGRES_USER: blog_user         # Usuário do banco
    POSTGRES_PASSWORD: blog_password_123  # Senha
    POSTGRES_DB: portfolio_blog      # Nome do banco
  ports:
    - "5432:5432"               # Porta local:porta container
  volumes:
    - postgres_data:/var/lib/postgresql/data  # Persiste dados
```

### pgAdmin (Interface Gráfica - Opcional)

```yaml
pgadmin:
  image: dpage/pgadmin4:latest
  ports:
    - "5050:80"                 # Acesse em http://localhost:5050
  environment:
    PGADMIN_DEFAULT_EMAIL: admin@admin.com
    PGADMIN_DEFAULT_PASSWORD: admin
```

### Comandos Docker úteis

```bash
# Iniciar containers em segundo plano
docker-compose up -d

# Ver logs em tempo real
docker-compose logs -f

# Parar containers (mantém dados)
docker-compose down

# Parar e REMOVER todos os dados
docker-compose down -v

# Ver status dos containers
docker-compose ps

# Reiniciar apenas o PostgreSQL
docker-compose restart postgres
```

### Acessar o pgAdmin

1. Abra http://localhost:5050
2. Login: `admin@admin.com` / `admin`
3. Adicionar servidor:
   - **Host**: `postgres` (nome do serviço)
   - **Port**: `5432`
   - **Username**: `blog_user`
   - **Password**: `blog_password_123`

---

## Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor com hot-reload |
| `npm run build` | Compila TypeScript para JavaScript |
| `npm run start` | Executa versão compilada |
| `npm run db:generate` | Gera cliente Prisma |
| `npm run db:push` | Sincroniza schema com banco |
| `npm run db:seed` | Popula banco com dados de exemplo |
| `npm run db:studio` | Abre Prisma Studio (interface visual) |

---

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

```bash
curl -X POST http://localhost:3001/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Meu primeiro post",
    "titleEn": "My first post",
    "excerpt": "Um resumo do post para atrair leitores",
    "excerptEn": "A post summary to attract readers",
    "content": "Conteúdo completo do post em markdown...",
    "contentEn": "Full post content in markdown...",
    "tags": ["react", "nextjs", "typescript"],
    "published": true,
    "featured": false
  }'
```

---

## Variáveis de Ambiente

```env
# PostgreSQL connection string
DATABASE_URL="postgresql://blog_user:blog_password_123@localhost:5432/portfolio_blog"

# Servidor
PORT=3001
HOST="0.0.0.0"

# CORS - URLs permitidas (separar por vírgula)
CORS_ORIGIN="http://localhost:3000"
```

---

## Estrutura do Projeto

```
backend/
├── docker-compose.yml   # Configuração Docker
├── prisma/
│   ├── schema.prisma    # Schema do banco de dados
│   └── seed.ts          # Dados de exemplo
├── src/
│   ├── config/          # Configurações (DB, env)
│   ├── controllers/     # Lógica dos endpoints
│   ├── models/          # Schemas de validação
│   ├── routes/          # Definição de rotas
│   ├── utils/           # Utilitários
│   └── server.ts        # Entrada da aplicação
└── package.json
```

---

## Troubleshooting

### Erro de conexão com o banco

```bash
# Verifique se o container está rodando
docker-compose ps

# Veja os logs do PostgreSQL
docker-compose logs postgres

# Reinicie o container
docker-compose restart postgres
```

### Porta 5432 já em uso

```bash
# No Linux/Mac, encontre o processo
lsof -i :5432

# Ou mude a porta no docker-compose.yml
ports:
  - "5433:5432"  # Use porta 5433 localmente
```

### Resetar banco de dados

```bash
# Remove containers e volumes (APAGA TODOS OS DADOS)
docker-compose down -v

# Recria tudo do zero
docker-compose up -d
npm run db:push
npm run db:seed
```

---

## Próximos Passos

- [ ] Adicionar autenticação JWT para rotas admin
- [ ] Implementar upload de imagens (S3/Cloudinary)
- [ ] Adicionar cache com Redis
- [ ] Criar painel administrativo
- [ ] Adicionar testes automatizados
- [ ] Configurar CI/CD
