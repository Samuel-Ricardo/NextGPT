import { IMessage } from "@modules/message/model"
import { IAddMessageDTO, ICreateChatDTO, IGetMessagesDTO } from "../DTO"
import { IChat } from "../model"

export interface IChatRepository {
  create(data: ICreateChatDTO): Promise<IChat>
  selectAll(): Promise<IChat[]>
  getMessages(data: IGetMessagesDTO): Promise<IMessage[]>
  addMessageTo(data: IAddMessageDTO): Promise<IMessage>
}
