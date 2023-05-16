import { JWT } from "next-auth/jwt"

export interface IMessageStreamDTO {
  id: string
  transform: TransformStream
  writter: WritableStreamDefaultWriter
}
