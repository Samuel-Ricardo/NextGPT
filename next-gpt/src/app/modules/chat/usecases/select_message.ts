import { Message } from "@prisma/client"
import { IGetMessagesDTO } from "../DTO"
import { IChatRepository } from "../repository"

class SelectMessageFromChatUseCase {
  constructor(private repository: IChatRepository) {}

  async execute(data: IGetMessagesDTO): Promise<Message[]> {
    const result = await this.repository.selectMessages(data)
    return result as Message[]
  }
}

export { SelectMessageFromChatUseCase as SelectMessageUseCase }
