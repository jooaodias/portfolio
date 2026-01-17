export interface UpdatePostDTO {
  title?: string
  titleEn?: string
  excerpt?: string
  excerptEn?: string
  content?: string
  contentEn?: string
  coverImage?: string
  tags?: string[]
  published?: boolean
  featured?: boolean
  authorName?: string
}
