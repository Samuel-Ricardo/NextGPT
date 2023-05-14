import { message } from "@modules/message/converter"
import { ICreateMessageDTO, IUpdateMessageDTO } from "@modules/message/DTO"
import { Message } from "@modules/message/entity"
import { IMessageRepository } from "@modules/message/repository"
import { PrismaClient } from "@prisma/client"

class PrismaMessageRepository implements IMessageRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: ICreateMessageDTO): Promise<Message> {
    const result = await this.prisma.message.create({ data })
    return message(result)
  }

  async update(data: IUpdateMessageDTO): Promise<Message> {
    const result = await this.prisma.message.update({
      where: { id: data.id },
      data: {
        id: data.id,
        chat_id: data.chat_id,
        has_answered: data.has_answered,
        content: data.content,
        is_from_bot: data.is_from_bot,
        created_at: data.created_at,
      },
    })

    return message(result)
  }
}

export { PrismaMessageRepository }
