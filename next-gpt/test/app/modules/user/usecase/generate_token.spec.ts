import { GenerateTokenUseCase } from "@/app/modules/user/usecase"
import { ENV } from "@/config"
import { GENERATE_TOKEN_DATA } from "@/config/const"
import { decode } from "next-auth/jwt"

describe("[USECASE] generate token => user", () => {
  let generateToken: GenerateTokenUseCase
  beforeEach(() => (generateToken = new GenerateTokenUseCase()))

  it("should return token when data is right", async () => {
    const { token } = await generateToken.excute(GENERATE_TOKEN_DATA)
    expect(token).not.toBeNull()
  })

  it("should return a valid token", async () => {
    const { token } = await generateToken.excute(GENERATE_TOKEN_DATA)
    const decoded = await decode({ token, secret: GENERATE_TOKEN_DATA.secret })

    expect(decoded).not.toBeNull()
    expect(decoded?.sub).toBe(GENERATE_TOKEN_DATA.user.sub)
    expect(decoded?.name).toBe(GENERATE_TOKEN_DATA.user.name)
  })
})
