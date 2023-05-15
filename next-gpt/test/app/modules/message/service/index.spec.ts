import { message } from "@modules/message/converter"
import { MessageService } from "@modules/message/service"
import { VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
import {
  mockCreateMessageUseCase,
  mockSelectByIdWithChatUseCase,
  mockSelectMessageById,
} from "@test/mock/usecase/message"
import { resetMocks } from "@test/utils/mock"

describe("[service] => Message", () => {
  let create = mockCreateMessageUseCase()
  let selectById = mockSelectMessageById()
  let selectByIdWithChat = mockSelectByIdWithChatUseCase()

  let service

  beforeEach(() => {
    resetMocks()

    create = mockCreateMessageUseCase()
    selectById = mockSelectMessageById()
    selectByIdWithChat = mockSelectByIdWithChatUseCase()

    service = new MessageService(create, selectById, selectByIdWithChat)
  })

  it("should be able to create a Message", async () => {
    create.execute.mockResolvedValue(message(VALID_IMESSAGE_WITHOUT_CHAT))

    await expect(create.execute(VALID_IMESSAGE_WITHOUT_CHAT)).resolves.toEqual(
      VALID_IMESSAGE_WITHOUT_CHAT
    )
  })
})
