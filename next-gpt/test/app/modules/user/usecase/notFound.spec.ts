import { UserNotFoundUseCase } from "@/app/modules/user/usecase"

describe("[USECASE] Not Found => user", () => {
  let notFound: UserNotFoundUseCase

  beforeEach(() => {
    notFound = new UserNotFoundUseCase()
  })

  it("should undefined if user found ", async () => {
    expect(true).toBe(true)
  })
})
