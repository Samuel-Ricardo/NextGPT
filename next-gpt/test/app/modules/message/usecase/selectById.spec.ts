import { VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
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

    expect(repository.selectById).toBeCalledTimes(1)
  })
})
