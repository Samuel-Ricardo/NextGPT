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
import { Chat } from "@modules/chat/entity"

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
