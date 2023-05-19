export class IError extends Error {
  statusCode: number

  constructor(message?: string | "Error", statusCode?: number) {
    super(message)

    this.statusCode = statusCode ? statusCode : 500
  }
}
