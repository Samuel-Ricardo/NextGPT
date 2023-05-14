import { IUpdateChatDTO } from "../../chat/DTO/update"

export interface IUpdateMessageDTO {
  id?: string
  chat_id?: string
  content?: string
  has_answered?: boolean
  is_from_bot?: boolean
  created_at?: Date
  chat?: IUpdateChatDTO
}
