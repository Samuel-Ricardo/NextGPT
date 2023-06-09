import { IMessage } from "../message/model"

export interface IChat {
  id?: string
  user_id: string
  remote_chat_id?: string
  created_at: Date
  messages: IMessage[] | null
}
