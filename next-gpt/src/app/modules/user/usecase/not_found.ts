import { NotFoundError } from "@/config/errors"
import { JWT } from "next-auth/jwt"

export class UserNotFoundUseCase {
  execute({
    token,
    user_id,
  }: {
    user_id: string
    token: JWT
  }): NotFoundError | void {
    if (user_id !== token.sub) return new NotFoundError("User Not Found")
  }
}
