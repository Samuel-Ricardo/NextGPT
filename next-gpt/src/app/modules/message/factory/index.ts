import { PrismaMessageRepository } from "@repository/prisma/message"
import { MessageController } from "../controller"
import { MessageService } from "../service"
import {
  SelectMessageByIdUseCase,
  SelectMessageByIdWithChatUseCase,
} from "../usecase"
import { CreateMessageUseCase } from "../usecase/create"
import { prisma } from "@prisma"

export function messageFactory() {
  const repository = new PrismaMessageRepository(prisma)

  const create = new CreateMessageUseCase(repository)
  const selectById = new SelectMessageByIdUseCase(repository)
  const selectByIdWithChat = new SelectMessageByIdWithChatUseCase(repository)

  const service = new MessageService(create, selectById, selectByIdWithChat)
  const controller = new MessageController(service)

  return controller
}
