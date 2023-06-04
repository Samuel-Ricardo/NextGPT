import { IMessageData } from "@Types/messages"
import { ICreateChatDTO } from "@modules/chat/DTO"
import { Chat } from "@modules/chat/entity"
import { IChat } from "@modules/chat/model"
import { IMessage } from "@modules/message/model"
import { ENV } from "."

export const headers = {
  "Content-Type": "application/json",
  Cookie: ENV.API.AUTH_TOKEN(),
}

export const ELEMETNS = {
  ID: {
    GO_TO_CHAT_BUTTON: "go_to_chat_button",
    HELLO_BUTTON: "hello_button",
    MESSAGE: "message",
    TEXT_AREA: "text-area",
    FORM: "form",
    SUBMIT: "submit",
    CHATTING: "chatting",
  },
}

export const LOGO = {
  FULL_CYCLE: "/fullcycle_logo.png",
}

export const REDIRECT_URL = (redirect: string) =>
  `${ENV.DOCKER.KEYCLOAK.ISSUER()}/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
    redirect
  )}&client_id=${ENV.KEYCLOAK.CLIENT.ID()}`

const user_id = "123"

export const GENERATE_TOKEN_DATA = {
  user: { sub: "123", name: "Samuel" },
  secret: ENV.NEXT_AUTH.SECRET(),
}

export const VALID_MESSAGE_DATA: IMessageData = {
  id: "1",
  chat_id: "1",
  content: "Hello World! :D",
  has_answered: false,
  is_from_bot: false,
  created_at: new Date(),
}

export const VALID_CHAT_DATA: IChat = {
  id: "1",
  user_id,
  messages: [],
  created_at: new Date(),
  remote_chat_id: "1",
}

export const VALID_IMESSAGE_WITHOUT_CHAT = {
  id: VALID_MESSAGE_DATA.id!,
  chat_id: VALID_MESSAGE_DATA.chat_id!,
  content: VALID_MESSAGE_DATA.content!,
  has_answered: VALID_MESSAGE_DATA.has_answered!,
  is_from_bot: VALID_MESSAGE_DATA.is_from_bot!,
  created_at: VALID_MESSAGE_DATA.created_at!,
}

export const VALID_IMESSAGE: IMessage = {
  id: VALID_MESSAGE_DATA.id!,
  chat_id: VALID_MESSAGE_DATA.chat_id!,
  content: VALID_MESSAGE_DATA.content!,
  has_answered: VALID_MESSAGE_DATA.has_answered!,
  is_from_bot: VALID_MESSAGE_DATA.is_from_bot!,
  created_at: VALID_MESSAGE_DATA.created_at!,
  chat: Chat.from(VALID_CHAT_DATA),
}

export const VALID_CHAT = Chat.from(VALID_CHAT_DATA)

export const CREATE_CHAT_DTO: ICreateChatDTO = {
  user_id,
  message: "Hello World! :D",
}
