import {
  SelectMessageByIdUseCase,
  SelectMessageByIdWithChatUseCase,
} from "../usecase"
import { CreateMessageUseCase } from "../usecase/create"

export class MessageService {
  constructor(
    private readonly create: CreateMessageUseCase,
    private readonly selectById: SelectMessageByIdUseCase,
    private readonly selectByIdWithChat: SelectMessageByIdWithChatUseCase
  ) {}
}
