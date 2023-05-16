import { UserLifeCycleController } from "../controller/lyfe_cycle"
import { UserLifeCycleService } from "../service/life_cycle"
import { AuthCheckUseCase, UserNotFoundUseCase } from "../usecase"

export const lyfeCycleFactory = () => {
  const auth_check = new AuthCheckUseCase()
  const not_found = new UserNotFoundUseCase()

  const service = new UserLifeCycleService(auth_check, not_found)

  const controller = new UserLifeCycleController(service)

  return controller
}
