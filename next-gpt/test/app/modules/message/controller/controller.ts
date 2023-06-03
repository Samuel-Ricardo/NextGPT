import { MessageController } from "@/app/modules/message/controller"
import {
  VALID_CHAT,
  VALID_IMESSAGE,
  VALID_IMESSAGE_WITHOUT_CHAT,
} from "@/config/const"
import { Message } from "@modules/message/entity"
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
    service.createMessage.mockResolvedValue(VALID_IMESSAGE as Message)

    const result = await controller.create({
      ...VALID_IMESSAGE_WITHOUT_CHAT,
      remote_chat_id: "1",
    })

    expect(result).toEqual(VALID_IMESSAGE)
    expect(service.createMessage).toHaveBeenCalledTimes(1)
  })

  it("should be able to slect a Messages with ID", async () => {
    service.selectMessageById.mockResolvedValue(VALID_IMESSAGE as Message)

    const result = await controller.selectById(VALID_IMESSAGE.id!)

    expect(result).toEqual(VALID_IMESSAGE)
    expect(service.selectMessageById).toHaveBeenCalledTimes(1)
  })

  it("Should be able to a Message by ID with the Chat data", async () => {
    service.selectMessageByIdWithChat.mockResolvedValue(VALID_CHAT)

    const result = await controller.selectByIdWithChat(VALID_IMESSAGE.id!)

    expect(result).toEqual(VALID_CHAT)
    expect(result).toHaveProperty("messages")

    expect(service.selectMessageByIdWithChat).toHaveBeenCalledTimes(1)
  })
})
