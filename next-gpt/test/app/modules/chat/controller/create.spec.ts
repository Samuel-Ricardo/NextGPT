import { ChatController } from "@/app/modules/chat/controller"
import { ChatService } from "@modules/chat/service"
import { resetMocks } from "../../../../utils/mock"

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

  it("Should create a Chat successfully", async () => {})
})
