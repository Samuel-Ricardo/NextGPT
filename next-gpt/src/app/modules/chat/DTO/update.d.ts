import { IUpdateMessageDTO } from "@modules/message/DTO/update"

export interface IUpdateChatDTO {
  id?: string
  remote_chat_id?: string
  created_at?: Date
  messages?: IUpdateMessageDTO[]
}
