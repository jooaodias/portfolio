export interface ListPostsDTO {
  page: number
  limit: number
  published?: boolean
  featured?: boolean
  tag?: string
}

export interface ListPostsResponseDTO<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
