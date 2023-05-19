import { IsValidUserDTO } from "./is_valid"

export interface IValidUserDataDTO {
  user: IsValidUserDTO
  transform: TransformStream
  writter: WritableStreamDefaultWriter
}
