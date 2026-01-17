import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const posts = [
  {
    slug: 'minha-jornada-como-desenvolvedor',
    title: 'Minha Jornada como Desenvolvedor Full Stack',
    titleEn: 'My Journey as a Full Stack Developer',
    excerpt: 'Compartilho minha trajetória desde os primeiros passos na programação até me tornar um desenvolvedor full stack.',
    excerptEn: 'I share my journey from my first steps in programming to becoming a full stack developer.',
    content: `# Minha Jornada como Desenvolvedor Full Stack

Desde criança, sempre fui fascinado por tecnologia. Lembro de desmontar brinquedos eletrônicos para entender como funcionavam por dentro. Essa curiosidade me levou naturalmente à programação.

## Os Primeiros Passos

Comecei a programar aos 16 anos, aprendendo HTML e CSS para criar páginas simples. Logo descobri o JavaScript e fiquei maravilhado com as possibilidades de interatividade.

## A Transição para o Profissional

Após alguns anos estudando por conta própria e fazendo projetos pessoais, consegui minha primeira oportunidade como desenvolvedor júnior em 2021. Foi um período de muito aprendizado e crescimento.

## Onde Estou Hoje

Hoje trabalho como desenvolvedor full stack, utilizando React.js e Next.js no frontend, e Node.js com Fastify no backend. A cada dia aprendo algo novo e continuo evoluindo.

## Lições Aprendidas

- **Nunca pare de aprender**: A tecnologia evolui rapidamente
- **Construa projetos reais**: A teoria é importante, mas a prática é essencial
- **Colabore com outros**: Trabalhar em equipe acelera o aprendizado
- **Documente seu código**: Seu eu do futuro agradece`,
    contentEn: `# My Journey as a Full Stack Developer

Since childhood, I've always been fascinated by technology. I remember taking apart electronic toys to understand how they worked inside. This curiosity naturally led me to programming.

## The First Steps

I started programming at 16, learning HTML and CSS to create simple pages. Soon I discovered JavaScript and was amazed by the possibilities of interactivity.

## The Transition to Professional

After a few years of self-study and personal projects, I got my first opportunity as a junior developer in 2021. It was a period of great learning and growth.

## Where I Am Today

Today I work as a full stack developer, using React.js and Next.js on the frontend, and Node.js with Fastify on the backend. Every day I learn something new and continue to evolve.

## Lessons Learned

- **Never stop learning**: Technology evolves rapidly
- **Build real projects**: Theory is important, but practice is essential
- **Collaborate with others**: Teamwork accelerates learning
- **Document your code**: Your future self will thank you`,
    coverImage: null,
    tags: JSON.stringify(['carreira', 'desenvolvimento', 'javascript']),
    published: true,
    featured: true,
    readingTime: 4,
  },
  {
    slug: 'por-que-nextjs-e-meu-framework-favorito',
    title: 'Por que Next.js é meu Framework Favorito',
    titleEn: 'Why Next.js is my Favorite Framework',
    excerpt: 'Descubra os motivos pelos quais escolhi Next.js como meu framework principal para desenvolvimento web.',
    excerptEn: 'Discover the reasons why I chose Next.js as my main framework for web development.',
    content: `# Por que Next.js é meu Framework Favorito

Após experimentar diversos frameworks e bibliotecas, encontrei no Next.js a ferramenta perfeita para desenvolvimento web moderno.

## Server-Side Rendering (SSR)

O SSR do Next.js melhora significativamente o SEO e a performance inicial da página. Isso é crucial para projetos que precisam ser bem indexados pelos mecanismos de busca.

## App Router

O novo App Router trouxe ainda mais poder ao Next.js:

- **Server Components**: Renderização no servidor por padrão
- **Layouts aninhados**: Compartilhamento de UI entre páginas
- **Loading states**: Estados de carregamento declarativos

## API Routes

A possibilidade de criar APIs diretamente no projeto facilita muito o desenvolvimento de aplicações full stack.

## Comunidade e Ecossistema

A comunidade Next.js é muito ativa e o ecossistema de ferramentas é rico. Bibliotecas como Prisma, Tailwind CSS e Shadcn/ui se integram perfeitamente.

## Conclusão

Next.js oferece uma experiência de desenvolvimento excelente com performance de produção. É minha escolha padrão para novos projetos.`,
    contentEn: `# Why Next.js is my Favorite Framework

After experimenting with various frameworks and libraries, I found Next.js to be the perfect tool for modern web development.

## Server-Side Rendering (SSR)

Next.js SSR significantly improves SEO and initial page performance. This is crucial for projects that need to be well indexed by search engines.

## App Router

The new App Router brought even more power to Next.js:

- **Server Components**: Server-side rendering by default
- **Nested layouts**: UI sharing between pages
- **Loading states**: Declarative loading states

## API Routes

The ability to create APIs directly in the project makes full stack application development much easier.

## Community and Ecosystem

The Next.js community is very active and the tool ecosystem is rich. Libraries like Prisma, Tailwind CSS and Shadcn/ui integrate seamlessly.

## Conclusion

Next.js offers an excellent development experience with production performance. It's my default choice for new projects.`,
    coverImage: null,
    tags: JSON.stringify(['nextjs', 'react', 'frontend']),
    published: true,
    featured: false,
    readingTime: 3,
  },
  {
    slug: 'criando-apis-com-fastify',
    title: 'Criando APIs Performáticas com Fastify',
    titleEn: 'Creating High-Performance APIs with Fastify',
    excerpt: 'Um guia prático sobre como criar APIs rápidas e eficientes usando Fastify e TypeScript.',
    excerptEn: 'A practical guide on how to create fast and efficient APIs using Fastify and TypeScript.',
    content: `# Criando APIs Performáticas com Fastify

Fastify é um framework web para Node.js focado em performance e experiência do desenvolvedor.

## Por que Fastify?

- **Performance**: Um dos frameworks mais rápidos para Node.js
- **Schema validation**: Validação integrada com JSON Schema
- **TypeScript first**: Excelente suporte a TypeScript
- **Plugin system**: Arquitetura extensível

## Exemplo Básico

\`\`\`typescript
import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.get('/hello', async () => {
  return { message: 'Hello World!' }
})

app.listen({ port: 3000 })
\`\`\`

## Validação com Zod

Uso Zod para validação de schemas, que funciona muito bem com Fastify:

\`\`\`typescript
import { z } from 'zod'

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})
\`\`\`

## Conclusão

Fastify é minha escolha para APIs em Node.js. A combinação de performance e DX é imbatível.`,
    contentEn: `# Creating High-Performance APIs with Fastify

Fastify is a web framework for Node.js focused on performance and developer experience.

## Why Fastify?

- **Performance**: One of the fastest frameworks for Node.js
- **Schema validation**: Integrated validation with JSON Schema
- **TypeScript first**: Excellent TypeScript support
- **Plugin system**: Extensible architecture

## Basic Example

\`\`\`typescript
import Fastify from 'fastify'

const app = Fastify({ logger: true })

app.get('/hello', async () => {
  return { message: 'Hello World!' }
})

app.listen({ port: 3000 })
\`\`\`

## Validation with Zod

I use Zod for schema validation, which works great with Fastify:

\`\`\`typescript
import { z } from 'zod'

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
})
\`\`\`

## Conclusion

Fastify is my choice for Node.js APIs. The combination of performance and DX is unbeatable.`,
    coverImage: null,
    tags: JSON.stringify(['fastify', 'nodejs', 'backend', 'typescript']),
    published: true,
    featured: false,
    readingTime: 3,
  },
]

async function main() {
  console.log('🌱 Seeding database...')

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
    console.log(`  ✓ Created/updated post: ${post.title}`)
  }

  console.log('✅ Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
