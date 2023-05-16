import { UserNotFoundUseCase } from "@/app/modules/user/usecase"

describe("[USECASE] Not Found => user", () => {
  let notFound: UserNotFoundUseCase

  beforeEach(() => {
    notFound = new UserNotFoundUseCase()
  })

  it("should undefined if user found ", async () => {
    const error = notFound.execute({ token: { sub: "123" }, user_id: "123" })
    expect(error).toBeUndefined()
  })
})
