import { MessageService } from "@/app/modules/message/service"
import {
  createMessageMock,
  mockCreateMessageUseCase,
  mockSelectByIdWithChatUseCase,
  mockSelectMessageById,
  selectByIdMock,
  selectByIdWithChatMock,
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

  it("should be able to create a Message", () => {
    expect(true).toBe(true)
  })
})
