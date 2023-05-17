import { UserLifeCycleController } from "@modules/user/controller/lyfe_cycle"
import { mockLifeCycleService } from "@test/mock/service/user/life_cycle"
import { resetMocks } from "@test/utils/mock"

describe("[Controller] - Life Cycle => User", () => {
  let service = mockLifeCycleService()
  let controller: UserLifeCycleController

  beforeEach(() => {
    resetMocks()

    service = mockLifeCycleService()
    controller = new UserLifeCycleController(service)
  })

  it("Should return response with status code 200 when user is valid", async () => {
    service.isValidUser.mockResolvedValue({ result: true })

    const transform = new TransformStream()
    const writter = transform.writable.getWriter()

    const result = await controller.isValid(
      { token: { sub: "123" }, user_id: "123" },
      transform,
      writter
    )

    const data = await result.json()

    console.log({ data })

    expect(result.status).toBe(200)
  })
})
