import { JWT } from "next-auth/jwt"

export interface IMessageStreamDTO {
  transform: TransformStream
  writter: WritableStreamDefaultWriter
  token: JWT
}
