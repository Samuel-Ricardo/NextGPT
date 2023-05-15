import { ICreateMessageDTO, IMessageStreamDTO } from "../DTO"
import { MessageService } from "../service"

export class MessageController {
  constructor(private service: MessageService) {}

  async create(data: ICreateMessageDTO) {
    return await this.service.createMessage(data)
  }

  async selectById(id: string) {
    return await this.service.selectMessageById(id)
  }

  async selectByIdWithChat(id: string) {
    return await this.service.selectMessageByIdWithChat(id)
  }

  async stream(data: IMessageStreamDTO) {
    return await this.service.messageStream(data)
  }
}
