import { SelectMessageByIdUseCase } from "@modules/message/usecase"

jest.mock("../../../../src/app/modules/message/usecase/selectById")

const selectByIdMock =
  SelectMessageByIdUseCase as jest.Mock<SelectMessageByIdUseCase>

const mockSelectMessageById = () =>
  new selectByIdMock() as jest.Mocked<SelectMessageByIdUseCase>

export { selectByIdMock, mockSelectMessageById }
