import { PrismaMessageRepository } from "@repository/prisma/message"

export class SelectMessageByIdUseCase {
  constructor(private prisma: PrismaMessageRepository) {}

  async execute(id: string) {
    return this.prisma.selectById(id)
  }
}
