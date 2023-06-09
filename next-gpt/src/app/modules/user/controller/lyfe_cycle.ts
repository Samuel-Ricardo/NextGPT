import { ErrorStreamResponse } from "@/config/errors"
import { IValidUserDataDTO } from "../DTO"
import { UserLifeCycleService } from "../service/life_cycle"
import { response } from "@/utils/server"
import { IGenerateTokenDTO } from "../DTO"
import { NextResponse } from "next/server"

export class UserLifeCycleController {
  constructor(private readonly service: UserLifeCycleService) {}

  async isValid({ user, writter, transform }: IValidUserDataDTO) {
    const result = this.service.isValidUser(user)

    if (result.reason)
      return ErrorStreamResponse({ error: result.reason, writter, transform })

    return response(transform, 200)
  }

  async generateToken(user: IGenerateTokenDTO) {
    return NextResponse.json(await this.service.tokenFor(user))
  }
}
