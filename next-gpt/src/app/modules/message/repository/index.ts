import { ICreateMessageDTO, IUpdateMessageDTO } from "../DTO"
import { Message } from "../entity"

export interface IMessageRepository {
  create(data: ICreateMessageDTO): Promise<Message>
  update(data: IUpdateMessageDTO): Promise<Message>
  selectById(id: string): Promise<Message>
}
