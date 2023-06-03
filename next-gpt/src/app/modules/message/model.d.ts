export interface IMessage {
  id?: string
  chat_id: string
  content: string
  has_answered: boolean
  is_from_bot: boolean
  created_at: Date
  chat?: IChat
}
