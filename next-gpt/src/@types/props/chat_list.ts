import { Chat } from "@modules/chat/entity"
import { IProps } from "."

export interface IChatListProps extends IProps {
  chats: Chat[]
  onItemClick?: (chat: Chat) => void
}
