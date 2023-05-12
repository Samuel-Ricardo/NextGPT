import { AppendMessageUseCase } from "@/app/modules/chat/usecases/append_message"
import { prisma_mock } from "@/app/prisma/test/mock"
import { ChatPrismaRepository } from "@/app/repository/prisma/chat"
import { resetMocks } from "@test/utils/mock"

describe("[CHAT] - use-case => add: message to: chat", () => {
  jest.mock("../../../../../src/app/repository/prisma/chat")

  const repositoryMock = ChatPrismaRepository as jest.Mock<ChatPrismaRepository>
  let repository: jest.Mocked<ChatPrismaRepository>

  let append: AppendMessageUseCase

  beforeEach(() => {
    resetMocks()

    repository = new repositoryMock(
      prisma_mock
    ) as jest.Mocked<ChatPrismaRepository>
    append = new AppendMessageUseCase(repository)
  })

  it("Should add message to a chat successfully", async () => {})
})
