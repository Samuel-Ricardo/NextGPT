import { VALID_CHAT } from "@/config/const"
import { selectAllChatUseCase } from "@modules/chat/usecases/select_all"
import { Chat } from "@prisma/client"
import { prisma_mock } from "@prisma/test/mock"
import { ChatPrismaRepository } from "@repository/prisma/chat"
import { resetMocks } from "@test/utils/mock"

describe("[Chat] - use-case => select all: chat", () => {
  jest.mock("../../../../../src/app/repository/prisma/chat")

  const repositoryMock = ChatPrismaRepository as jest.Mock<ChatPrismaRepository>
  let repository: jest.Mocked<ChatPrismaRepository>

  let usecase: selectAllChatUseCase

  beforeEach(() => {
    resetMocks()

    repository = new repositoryMock(
      prisma_mock
    ) as jest.Mocked<ChatPrismaRepository>
    usecase = new selectAllChatUseCase(repository)
  })

  it("Should select all chats successfully", async () => {
    //jest.spyOn(repository, "selectAll").mockResolvedValue([VALID_CHAT])

    prisma_mock.chat.findMany.mockResolvedValue([VALID_CHAT as Chat])

    await expect(usecase.execute()).resolves.toEqual([
      {
        ...VALID_CHAT,
        remote_chat_id: undefined,
      },
    ])
  })
})
