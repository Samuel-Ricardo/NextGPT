import { ChatPrismaRepository } from "@/app/repository/prisma/chat"
import { ChatController } from "./controller"
import { ChatService } from "./service"
import { CreateChatUseCase } from "./usecases/create"
import { prisma } from "@prisma"

export async function chatFactory() {
  const repository = new ChatPrismaRepository(prisma)
  const create = new CreateChatUseCase(repository)
  const service = new ChatService(create)
  const controller = new ChatController(service)

  return controller
}
