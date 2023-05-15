import { PrismaMessageRepository } from "@repository/prisma/message"
import { Message } from "../entity"
import { message } from "../converter"
import { ICreateMessageDTO } from "../DTO"

export class CreateMessageUseCase {
  constructor(private readonly repository: PrismaMessageRepository) {}

  async execute(data: ICreateMessageDTO): Promise<Message> {
    const result = await this.repository.create(data)
    return message(result)
  }
}
