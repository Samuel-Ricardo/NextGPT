import { IChatGateway } from "@modules/chat/gateway"
import { HTTPGateway } from ".."
import { CHAT, CHAT_MESSAGES } from "@config/routes"
import { IAppendMessagesBody } from "@/@types/api/chat"
import { Chat } from "@modules/chat/entity"
import { Message } from "@modules/message/entity"
import { AxiosResponse } from "axios"

export class AxiosChatGateway extends HTTPGateway implements IChatGateway {
  async create(message: string) {
    return (await this.post(CHAT, { message })) as AxiosResponse<{ chat: Chat }>
  }

  async getAll() {
    return (await this.get(CHAT)) as AxiosResponse<{ chat: Chat[] }>
  }

  async getMessages(id: string) {
    return (await this.get(CHAT_MESSAGES(id))) as AxiosResponse<{
      messages: Message[]
    }>
  }

  async appendMessage(id: string, { message }: IAppendMessagesBody) {
    return (await this.post(CHAT_MESSAGES(id), { message })) as AxiosResponse<{
      message: Message
    }>
  }
}
