import { IMessage } from "./model"

interface IMessageData {
  id?: string
  chat_id?: string
  content?: string
  has_aswered?: boolean
  is_from_bot?: boolean
  created_at?: Date
}
