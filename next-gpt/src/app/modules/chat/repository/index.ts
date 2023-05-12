import { Message } from "@modules/message/entity"
import { IAddMessageDTO, ICreateChatDTO, IGetMessagesDTO } from "../DTO"
import { Chat } from "../entity"
import { IRepository } from "@repository/generic"

export interface IChatRepository extends IRepository<Chat> {
  create(data: ICreateChatDTO): Promise<Chat>
  selectAll(): Promise<Chat[]>
  selectMessage(data: IGetMessagesDTO): Promise<Message[]>
  addMessageTo(data: IAddMessageDTO): Promise<Message>
}
