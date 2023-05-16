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

export class NotFoundError extends IError {
  constructor(
    message?: string | "Data Not Found",
    public readonly statusCode?: number | 404
  ) {
    super(message)
  }
}

export const ErrorStreamResponse = ({
  error,
  writter,
  transform,
}: {
  error: Error
  writter: WritableStreamDefaultWriter
  transform: TransformStream
}) => {
  setTimeout(async () => {
    writeStream(writter, "error", error.message)
    await writter.close()
  })

  return error instanceof IError
    ? response(transform, error.statusCode)
    : response(transform, 500)
}
