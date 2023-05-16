import { AuthCheckUseCase } from "@/app/modules/user/usecase"
import { resetMocks } from "@test/utils/mock"
import { JWT } from "next-auth/jwt"

describe("[USECASE] - auth check (user)", () => {
  let check: AuthCheckUseCase

  beforeEach(() => {
    check = new AuthCheckUseCase()
  })

  it("Should return [true] if token is valid", async () => {
    const isValid = check.execute({ sub: "123" } as JWT)
    expect(isValid).toBe(true)
  })

  it("Should return [false] if token is null", async () => {
    const isValid = check.execute(null)
    expect(isValid).toBe(false)
  })
})
