import { UnauthenticatedError } from "@/config/errors"
import { IsValidUserDTO } from "../DTO"
import { AuthCheckUseCase, UserNotFoundUseCase } from "../usecase"

export class UserLifeCycleService {
  constructor(
    private readonly authCheck: AuthCheckUseCase,
    private readonly notFound: UserNotFoundUseCase
  ) {}

  isValidUser({ token, user_id }: IsValidUserDTO) {
    if (!this.authCheck.execute(token))
      return { result: false, reason: new UnauthenticatedError() }

    const reason = this.notFound.execute({ token: token!, user_id })

    if (reason) return { result: false, reason }

    return { result: true }
  }
}
