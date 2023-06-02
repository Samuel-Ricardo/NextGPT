import { Message } from "@modules/message/entity"
import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
  ISelectAllChatsDTO,
  ISelectChatDTO,
} from "../DTO"
import { Chat } from "../entity"
import { IRepository } from "@repository/generic"

export interface IChatRepository extends IRepository<Chat> {
  create(data: ICreateChatDTO): Promise<Chat>
  selectAll(data: ISelectAllChatsDTO): Promise<Chat[]>
  selectById(data: ISelectChatDTO): Promise<Chat>
  selectMessages(data: IGetMessagesDTO): Promise<Message[]>
  addMessageTo(data: IAddMessageDTO): Promise<Message>
}
