import { ChatPrismaRepository } from "@repository/prisma/chat"

export class selectAllChatUseCase {
  constructor(private chatRepository: ChatPrismaRepository) {}

  async execute() {
    return await this.chatRepository.selectAll()
  }
}
