import { ErrorStreamResponse } from "@/config/errors"
import { ICreateMessageDTO, IMessageStreamDTO } from "../DTO"
import { MessageService } from "../service"
import { response } from "@/utils/server"

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
    const result = await this.service.messageStream(data)

    if (result instanceof Error)
      return ErrorStreamResponse({
        error: result,
        transform: data.transform!,
        writter: data.writter,
      })

    return response(data.transform!)
  }
}
