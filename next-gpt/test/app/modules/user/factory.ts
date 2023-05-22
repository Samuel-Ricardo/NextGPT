import { UserLifeCycleController } from "@modules/user/controller/lyfe_cycle"
import { lifeCycleFactory } from "@modules/user/factory/life_cycle"

describe("[FACTORY] life_cycle => User", () => {
  it("Should create a [User Life Cycle] controller instance", () => {
    expect(lifeCycleFactory()).toBeInstanceOf(UserLifeCycleController)
  })
})
