import { ChatPrismaRepository } from "@repository/prisma/chat"
import { ISelectAllChatsDTO } from "../DTO"

export class selectAllChatUseCase {
  constructor(private chatRepository: ChatPrismaRepository) {}

  async execute(data: ISelectAllChatsDTO) {
    return await this.chatRepository.selectAll()
  }
}
