import { UnauthenticatedError } from "@/config/errors"
import { IsValidUserDTO } from "../DTO"
import {
  AuthCheckUseCase,
  GenerateTokenUseCase,
  UserNotFoundUseCase,
} from "../usecase"
import { IGenerateTokenDTO } from "../DTO/generate_token"
import { ENV } from "@/config"

export class UserLifeCycleService {
  constructor(
    private readonly authCheck: AuthCheckUseCase,
    private readonly notFound: UserNotFoundUseCase,
    private readonly generateToken: GenerateTokenUseCase
  ) {}

  isValidUser({ token, user_id }: IsValidUserDTO) {
    if (!this.authCheck.execute(token))
      return { result: false, reason: new UnauthenticatedError() }

    const reason = this.notFound.execute({ token: token!, user_id })

    if (reason) return { result: false, reason }

    return { result: true }
  }

  async tokenFor(user: IGenerateTokenDTO) {
    return await this.generateToken.excute({
      user,
      secret: ENV.NEXT_AUTH.SECRET(),
    })
  }
}
