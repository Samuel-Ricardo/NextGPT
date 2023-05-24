import { marked } from "marked"
import hljs from "highlight.js"

export class Markdown {
  private readonly formater

  constructor(config?: marked.MarkedOptions) {
    marked.setOptions({ highlight: this.highlightPatterns, ...config })

    this.formater = marked
  }

  format(content: string) {
    return this.formater(content, { breaks: true })
  }

  private highlightPatterns(code: string, lang: string) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext"
    return hljs.highlight(code, { language }).value
  }
}
