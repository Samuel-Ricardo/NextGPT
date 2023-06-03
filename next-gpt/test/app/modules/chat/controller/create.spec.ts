import { ChatController } from "@/app/modules/chat/controller"
import { ChatService } from "@modules/chat/service"
import {
  CREATE_CHAT_DTO,
  VALID_CHAT,
  VALID_IMESSAGE_WITHOUT_CHAT,
} from "@/config/const"
import { resetMocks } from "@test/utils/mock"
import { NextRequest } from "next/server"
import { ENV } from "@/config"
import { IMessage } from "@/app/modules/message/model"

jest.mock("../../../../../src/middlewarePack/index", () => ({
  __esModule: true, // this property makes it work
  AUTH: jest.fn(),
}))

import { AUTH } from "@/middlewarePack"

describe("Controller => Chat", () => {
  jest.mock("../../../../../src/app/modules/chat/service/index")
  jest.mock("next/server")

  let serviceMock = ChatService as jest.Mock<ChatService>
  let service: jest.Mocked<ChatService>
  let controller: ChatController

  let requestMock = NextRequest as jest.Mock<NextRequest>
  let request: jest.Mocked<NextRequest>

  beforeEach(() => {
    resetMocks()

    service = new serviceMock() as jest.Mocked<ChatService>
    controller = new ChatController(service)

    request = new requestMock(ENV.API.URL()) as jest.Mocked<NextRequest>
  })

  it("Should create a Chat successfully", async () => {
    jest.spyOn(service, "createChat").mockResolvedValue({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })

    await expect(controller.create(CREATE_CHAT_DTO)).resolves.toStrictEqual({
      ...VALID_CHAT,
      remote_chat_id: undefined,
    })

    expect(service.createChat).toBeCalledTimes(1)
  })

  it("Should select all Chats successfully", async () => {
    jest.spyOn(service, "selectAllChats").mockResolvedValue([VALID_CHAT])

    await expect(
      controller.selectAll({ user_id: CREATE_CHAT_DTO.user_id })
    ).resolves.toStrictEqual([VALID_CHAT])

    expect(service.selectAllChats).toBeCalledTimes(1)
  })

  it("Should select a Message successfully", async () => {
    jest
      .spyOn(service, "selectMessages")
      .mockResolvedValue([VALID_IMESSAGE_WITHOUT_CHAT])

    const result = await controller.selectMessages({
      chat_id: VALID_CHAT.id!,
      user_id: CREATE_CHAT_DTO.user_id,
      token: { sub: CREATE_CHAT_DTO.user_id },
    })
    const data: { messages: IMessage[] } = await result.json()

    data.messages[0].created_at = new Date(data.messages[0].created_at)

    expect(data).toEqual({ messages: [{ ...VALID_IMESSAGE_WITHOUT_CHAT }] })
    expect(data.messages.length).toBe(1)
    expect(data.messages[0]).toHaveProperty("id")
    expect(service.selectMessages).toBeCalledTimes(1)
  })

  it("Should append a Message successfully", async () => {
    jest
      .spyOn(service, "appendMessage")
      .mockResolvedValue(VALID_IMESSAGE_WITHOUT_CHAT)

    AUTH.mockResolvedValue({ break: false, result: { sub: "123" } })

    const result = await controller.append({
      chat_id: VALID_CHAT.id!,
      message: "Hello World",
      request,
    })
    const body = await result.json()

    body.message.created_at = new Date(body.message.created_at)

    console.log({ CYCLE: body })

    expect(AUTH).toBeCalledTimes(1)
    expect(AUTH()).resolves.toStrictEqual({
      break: false,
      result: { sub: "123" },
    })
    expect(service.appendMessage).toBeCalledTimes(1)

    expect(body).toEqual({ message: VALID_IMESSAGE_WITHOUT_CHAT })
  })
})
