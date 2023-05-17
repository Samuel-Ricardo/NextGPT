import { UserLifeCycleController } from "@modules/user/controller/lyfe_cycle"
import { mockLifeCycleService } from "@test/mock/service/user/life_cycle"
import { resetMocks } from "@test/utils/mock"

describe("[Controller] - Life Cycle => User", () => {
  let service = mockLifeCycleService()
  let controller: UserLifeCycleController

  beforeEach(() => {
    resetMocks()

    service = mockLifeCycleService()
    controller = new UserLifeCycleController(service)
  })

  it("isValid", async () => {})
})
