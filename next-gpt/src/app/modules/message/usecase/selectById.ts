import { PrismaMessageRepository } from "@repository/prisma/message"

export class SelectMessageByIdUseCase {
  constructor(private prisma: PrismaMessageRepository) {}
}
