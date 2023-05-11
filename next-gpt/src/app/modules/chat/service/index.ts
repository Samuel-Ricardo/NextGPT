import { ICreateChatDTO, IGetMessagesDTO } from "../DTO"
import { AppendMessageUseCase } from "../usecases/append_message"
import { CreateChatUseCase } from "../usecases/create"
import { selectAllChatUseCase } from "../usecases/select_all"
import { SelectMessageUseCase } from "../usecases/select_message"

export class ChatService {
  constructor(
    private create: CreateChatUseCase,
    private selectAll: selectAllChatUseCase,
    private select: SelectMessageUseCase,
    private addMessage: AppendMessageUseCase
  ) {}

  async createChat(data: ICreateChatDTO) {
    return await this.create.execute(data)
  }

  async selectAllChats() {
    return await this.selectAll.execute()
  }

  async selectMessage(data: IGetMessagesDTO) {
    return await this.select.execute(data)
  }
}
