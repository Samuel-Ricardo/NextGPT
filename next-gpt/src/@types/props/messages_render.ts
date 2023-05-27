import { Message } from "@modules/message/entity"
import { IProps } from "."

export interface IMessagesRenderProps extends IProps {
  messages: Message[]
  loadingMessage: any
  errorLoadingMessage: any
}
