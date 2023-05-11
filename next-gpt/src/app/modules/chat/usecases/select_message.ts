import { Message } from "@prisma/client"
import { IGetMessagesDTO } from "../DTO"
import { IChatRepository } from "../repository"

class SelectMessageUseCase {
  constructor(private repository: IChatRepository) {}

  async execute(data: IGetMessagesDTO): Promise<Message[]> {
    const result = await this.repository.selectMessage(data)
    return result as Message[]
  }
}

export { SelectMessageUseCase }
