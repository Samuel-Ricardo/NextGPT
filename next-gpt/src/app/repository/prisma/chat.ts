import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
} from "@modules/chat/DTO"
import { IChatRepository } from "@modules/chat/repository"
import { messages } from "@modules/message/converter"
import { PrismaClient } from "@prisma/client"
import { Chat } from "@modules/chat/entity"
import { Message } from "@modules/message/entity"

export class ChatPrismaRepository implements IChatRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: ICreateChatDTO): Promise<Chat> {
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

    return Chat.from({
      id: result.id,
      created_at: result.created_at,
      messages: messages(result.messages),
    })
  }

  async selectAll(): Promise<Chat[]> {
    const results = await this.prisma.chat.findMany({
      select: {
        id: true,
        messages: {
          orderBy: { created_at: "asc" },
          take: 1,
        },
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return results.map((result) =>
      Chat.from({
        id: result.id,
        messages: messages(result.messages),
        created_at: result.created_at,
      })
    )
  }
  async getMessages(data: IGetMessagesDTO): Promise<Message[]> {
    const results = this.prisma.message.findMany({
      where: {
        chat_id: data.chat_id,
      },
      orderBy: { created_at: "asc" },
    })

    return results
  }

  async addMessageTo(data: IAddMessageDTO): Promise<Message> {
    throw new Error("Method not implemented.")
  }
}
