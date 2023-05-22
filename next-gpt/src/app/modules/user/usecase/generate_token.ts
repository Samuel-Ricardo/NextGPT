import { encode } from "next-auth/jwt"
import { IGenerateTokenDTO } from "../DTO"

export class GenerateTokenUseCase {
  async excute({ user, secret }: { user: IGenerateTokenDTO; secret: string }) {
    return {
      token: await encode({
        secret,
        token: { ...user },
        maxAge: 60 * 60 * 24 * 30,
      }),
    }
  }
}
