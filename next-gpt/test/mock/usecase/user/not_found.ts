import { UserNotFoundUseCase } from "@modules/user/usecase"

jest.mock("../../../../src/app/modules/user/usecase/not_found")

export const userMotFoundMock =
  UserNotFoundUseCase as jest.Mock<UserNotFoundUseCase>

export const mockUserNotFoundUseCase = () =>
  new userMotFoundMock() as jest.Mocked<UserNotFoundUseCase>
