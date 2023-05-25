import { IChatGateway } from "@modules/chat/gateway"
import { HTTPGateway } from ".."
import { CHAT } from "@config/routes"

export class AxiosChatGateway extends HTTPGateway implements IChatGateway {
  async create(message: string) {
    return await this.post(CHAT, { message })
  }

  async getAll() {
    return await this.get(CHAT)
  }
}
