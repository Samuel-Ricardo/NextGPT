export interface ISetupStreamDTO {
  message: string
  user_id: string | "1"
  chat_id: string
  writter: WritableStreamDefaultWriter
}
