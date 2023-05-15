import { AuthCheckUseCase, UserNotFoundUseCase } from "../usecase"

export class UserLifeCycleService {
  constructor(
    private readonly authCheck: AuthCheckUseCase,
    private readonly notFound: UserNotFoundUseCase
  ) {}
}
