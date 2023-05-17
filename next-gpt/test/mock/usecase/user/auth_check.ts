import AuthCheckUseCase from "@modules/user/usecase/auth_check"

jest.mock("../../../../src/app/modules/user/usecase/auth_check")

export const authCheckMock = AuthCheckUseCase as jest.Mock<AuthCheckUseCase>

export const mockAuthCheckUseCase = () =>
  new authCheckMock() as jest.Mocked<AuthCheckUseCase>
