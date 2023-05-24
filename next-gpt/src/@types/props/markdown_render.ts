import { marked } from "marked"

export interface IMarkdownRenderProps {
  content: string
  config?: marked.MarkedOptions
}
