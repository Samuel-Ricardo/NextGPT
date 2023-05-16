import { UserNotFoundUseCase } from "@/app/modules/user/usecase"
import { NotFoundError } from "@/config/errors"

describe("[USECASE] Not Found => user", () => {
  let notFound: UserNotFoundUseCase

  beforeEach(() => {
    notFound = new UserNotFoundUseCase()
  })

  it("should undefined if user found ", async () => {
    const error = notFound.execute({ token: { sub: "123" }, user_id: "123" })
    expect(error).toBeUndefined()
  })

  it("should return [NotFoundError] if user not found ", async () => {
    const error = notFound.execute({ token: { sub: "123" }, user_id: "456" })
    expect(error).toBeInstanceOf(NotFoundError)
  })
})
