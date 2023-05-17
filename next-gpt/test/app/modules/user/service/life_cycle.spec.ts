import { UserLifeCycleService } from "@/app/modules/user/service/life_cycle"
import { NotFoundError, UnauthenticatedError } from "@/config/errors"
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

  it("should not be valid user if authCheck fails", async () => {
    authCheck.execute.mockReturnValueOnce(false)
    notFound.execute.mockReturnValueOnce(undefined)

    const { result, reason } = await life_cycle.isValidUser({
      token: {},
      user_id: "123",
    })

    expect(result).toBeFalsy()
    expect(reason).toBeInstanceOf(UnauthenticatedError)

    expect(authCheck.execute).toBeCalledTimes(1)
    expect(notFound.execute).toBeCalledTimes(0)
  })

  it("should not be valid user if not found", async () => {
    authCheck.execute.mockReturnValueOnce(true)
    notFound.execute.mockReturnValueOnce(new NotFoundError())

    const { result, reason } = await life_cycle.isValidUser({
      token: { sub: "123" },
      user_id: "123",
    })

    expect(result).toBeFalsy()
    expect(reason).toBeInstanceOf(NotFoundError)

    expect(authCheck.execute).toBeCalledTimes(1)
    expect(notFound.execute).toBeCalledTimes(1)
  })
})
