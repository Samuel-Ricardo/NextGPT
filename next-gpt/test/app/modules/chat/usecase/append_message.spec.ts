import { AppendMessageUseCase } from "@/app/modules/chat/usecases/append_message"
import { prisma_mock } from "@/app/prisma/test/mock"
import { ChatPrismaRepository } from "@/app/repository/prisma/chat"
import { VALID_CHAT, VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
import { Chat, Message } from "@prisma/client"
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

  it("Should add message to a chat successfully", async () => {
    prisma_mock.chat.findUniqueOrThrow.mockResolvedValue(VALID_CHAT as Chat)
    prisma_mock.message.create.mockResolvedValue(
      VALID_IMESSAGE_WITHOUT_CHAT as Message
    )

    await expect(
      append.execute({ chat_id: VALID_CHAT.id!, message: "Hello World" })
    ).resolves.toEqual(VALID_IMESSAGE_WITHOUT_CHAT)
  })
})
