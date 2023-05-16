import { ErrorStreamResponse } from "@/config/errors"
import { IsValidUserDTO } from "../DTO"
import { UserLifeCycleService } from "../service/life_cycle"
import { response } from "@/utils/server"

export class UserLifeCycleController {
  constructor(private readonly service: UserLifeCycleService) {}

  async isValid(
    user: IsValidUserDTO,
    transform: TransformStream,
    writter: WritableStreamDefaultWriter
  ): Promise<Response> {
    const result = await this.service.isValidUser(user)

    if (result.reason)
      return ErrorStreamResponse({ error: result.reason, writter, transform })

    return response(transform, 200)
  }
}
