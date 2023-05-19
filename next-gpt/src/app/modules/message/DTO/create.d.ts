export interface ICreateMessageDTO {
  content: string
  chat_id: string
  has_answered: boolean | true
  is_from_bot: boolean | true

  chat_id: string
  remote_chat_id: string

  answered_message_id?: string
}
