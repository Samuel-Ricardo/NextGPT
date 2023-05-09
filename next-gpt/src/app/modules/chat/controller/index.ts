import { ICreateChatDTO } from "../DTO"
import { ChatService } from "../service"

export class ChatController {
  constructor(private service: ChatService) {}

  async create(data: ICreateChatDTO) {
    return await this.service.createChat(data)
  }
}
