import { SelectChatByIdUseCase } from "@/app/modules/chat/usecases"
import { mockChatRepository } from "@test/mock/repository"
import { resetMocks } from "@test/utils/mock"
import { VALID_CHAT } from "@config/const"
import { Chat } from "@modules/chat/entity"

describe("[USECASE] Select: Chat", () => {
  let select: SelectChatByIdUseCase
  let repository = mockChatRepository()

  beforeEach(() => {
    resetMocks()

    repository = mockChatRepository()
    select = new SelectChatByIdUseCase(repository)
  })

  it("should select chat", async () => {
    repository.selectById.mockResolvedValue(VALID_CHAT)

    const chat = await select.execute({ chat_id: "1" })

    expect(chat).toEqual(VALID_CHAT)
    expect(chat).toBeInstanceOf(Chat)
    expect(chat).toHaveProperty("id")
  })
})
