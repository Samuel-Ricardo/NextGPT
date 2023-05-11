import { ChatPrismaRepository } from "@repository/prisma/chat"
import { ChatController } from "./controller"
import { ChatService } from "./service"
import { CreateChatUseCase } from "./usecases/create"
import { prisma } from "@prisma"
import { selectAllChatUseCase } from "./usecases/select_all"

export async function chatFactory() {
  const repository = new ChatPrismaRepository(prisma)

  const create = new CreateChatUseCase(repository)
  const selectAll = new selectAllChatUseCase(repository)

  const service = new ChatService(create, selectAll)
  const controller = new ChatController(service)

  return controller
}
