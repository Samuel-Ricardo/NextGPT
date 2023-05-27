import { IMarkdownRenderProps } from "@Types"
import { Markdown } from "@lib/markdown"

export const MarkDownRender = (props: IMarkdownRenderProps) => {
  const markdown = new Markdown(props.config)

  return (
    <div
      className="relative w-[calc(100%-115px)] flex flex-col gap-1 transition duration-100 ease-linear break-words"
      dangerouslySetInnerHTML={{ __html: markdown.format(props.content) }}
    />
  )
}
