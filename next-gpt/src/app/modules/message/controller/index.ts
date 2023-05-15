import { ICreateMessageDTO } from "../DTO"
import { MessageService } from "../service"

export class MessageController {
  constructor(private service: MessageService) {}

  async create(data: ICreateMessageDTO) {
    return await this.service.createMessage(data)
  }

  async selectById(id: string) {
    return await this.service.selectMessageById(id)
  }

  async selectByIdWithMessage(id: string) {
    return await this.service.selectMessageByIdWithChat(id)
  }
}
