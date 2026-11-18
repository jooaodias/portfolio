# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, engineering managers, and tech leads evaluating João Vitor Aleixo's profile for software engineering opportunities and professional networking. Secondary visitors include developers exploring his featured projects and technical blog posts.

## Product Purpose

Present João Vitor Aleixo's professional experience, technical stack, featured projects, and technical writing in a fast, bilingual (`pt-BR` / `en-US`) personal portfolio (`https://joaoaleixo.dev`), enabling visitors to assess his background within seconds and reach out via GitHub, LinkedIn, or email.

## Positioning

Combines hands-on Front End Software Engineering experience in Mercado Pago's fintech area—building financial applications used daily by millions of users with React, Node.js, TypeScript, and SSR—with intensive AI-assisted Full Cycle and Spec-Driven Development (SDD) practices, backed by prior full stack delivery (Fastify, PostgreSQL) and community/open-source projects.

## Operating Context

- **Languages:** Bilingual client-side i18n (`pt-BR` and `en-US`) via `lib/i18n/translations.ts` and `lib/i18n/context.tsx`.
- **Primary surfaces:** Single-page portfolio (`app/home-page-client.tsx` with Hero, About Me, Stats, Skills, Work Experience, and Featured Projects carousel), Blog (`/blog`, `/blog/[slug]`, `/blog/admin` gated by Statsig feature flags), and API Health Status (`/status`).
- **Performance target:** Must load and animate smoothly on low-end/slow computers and mobile devices without heavy GPU/WebGL overhead.

## Capabilities and Constraints

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, hosted at `https://joaoaleixo.dev`.
- **SEO & Metadata:** Server-rendered metadata, Open Graph tags, `sitemap.ts`, `robots.ts`, and JSON-LD structured data (`lib/components/structured-data/structured-data.tsx`).
- **Feature gating:** Blog access is controlled via Statsig (`@statsig/react-bindings`, `BlogFeatureGate`).
- **Separate backend:** `backend/` is a separate package in the repo; root `next build` TypeScript checking currently encounters missing `zod` types if `backend/` dependencies are not installed.

## Brand Commitments

- **Identity:** João Vitor Aleixo (`João Aleixo`) — Front End / Full Stack Software Engineer based in Brazil.
- **Voice:** Direct, technical, impact-oriented, bilingual (`pt-BR` primary, `en-US` parity).
- **Verified assets:** Local company icons (`public/icons/mercado-livre.png`, `public/icons/v4-company.png`), country flags (`public/icons/BRA.svg`, `public/icons/USA.svg`), profile photo (`public/images/its-me.jpeg`), and favicon suite (`public/favicon/`).

## Evidence on Hand

- **Work Experience (`lib/constants/jobsExperiences.tsx` & `lib/i18n/translations.ts`):**
  - Mercado Livre · Mercado Pago (May 2026 – Current) — Front End Software Engineer (fintech)
  - V4 Company (Mar 2025 – Apr 2026) — Mid-level Frontend Developer
  - Venturus (Feb 2021 – Mar 2025) — Entry-level Frontend Developer
- **Featured Projects (`lib/constants/projects.ts` & `projects.md`):**
  - Site de Agroecologia (IFSP Campus Campinas · Iniciação Científica)
  - Votacidade (Minha Campinas · Iniciação Científica, 15k+ users)
  - Mapa Acessível (Ensino técnico · TCC)
- **Contact & Social:** `https://github.com/jooaodias`, `https://www.linkedin.com/in/joao-aleixo-dias/`, `joaovitordias92040@gmail.com`.

## Product Principles

1. **Clarity over spectacle:** Present career impact, stack, and projects immediately without blocking content behind heavy animations.
2. **Performance across devices:** Keep backgrounds, transitions, and assets lightweight so slow laptops and mobile devices stay responsive.
3. **Truthful, bilingual parity:** Keep `pt-BR` and `en-US` copy, experience dates, metrics, and structured data synchronized.
4. **Evidence-backed positioning:** Ground claims in real companies, shipped metrics, and verifiable repositories.

## Accessibility & Inclusion

- Respect `prefers-reduced-motion: reduce` across background canvas and reveal animations.
- Maintain legible contrast on dark surfaces and keyboard/screen-reader accessibility across navigation, carousel, and blog flows.
