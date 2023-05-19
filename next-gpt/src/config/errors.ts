import { IError } from "@Types"
import { response, writeStream } from "@/utils/server"

export class UnauthenticatedError extends IError {
  constructor(message?: string | "User Unauthenticated", statusCode = 401) {
    super(message, statusCode)
  }
}

export class NotFoundError extends IError {
  constructor(message?: string | "Data Not Found", statusCode = 404) {
    super(message, statusCode)
  }
}

export class AlredyAnsweredMessageError extends IError {
  constructor(message?: string | "Message Already Answered", statusCode = 403) {
    super(message, statusCode)
  }
}

export class MessageFromBotError extends IError {
  constructor(message?: string | "Message From Bot", statusCode = 403) {
    super(message, statusCode)
  }
}

export class InvalidMessageError extends IError {
  constructor(message?: string | "Invalid Message", statusCode = 403) {
    super(message, statusCode)
  }
}

export class NoMessageReceivedError extends IError {
  constructor(
    message?: string | "No Messsage Received From This Chat",
    statusCode = 404
  ) {
    super(message, statusCode)
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
    writeStream(writter, "error", error)
    await writter.close()
  }, 2000)

  return error instanceof IError
    ? response(transform, error.statusCode!)
    : response(transform, 500)
}
