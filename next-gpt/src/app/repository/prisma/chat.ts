import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
  ISelectAllChatsDTO,
} from "@modules/chat/DTO"
import { IChatRepository } from "@modules/chat/repository"
import { message, messages } from "@modules/message/converter"
import { PrismaClient } from "@prisma/client"
import { Chat } from "@modules/chat/entity"
import { Message } from "@modules/message/entity"

export class ChatPrismaRepository implements IChatRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: ICreateChatDTO): Promise<Chat> {
    const result = await this.prisma.chat.create({
      data: {
        user_id: data.user_id,
        messages: {
          create: {
            content: data.message,
          },
        },
      },
      select: {
        id: true,
        messages: true,
        user_id: true,
        created_at: true,
      },
    })

    return Chat.from({
      id: result.id,
      user_id: result.user_id,
      created_at: result.created_at,
      messages: messages(result.messages),
    })
  }

  async selectAll(data: ISelectAllChatsDTO): Promise<Chat[]> {
    const results = await this.prisma.chat.findMany({
      where: {
        user_id: data.user_id,
      },
      select: {
        id: true,
        messages: {
          orderBy: { created_at: "asc" },
          take: 1,
        },
        user_id: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return results.map((result) =>
      Chat.from({
        id: result.id,
        user_id: result.user_id,
        messages: messages(result.messages),
        created_at: result.created_at,
      })
    )
  }

  async selectMessage(data: IGetMessagesDTO): Promise<Message[]> {
    const results = await this.prisma.message.findMany({
      where: {
        chat_id: data.chat_id,
      },
      orderBy: { created_at: "asc" },
    })

    return messages(results)
  }

  async addMessageTo(data: IAddMessageDTO): Promise<Message> {
    const chat = await this.prisma.chat.findUniqueOrThrow({
      where: { id: data.chat_id },
    })

    const message_created = await this.prisma.message.create({
      data: {
        chat_id: chat.id,
        content: data.message,
      },
    })

    return message(message_created)
  }
}
