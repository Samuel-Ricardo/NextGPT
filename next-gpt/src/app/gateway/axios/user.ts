import { LOGOUT_URL } from "@config/routes"
import { HTTPGateway } from ".."
import { IUserGateway } from "@modules/user/gateway"
import { AxiosResponse } from "axios"

export class AxiosUserGateway extends HTTPGateway implements IUserGateway {
  async logout(urlParams: string) {
    return (await this.get(LOGOUT_URL(urlParams))) as AxiosResponse<{
      url: string
    }>
  }
}
