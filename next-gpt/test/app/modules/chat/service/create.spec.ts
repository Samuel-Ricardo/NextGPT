import { CreateChatUseCase } from "@modules/chat/usecases/create"
import { VALID_CHAT } from "@/config/const"
import { ChatService } from "@modules/chat/service"

describe("Service -> Chat", () => {
  jest.mock("../../../../../src/app/modules/chat/usecases/create")

  const createMock = CreateChatUseCase as jest.Mock<CreateChatUseCase>
  let create: jest.Mocked<CreateChatUseCase>
  let service: ChatService

  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
    jest.restoreAllMocks()

    create = new createMock() as jest.Mocked<CreateChatUseCase>
    service = new ChatService(create)
  })

  it("Should create a Chat successfully", async () => {
    jest.spyOn(create, "execute").mockResolvedValue({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })

    await expect(
      service.createChat({ message: "Hello World" })
    ).resolves.toStrictEqual({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })
  })
})
