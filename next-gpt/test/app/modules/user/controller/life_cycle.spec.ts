import { UnauthenticatedError } from "@/config/errors"
import { UserLifeCycleController } from "@modules/user/controller/lyfe_cycle"
import { mockLifeCycleService } from "@test/mock/service/user/life_cycle"
import { resetMocks } from "@test/utils/mock"
import { TransformStream, WritableStreamDefaultWriter } from "stream/web"
import "isomorphic-fetch"

describe("[Controller] - Life Cycle => User", () => {
  let service = mockLifeCycleService()
  let controller: UserLifeCycleController

  let transform: TransformStream
  let writter: WritableStreamDefaultWriter

  beforeEach(() => {
    resetMocks()

    transform = new TransformStream()
    writter = transform.writable.getWriter()

    service = mockLifeCycleService()
    controller = new UserLifeCycleController(service)
  })

  it("Should return response with status code 200 when user is valid", async () => {
    service.isValidUser.mockReturnValue({ result: true })

    const result = await controller.isValid(
      { token: { sub: "123" }, user_id: "123" },
      transform,
      writter
    )

    expect(result.status).toBe(200)
    expect(service.isValidUser).toBeCalledTimes(1)
  })

  it("Should return response with status code 401 when user is not authenticated", async () => {
    service.isValidUser.mockReturnValue({
      result: false,
      reason: new UnauthenticatedError(),
    })

    const result = await controller.isValid(
      { token: null, user_id: "123" },
      transform,
      writter
    )

    expect(service.isValidUser).toBeCalledTimes(1)
    expect(service.isValidUser({ token: null, user_id: "123" })).toEqual({
      result: false,
      reason: new UnauthenticatedError(),
    })
    expect(result.status).toBe(401)
  })
})
