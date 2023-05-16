import { IError } from "@/@types"
import { response, writeStream } from "@/utils/server"

export class UnauthenticatedError extends IError {
  constructor(
    message?: string | "User Unauthenticated",
    public readonly statusCode?: number | 401
  ) {
    super(message)
  }
}
