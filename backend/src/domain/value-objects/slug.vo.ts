export class Slug {
    private constructor(public readonly value: string) {}
  
    static createFromText(text: string): Slug {
      const slugValue = text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
  
      return new Slug(slugValue)
    }
  
    static restore(value: string): Slug {
      return new Slug(value)
    }
  }