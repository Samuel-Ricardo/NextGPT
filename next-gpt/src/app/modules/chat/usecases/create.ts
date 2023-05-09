import { ICreateChatDTO } from "../DTO"
import { Chat } from "../entity"
import { IChatRepository } from "../repository"

export class CreateChatUseCase {
  constructor(private repository: IChatRepository) {}

  async execute(data: ICreateChatDTO): Promise<Chat> {
    const chat = await this.repository.create(data)

    if (!chat) {
      throw new Error("Chat not created")
    }

    return chat
  }
}
