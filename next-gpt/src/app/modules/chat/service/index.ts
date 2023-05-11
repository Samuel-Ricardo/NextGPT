import { ICreateChatDTO } from "../DTO"
import { CreateChatUseCase } from "../usecases/create"
import { selectAllChatUseCase } from "../usecases/select_all"

export class ChatService {
  constructor(
    private create: CreateChatUseCase,
    private selectAll: selectAllChatUseCase
  ) {}

  async createChat(data: ICreateChatDTO) {
    return await this.create.execute(data)
  }

  async selectAllChats() {
    return await this.selectAll.execute()
  }
}
