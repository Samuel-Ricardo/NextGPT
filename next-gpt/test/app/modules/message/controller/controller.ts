import { MessageController } from "@/app/modules/message/controller"
import { VALID_IMESSAGE, VALID_IMESSAGE_WITHOUT_CHAT } from "@/config/const"
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

  it("should be able to create a Message", async () => {
    service.createMessage.mockResolvedValue(VALID_IMESSAGE)

    const result = await controller.create(VALID_IMESSAGE_WITHOUT_CHAT)

    expect(result).toEqual(VALID_IMESSAGE)
    expect(service.createMessage).toHaveBeenCalledTimes(1)
  })
})
