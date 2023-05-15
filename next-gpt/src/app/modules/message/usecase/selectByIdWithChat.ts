import { PrismaMessageRepository } from "@repository/prisma/message"

class SelectMessageByIdWithChatUseCase {
  constructor(private prisma: PrismaMessageRepository) {}

  async execute(id: string) {
    return this.prisma.selectByIdWithChat(id)
  }
}

export { SelectMessageByIdWithChatUseCase }
