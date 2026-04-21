export interface PortfolioProject {
  id: string
  emoji: string
  title: string
  subtitle: string
  description: string[]
  /** `owner/repo` for https://github.com/... */
  githubSlug: string
  metric?: string
}
