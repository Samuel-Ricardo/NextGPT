import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
} from "@modules/chat/DTO"
import { IChat } from "@modules/chat/model"
import { IChatRepository } from "@modules/chat/repository"
import { messages } from "@modules/message/converter"
import { IMessage } from "@modules/message/model"
import { PrismaClient } from "@prisma/client"

export class ChatPrismaRepository implements IChatRepository {
  private prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async create(data: ICreateChatDTO): Promise<IChat> {
    const result = await this.prisma.chat.create({
      data: {
        messages: {
          create: {
            content: data.message,
          },
        },
      },
      select: {
        id: true,
        messages: true,
        created_at: true,
      },
    })

    return {
      id: result.id,
      created_at: result.created_at,
      messages: messages(result.messages),
    }
  }
  async selectAll(): Promise<IChat[]> {
    throw new Error("Method not implemented.")
  }
  async getMessages(data: IGetMessagesDTO): Promise<IMessage[]> {
    throw new Error("Method not implemented.")
  }
  async addMessageTo(data: IAddMessageDTO): Promise<IMessage> {
    throw new Error("Method not implemented.")
  }
}
