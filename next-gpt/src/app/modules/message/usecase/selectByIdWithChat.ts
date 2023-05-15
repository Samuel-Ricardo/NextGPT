import { PrismaMessageRepository } from "@repository/prisma/message"

class SelectMessageByIdWithChatUseCase {
  constructor(private readonly repository: PrismaMessageRepository) {}

  async execute(id: string) {
    return this.repository.selectByIdWithChat(id)
  }
}

export { SelectMessageByIdWithChatUseCase }
