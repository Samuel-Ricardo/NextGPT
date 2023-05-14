export interface ICreateMessageDTO {
  content: string
  chat_id: string
  has_answered: boolean | true
  is_from_bot: boolean | true
}
