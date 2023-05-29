import { IMessageData } from "@/@types"

export interface IChatConverterDTO {
  id?: string
  user_id?: string
  messages?: IMessageData[]
  name?: string
  created_at?: Date
  remote_chat_id?: string
}
