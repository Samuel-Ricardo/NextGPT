import { SelectMessageUseCase } from "@/app/modules/chat/usecases/select_message"
import { prisma_mock } from "@/app/prisma/test/mock"
import { ChatPrismaRepository } from "@/app/repository/prisma/chat"
import { VALID_IMESSAGE, VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
import { Message } from "@prisma/client"
import { resetMocks } from "@test/utils/mock"

describe("[CHAT] - use-case => select: message from: chat", () => {
  jest.mock("../../../../../src/app/repository/prisma/chat")

  const repositoryMock = ChatPrismaRepository as jest.Mock<ChatPrismaRepository>
  let repository: jest.Mocked<ChatPrismaRepository>

  let select: SelectMessageUseCase

  beforeEach(() => {
    resetMocks()

    repository = new ChatPrismaRepository(
      prisma_mock
    ) as jest.Mocked<ChatPrismaRepository>
    select = new SelectMessageUseCase(repository)
  })

  it("Should select message by a chat successfully", async () => {})
})
