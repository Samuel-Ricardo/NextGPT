import { JWT } from "next-auth/jwt"

export class AuthCheckUseCase {
  execute(token?: JWT) {
    if (!token) return false

    if (!token.sub) return false

    return true
  }
}
