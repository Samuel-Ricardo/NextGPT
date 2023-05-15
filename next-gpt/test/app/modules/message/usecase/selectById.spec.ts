import {
  VALID_CHAT,
  VALID_IMESSAGE,
  VALID_IMESSAGE_WITHOUT_CHAT,
} from "@/config/const"
import {
  SelectMessageByIdUseCase,
  SelectMessageByIdWithChatUseCase,
} from "@modules/message/usecase"
import { mockMessageRepository } from "@test/mock/repository"
import { resetMocks } from "@test/utils/mock"
import { PrismaMessageRepository } from "@repository/prisma/message"
import { message } from "@modules/message/converter"

describe("Select Message By ID usecases", () => {
  let repository: jest.Mocked<PrismaMessageRepository>

  let selectById: SelectMessageByIdUseCase
  let selectByIdWithChat: SelectMessageByIdWithChatUseCase

  beforeEach(() => {
    resetMocks()

    repository = mockMessageRepository()

    selectById = new SelectMessageByIdUseCase(repository)
    selectByIdWithChat = new SelectMessageByIdWithChatUseCase(repository)
  })

  it("should select message by id", async () => {
    repository.selectById.mockResolvedValue(
      message(VALID_IMESSAGE_WITHOUT_CHAT)
    )

    await expect(
      selectById.execute(VALID_IMESSAGE_WITHOUT_CHAT.id)
    ).resolves.toEqual(VALID_IMESSAGE_WITHOUT_CHAT)

    await expect(
      selectById.execute(VALID_IMESSAGE_WITHOUT_CHAT.id)
    ).resolves.not.toHaveProperty("chat")

    expect(repository.selectById).toBeCalledTimes(2)
  })

  it("should select message by id with chat", async () => {
    repository.selectByIdWithChat.mockResolvedValue(VALID_CHAT)

    const chat = await selectByIdWithChat.execute(VALID_IMESSAGE.id!)

    expect(chat).toEqual(VALID_CHAT)

    expect(chat).toHaveProperty("messages")

    expect(chat.messages).not.toBeNull()

    expect(repository.selectByIdWithChat).toBeCalledTimes(1)
  })
})
