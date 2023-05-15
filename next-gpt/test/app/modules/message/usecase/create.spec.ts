import { message } from "@modules/message/converter"
import { VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
import { CreateMessageUseCase } from "@modules/message/usecase/create"
import { PrismaMessageRepository } from "@repository/prisma/message"
import { mockMessageRepository } from "@test/mock/repository"
import { resetMocks } from "@test/utils/mock"

describe("[USECASE] => Create Message", () => {
  let repository: jest.Mocked<PrismaMessageRepository>
  let create: CreateMessageUseCase

  beforeEach(() => {
    resetMocks()

    repository = mockMessageRepository()
    create = new CreateMessageUseCase(repository)
  })

  it("should be able to create a message", async () => {
    repository.create.mockResolvedValue(message(VALID_IMESSAGE_WITHOUT_CHAT))

    const _message = await create.execute(VALID_IMESSAGE_WITHOUT_CHAT)

    expect(_message).toEqual(VALID_IMESSAGE_WITHOUT_CHAT)
    expect(repository.create).toHaveBeenCalledTimes(1)
  })
})
