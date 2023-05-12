import { Context, MockContext, createMockContext } from "@prisma/test/context"
import { IChatRepository } from "@modules/chat/repository"
import { ChatPrismaRepository } from "@repository/prisma/chat"
import { prisma_mock } from "@prisma/test/mock"
import { CREATE_CHAT_DTO, VALID_CHAT } from "@config/const"
import { CreateChatUseCase } from "@/app/modules/chat/usecases/create"
import { resetMocks } from "@test/utils/mock"

describe("[Chat] - use-case => create: chat", () => {
  //jest.mock('../../../../../src/app/modules/chat/usecases/create')
  jest.mock("../../../../../src/app/repository/prisma/chat")

  let mockContext: MockContext
  let context: Context

  let repository: IChatRepository
  let usecase: CreateChatUseCase

  beforeEach(() => {
    resetMocks()

    mockContext = createMockContext()
    context = mockContext as unknown as Context
  })

  beforeAll(() => {
    repository = new ChatPrismaRepository(prisma_mock)
    usecase = new CreateChatUseCase(repository)
  })

  it("Should create chat sucsessfully", () => {
    prisma_mock.chat.create.mockResolvedValue({
      ...VALID_CHAT,
      id: VALID_CHAT.id!,
      remote_chat_id: VALID_CHAT.remote_chat_id!,
      created_at: VALID_CHAT.created_at!,
    })

    expect(usecase.execute(CREATE_CHAT_DTO)).resolves.toEqual({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })
  })
})
