import { MessageService } from "@/app/modules/message/service"

jest.mock("../../../src/app/modules/message/service/index")

export const messageServiceMock = MessageService as jest.Mock<MessageService>

export const mockMessageService = () =>
  new messageServiceMock() as jest.Mocked<MessageService>
