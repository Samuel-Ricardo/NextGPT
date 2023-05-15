import { SelectMessageByIdWithChatUseCase } from "@modules/message/usecase"

jest.mock("../../../../src/app/modules/message/usecase/selectByIdWithChat")

const selectByIdWithChatMock =
  SelectMessageByIdWithChatUseCase as jest.Mock<SelectMessageByIdWithChatUseCase>

const mockSelectByIdWithChatUseCase = () =>
  new selectByIdWithChatMock() as jest.Mocked<SelectMessageByIdWithChatUseCase>

export { selectByIdWithChatMock, mockSelectByIdWithChatUseCase }
