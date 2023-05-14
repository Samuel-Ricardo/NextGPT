import { message } from "@modules/message/converter"
import { ICreateMessageDTO } from "@modules/message/DTO"
import { Message } from "@modules/message/entity"
import { IMessageRepository } from "@modules/message/repository"
import { PrismaClient } from "@prisma/client"

class PrismaMessageRepository implements IMessageRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: ICreateMessageDTO): Promise<Message> {
    const result = await this.prisma.message.create({ data })
    return message(result)
  }
}

export { PrismaMessageRepository }
