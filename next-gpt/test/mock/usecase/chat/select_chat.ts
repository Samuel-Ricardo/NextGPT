import { SelectChatByIdUseCase } from "@modules/chat/usecases"
import { IChatRepository } from "@modules/chat/repository"
import { getChatUsecasePath } from "."

jest.mock("../../../../src/app/modules/chat/usecases/select_chat")

export const selectChatByIdUsecaseMock =
  SelectChatByIdUseCase as jest.Mock<SelectChatByIdUseCase>

export const mockUsecaseSelectChatById = (repository?: IChatRepository) =>
  new selectChatByIdUsecaseMock(
    repository
  ) as jest.Mocked<SelectChatByIdUseCase>
