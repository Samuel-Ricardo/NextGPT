import { IMessageData } from "@Types/messages"
import { ICreateChatDTO } from "@/app/modules/chat/DTO"
import { Chat } from "@modules/chat/entity"
import { IChat } from "@modules/chat/model"
import { IMessage } from "@modules/message/model"

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

export const VALID_IMESSAGE_WITHOUT_CHAT = {
  id: VALID_MESSAGE_DATA.id!,
  chat_id: VALID_MESSAGE_DATA.chat_id!,
  content: VALID_MESSAGE_DATA.content!,
  has_answered: VALID_MESSAGE_DATA.has_aswered!,
  is_from_bot: VALID_MESSAGE_DATA.is_from_bot!,
  created_at: VALID_MESSAGE_DATA.created_at!,
}

export const VALID_IMESSAGE: IMessage = {
  id: VALID_MESSAGE_DATA.id!,
  chat_id: VALID_MESSAGE_DATA.chat_id!,
  content: VALID_MESSAGE_DATA.content!,
  has_answered: VALID_MESSAGE_DATA.has_aswered!,
  is_from_bot: VALID_MESSAGE_DATA.is_from_bot!,
  created_at: VALID_MESSAGE_DATA.created_at!,
  chat: Chat.from(VALID_CHAT_DATA),
}

export const VALID_CHAT = Chat.from(VALID_CHAT_DATA)

export const CREATE_CHAT_DTO: ICreateChatDTO = {
  message: "Hello World! :D",
}
