import { Chat } from "@modules/chat/entity"
import { IProps } from "."

export interface IChatSidebarProps extends IProps {
  onNewChatButtonClick: () => void
  onLogoutButtonClick: () => void
  onListItemClick: (chat: Chat) => void

  chats: Chat[]
}
