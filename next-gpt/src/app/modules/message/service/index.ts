import { Chat } from "@modules/chat/entity"
import { ICreateMessageDTO } from "../DTO"
import { Message } from "../entity"
import {
  SelectMessageByIdUseCase,
  SelectMessageByIdWithChatUseCase,
} from "../usecase"
import { CreateMessageUseCase } from "../usecase/create"

export class MessageService {
  constructor(
    private readonly create: CreateMessageUseCase,
    private readonly selectById: SelectMessageByIdUseCase,
    private readonly selectByIdWithChat: SelectMessageByIdWithChatUseCase
  ) {}

  async createMessage(data: ICreateMessageDTO): Promise<Message> {
    return await this.create.execute(data)
  }

  async selectMessageById(id: string): Promise<Message> {
    return await this.selectById.execute(id)
  }

  async selectMessageByIdWithChat(id: string): Promise<Chat> {
    return await this.selectByIdWithChat.execute(id)
  }
}
