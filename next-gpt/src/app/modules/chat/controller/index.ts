import { ICreateChatDTO, IGetMessagesDTO } from "../DTO"
import { ChatService } from "../service"

export class ChatController {
  constructor(private service: ChatService) {}

  async create(data: ICreateChatDTO) {
    return await this.service.createChat(data)
  }

  async selectAll() {
    return await this.service.selectAllChats()
  }

  async select(data: IGetMessagesDTO) {
    return await this.service.selectMessage(data)
  }
}
