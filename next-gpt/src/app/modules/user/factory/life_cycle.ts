import { UserLifeCycleController } from "../controller/lyfe_cycle"
import { UserLifeCycleService } from "../service/life_cycle"
import {
  AuthCheckUseCase,
  GenerateTokenUseCase,
  UserNotFoundUseCase,
} from "../usecase"

export const lifeCycleFactory = () => {
  const auth_check = new AuthCheckUseCase()
  const not_found = new UserNotFoundUseCase()
  const generate_token = new GenerateTokenUseCase()

  const service = new UserLifeCycleService(
    auth_check,
    not_found,
    generate_token
  )

  const controller = new UserLifeCycleController(service)

  return controller
}
