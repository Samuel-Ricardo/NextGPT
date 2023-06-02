import { JWT } from "next-auth/jwt"

export interface IGetMessagesDTO {
  token: JWT
  user_id: string
  chat_id: string
}
