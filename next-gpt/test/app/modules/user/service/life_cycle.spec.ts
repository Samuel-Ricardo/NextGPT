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

  it("should be valid user", async () => {
    authCheck.execute.mockReturnValueOnce(true)
    notFound.execute.mockReturnValueOnce(undefined)

    const { result, reason } = await life_cycle.isValidUser({
      token: { sub: "123" },
      user_id: "123",
    })

    expect(result).toBeTruthy()
    expect(reason).toBeUndefined()

    expect(authCheck.execute).toBeCalledTimes(1)
    expect(notFound.execute).toBeCalledTimes(1)
  })
})
