import { PrismaMessageRepository } from "@repository/prisma/message"

export class CreateMessageUseCase {
  constructor(private readonly prisma: PrismaMessageRepository) {}
}
