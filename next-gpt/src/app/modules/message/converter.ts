import { IMessage } from "./model"

interface IMessageData {
  id?: string
  chat_id?: string
  content?: string
  has_aswered?: boolean
  is_from_bot?: boolean
  created_at?: Date
}

export function message(data: IMessageData): IMessage {
  return {
    id: data.id,
    chat_id: data.chat_id,
    content: data.content ? data.content : "",
    has_answered: data.has_aswered,
    is_from_bot: data.is_from_bot,
    created_at: data.created_at,
  } as IMessage
}
