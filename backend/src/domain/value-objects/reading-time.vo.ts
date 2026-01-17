export class ReadingTime {
    private constructor(public readonly minutes: number) {}
  
    static calculate(content: string): ReadingTime {
      const wordsPerMinute = 200
      const words = content.trim().split(/\s+/).length
      return new ReadingTime(Math.ceil(words / wordsPerMinute))
    }
  
    static restore(minutes: number): ReadingTime {
      return new ReadingTime(minutes)
    }
  }