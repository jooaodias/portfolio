import { ReadingTime } from '../value-objects/reading-time.vo'
import { Slug } from '../value-objects/slug.vo'

export interface PostProps {
  id?: string
  slug: Slug
  title: string
  titleEn?: string
  excerpt: string
  excerptEn?: string
  content: string
  contentEn?: string
  coverImage?: string
  tags: string[]
  published: boolean
  featured: boolean
  authorName: string
  readingTime: ReadingTime
  createdAt?: Date
  updatedAt?: Date
}

export class Post {
  private constructor(private props: PostProps) {}

  get id() { return this.props.id }
  get slug() { return this.props.slug }
  get title() { return this.props.title }
  get titleEn() { return this.props.titleEn }
  get excerpt() { return this.props.excerpt }
  get excerptEn() { return this.props.excerptEn }
  get content() { return this.props.content }
  get contentEn() { return this.props.contentEn }
  get coverImage() { return this.props.coverImage }
  get tags() { return this.props.tags }
  get published() { return this.props.published }
  get featured() { return this.props.featured }
  get authorName() { return this.props.authorName }
  get readingTime() { return this.props.readingTime }
  get createdAt() { return this.props.createdAt }
  get updatedAt() { return this.props.updatedAt }

  static create(props: Omit<PostProps, 'slug' | 'readingTime'>): Post {
    const slug = Slug.createFromText(props.title)
    const readingTime = ReadingTime.calculate(props.content)

    return new Post({
      ...props,
      slug,
      readingTime,
      published: props.published ?? false,
      featured: props.featured ?? false,
    })
  }

  static restore(props: PostProps): Post {
    return new Post(props)
  }

  togglePublish(): void {
    this.props.published = !this.props.published
  }

  update(props: Partial<Omit<PostProps, 'id' | 'slug' | 'readingTime' | 'createdAt' | 'updatedAt'>>): void {
    if (props.title !== undefined) {
      this.props.title = props.title
      this.props.slug = Slug.createFromText(props.title)
    }
    if (props.titleEn !== undefined) this.props.titleEn = props.titleEn
    if (props.excerpt !== undefined) this.props.excerpt = props.excerpt
    if (props.excerptEn !== undefined) this.props.excerptEn = props.excerptEn
    if (props.content !== undefined) {
      this.props.content = props.content
      this.props.readingTime = ReadingTime.calculate(props.content)
    }
    if (props.contentEn !== undefined) this.props.contentEn = props.contentEn
    if (props.coverImage !== undefined) this.props.coverImage = props.coverImage
    if (props.tags !== undefined) this.props.tags = props.tags
    if (props.published !== undefined) this.props.published = props.published
    if (props.featured !== undefined) this.props.featured = props.featured
    if (props.authorName !== undefined) this.props.authorName = props.authorName
  }

  toJSON() {
    return {
      id: this.id,
      slug: this.slug.value,
      title: this.title,
      titleEn: this.titleEn,
      excerpt: this.excerpt,
      excerptEn: this.excerptEn,
      content: this.content,
      contentEn: this.contentEn,
      coverImage: this.coverImage,
      tags: this.tags,
      published: this.published,
      featured: this.featured,
      authorName: this.authorName,
      readingTime: this.readingTime.minutes,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
