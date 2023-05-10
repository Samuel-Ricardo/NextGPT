import { IMessageData } from "@Types/messages"
import { ICreateChatDTO } from "@/app/modules/chat/DTO"
import { Chat } from "@/app/modules/chat/entity"
import { IChat } from "@modules/chat/model"

export const VALID_MESSAGE_DATA: IMessageData = {
  id: "1",
  chat_id: "1",
  content: "Hello World! :D",
  has_aswered: false,
  is_from_bot: false,
  created_at: new Date(),
}

export const VALID_CHAT_DATA: IChat = {
  id: "1",
  messages: [],
  created_at: new Date(),
  remote_chat_id: "1",
}

export const VALID_CHAT = Chat.from(VALID_CHAT_DATA)

export const CREATE_CHAT_DTO: ICreateChatDTO = {
  message: "Hello World! :D",
}
