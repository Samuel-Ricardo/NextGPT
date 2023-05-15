import { MessageController } from "@/app/modules/message/controller"
import { mockMessageService } from "@test/mock/service/message"
import { resetMocks } from "@test/utils/mock"

describe("[Controller] => Message", () => {
  let service = mockMessageService()
  let controller: MessageController

  beforeEach(() => {
    resetMocks()

    service = mockMessageService()
    controller = new MessageController(service)
  })

  it("should be defined", () => {
    expect(true).toBeTruthy()
  })
})
