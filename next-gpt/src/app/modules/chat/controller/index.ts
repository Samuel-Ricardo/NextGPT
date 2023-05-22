import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
  ISelectAllChatsDTO,
} from "../DTO"
import { ChatService } from "../service"

export class ChatController {
  constructor(private service: ChatService) {}

  async create(data: ICreateChatDTO) {
    return await this.service.createChat(data)
  }

  async selectAll(data: ISelectAllChatsDTO) {
    return await this.service.selectAllChats(data)
  }

  async select(data: IGetMessagesDTO) {
    return await this.service.selectMessage(data)
  }

  async append(data: IAddMessageDTO) {
    return await this.service.appendMessage(data)
  }
}
