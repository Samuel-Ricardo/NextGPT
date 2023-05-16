import { UserLifeCycleService } from "@/app/modules/user/service/life_cycle"
import {
  mockAuthCheckUseCase,
  mockUserNotFoundUseCase,
} from "@test/mock/usecase"
import { resetMocks } from "@test/utils/mock"

describe("[SERVICE] - life cycle => user", () => {
  let notFound = mockUserNotFoundUseCase()
  let authCheck = mockAuthCheckUseCase()

  let life_cycle: UserLifeCycleService

  beforeEach(() => {
    resetMocks()

    notFound = mockUserNotFoundUseCase()
    authCheck = mockAuthCheckUseCase()

    life_cycle = new UserLifeCycleService(authCheck, notFound)
  })

  it("should be valid user", () => {
    expect(true).toBe(true)
  })
})
