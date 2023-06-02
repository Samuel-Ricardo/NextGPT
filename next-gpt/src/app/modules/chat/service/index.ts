import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
  ISelectAllChatsDTO,
  ISelectChatDTO,
} from "../DTO"
import { SelectChatByIdUseCase } from "../usecases"
import { AppendMessageUseCase } from "../usecases/append_message"
import { CreateChatUseCase } from "../usecases/create"
import { selectAllChatUseCase } from "../usecases/select_all"
import { SelectMessageUseCase } from "../usecases/select_message"

export class ChatService {
  constructor(
    private readonly create: CreateChatUseCase,
    private readonly selectAll: selectAllChatUseCase,
    private readonly selectMessagesFromChat: SelectMessageUseCase,
    private readonly addMessage: AppendMessageUseCase,
    private readonly select: SelectChatByIdUseCase
  ) {}

  async createChat(data: ICreateChatDTO) {
    return await this.create.execute(data)
  }

  async selectAllChats(data: ISelectAllChatsDTO) {
    return await this.selectAll.execute(data)
  }

  async selectMessages(data: IGetMessagesDTO) {
    return await this.selectMessagesFromChat.execute(data)
  }

  async appendMessage(data: IAddMessageDTO) {
    return await this.addMessage.execute(data)
  }

  async selectChat(data: ISelectChatDTO) {
    return await this.select.execute(data)
  }
}
