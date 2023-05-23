import { GenerateTokenUseCase } from "@/app/modules/user/usecase"
import { ENV } from "@/config"
import { decode } from "next-auth/jwt"

describe("[USECASE] generate token => user", () => {
  let generateToken: GenerateTokenUseCase
  beforeEach(() => (generateToken = new GenerateTokenUseCase()))

  it("should return token when data is right", async () => {
    const { token } = await generateToken.excute({
      user: { sub: "123", name: "Samuel" },
      secret: ENV.NEXT_AUTH.SECRET(),
    })
    expect(token).not.toBeNull()
  })
})
