import { CreateMessageUseCase } from "@/app/modules/message/usecase/create"

jest.mock("../../../../src/app/modules/message/usecase/create")

const createMessageMock =
  CreateMessageUseCase as jest.Mock<CreateMessageUseCase>

const mockCreateMessageUseCase = () =>
  new createMessageMock() as jest.Mocked<CreateMessageUseCase>

export { createMessageMock, mockCreateMessageUseCase }
