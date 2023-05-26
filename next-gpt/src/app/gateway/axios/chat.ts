import { IChatGateway } from "@modules/chat/gateway"
import { HTTPGateway } from ".."
import { CHAT, CHAT_MESSAGES } from "@config/routes"
import { IAppendMessagesBody } from "@/@types/api/chat"

export class AxiosChatGateway extends HTTPGateway implements IChatGateway {
  async create(message: string) {
    return await this.post(CHAT, { message })
  }

  async getAll() {
    return await this.get(CHAT)
  }

  async getMessages(id: string) {
    return await this.get(CHAT_MESSAGES(id))
  }

  async appendMessage(id: string, { message }: IAppendMessagesBody) {
    return await this.post(CHAT_MESSAGES(id), { message })
  }
}
