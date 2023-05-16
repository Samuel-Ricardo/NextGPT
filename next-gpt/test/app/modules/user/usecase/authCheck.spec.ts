import { AuthCheckUseCase } from "@/app/modules/user/usecase"
import { resetMocks } from "@test/utils/mock"

describe("[USECASE] - auth check (user)", () => {
  let check: AuthCheckUseCase

  beforeEach(() => {
    check = new AuthCheckUseCase()
  })

  it("Should return [true] if token is valid", async () => {})
})
