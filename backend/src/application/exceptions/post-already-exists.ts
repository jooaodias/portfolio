export class PostAlreadyExistsError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PostAlreadyExistsError'
  }
}