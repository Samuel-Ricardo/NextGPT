export class IError extends Error {
  constructor(
    message?: string | "Error",
    public readonly statusCode?: number | 401
  ) {
    super(message)
  }
}
