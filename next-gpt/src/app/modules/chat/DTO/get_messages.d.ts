import { JWT } from "next-auth/jwt"

export interface IGetMessagesDTO {
  token: JWT
  chat_id: string
}
