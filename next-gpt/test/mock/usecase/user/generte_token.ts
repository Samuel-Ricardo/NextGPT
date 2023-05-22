import { GenerateTokenUseCase } from "@/app/modules/user/usecase"

jest.mock("../../../../src/app/modules/user/usecase/generate_token")

export const generateTokenUseCaseMock =
  GenerateTokenUseCase as jest.Mock<GenerateTokenUseCase>

export const mockGenerateTokenUseCase = () =>
  new generateTokenUseCaseMock() as jest.Mocked<GenerateTokenUseCase>
