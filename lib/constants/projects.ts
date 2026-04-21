import type { PortfolioProject } from '@/lib/types/projects'

export function getProjects(t: (key: string) => string): PortfolioProject[] {
  return [
    {
      id: 'agroecologia',
      emoji: '🌱',
      title: t('projects.items.agroecologia.title'),
      subtitle: t('projects.items.agroecologia.subtitle'),
      description: [t('projects.items.agroecologia.description.0')],
      githubSlug: 'ifsp-cmp/sitedeagroecologia-new',
    },
    {
      id: 'votacidade',
      emoji: '🗳️',
      title: t('projects.items.votacidade.title'),
      subtitle: t('projects.items.votacidade.subtitle'),
      description: [t('projects.items.votacidade.description.0')],
      githubSlug: 'Minhacps/votacidade-site',
      metric: t('projects.items.votacidade.metric'),
    },
    {
      id: 'mapaAcessivel',
      emoji: '♿',
      title: t('projects.items.mapaAcessivel.title'),
      subtitle: t('projects.items.mapaAcessivel.subtitle'),
      description: [t('projects.items.mapaAcessivel.description.0')],
      githubSlug: 'jooaodias/map.acessivel-new',
    },
  ]
}
