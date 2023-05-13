import { ChatController } from "@/app/modules/chat/controller"
import { ChatService } from "@modules/chat/service"
import { VALID_CHAT, VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
import { resetMocks } from "@test/utils/mock"

describe("Controller => Chat", () => {
  jest.mock("../../../../../src/app/modules/chat/service/index")

  let serviceMock = ChatService as jest.Mock<ChatService>
  let service: jest.Mocked<ChatService>
  let controller: ChatController

  beforeEach(() => {
    resetMocks()

    service = new serviceMock() as jest.Mocked<ChatService>
    controller = new ChatController(service)
  })

  it("Should create a Chat successfully", async () => {
    jest.spyOn(service, "createChat").mockResolvedValue({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })

    await expect(
      controller.create({ message: "Hello World" })
    ).resolves.toStrictEqual({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })

    expect(service.createChat).toBeCalledTimes(1)
  })

  it("Should select all Chats successfully", async () => {
    jest.spyOn(service, "selectAllChats").mockResolvedValue([VALID_CHAT])

    await expect(controller.selectAll()).resolves.toStrictEqual([VALID_CHAT])

    expect(service.selectAllChats).toBeCalledTimes(1)
  })
})
