import { PrismaMessageRepository } from "@repository/prisma/message"
import { MessageController } from "../controller"
import { MessageService } from "../service"
import {
  IsInValidMessageUseCase,
  SelectMessageByIdUseCase,
  SelectMessageByIdWithChatUseCase,
  CreateMessageUseCase,
  SetupMessageStreamUseCase,
} from "../usecase"
import { prisma } from "@prisma"

export function messageFactory() {
  const repository = new PrismaMessageRepository(prisma)

  const create = new CreateMessageUseCase(repository)
  const selectById = new SelectMessageByIdUseCase(repository)
  const selectByIdWithChat = new SelectMessageByIdWithChatUseCase(repository)
  const isInValid = new IsInValidMessageUseCase()
  const setupStream = new SetupMessageStreamUseCase()

  const service = new MessageService(
    create,
    selectById,
    selectByIdWithChat,
    isInValid,
    setupStream
  )
  const controller = new MessageController(service)

  return controller
}
