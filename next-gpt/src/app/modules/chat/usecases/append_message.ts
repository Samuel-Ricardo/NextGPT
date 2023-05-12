import { Message } from "@prisma/client"
import { IAddMessageDTO } from "../DTO"
import { IChatRepository } from "../repository"

export class AppendMessageUseCase {
  constructor(private repository: IChatRepository) {}

  async execute(chat: IAddMessageDTO): Promise<Message> {
    const result = await this.repository.addMessageTo(chat)

    console.log({ APPEND_RESULT: result })

    return {
      ...result,
      id: result.id!,
    }
  }
}
