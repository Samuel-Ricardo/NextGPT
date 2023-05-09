import { ICreateChatDTO } from "../DTO"
import { CreateChatUseCase } from "../usecases/create"

export class ChatService {
  constructor(private create: CreateChatUseCase) {}

  async createChat(data: ICreateChatDTO) {
    return await this.create.execute(data)
  }
}
