import {
  AppendMessageUseCase,
  CreateChatUseCase,
  SelectMessageUseCase,
  selectAllChatUseCase,
} from "@modules/chat/usecases"
import { VALID_CHAT } from "@/config/const"
import { ChatService } from "@modules/chat/service"
import { resetMocks } from "@test/utils/mock"

describe("Service -> Chat", () => {
  jest.mock("../../../../../src/app/modules/chat/usecases/index")

  const createMock = CreateChatUseCase as jest.Mock<CreateChatUseCase>
  const selectAllMock = selectAllChatUseCase as jest.Mock<selectAllChatUseCase>
  const selectMock = SelectMessageUseCase as jest.Mock<SelectMessageUseCase>
  const appendMock = AppendMessageUseCase as jest.Mock<AppendMessageUseCase>

  let create: jest.Mocked<CreateChatUseCase>
  let selectAll: jest.Mocked<selectAllChatUseCase>
  let select: jest.Mocked<SelectMessageUseCase>
  let append: jest.Mocked<AppendMessageUseCase>

  let service: ChatService

  beforeEach(() => {
    resetMocks()

    create = new createMock() as jest.Mocked<CreateChatUseCase>
    selectAll = new selectAllMock() as jest.Mocked<selectAllChatUseCase>
    select = new selectMock() as jest.Mocked<SelectMessageUseCase>
    append = new appendMock() as jest.Mocked<AppendMessageUseCase>

    service = new ChatService(create, selectAll, select, append)
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
