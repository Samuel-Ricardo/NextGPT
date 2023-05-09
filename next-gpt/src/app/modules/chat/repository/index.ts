import { Message } from "@modules/message/entity"
import { IAddMessageDTO, ICreateChatDTO, IGetMessagesDTO } from "../DTO"
import { Chat } from "../entity"

export interface IChatRepository {
  create(data: ICreateChatDTO): Promise<Chat>
  selectAll(): Promise<Chat[]>
  getMessages(data: IGetMessagesDTO): Promise<Message[]>
  addMessageTo(data: IAddMessageDTO): Promise<Message>
}
