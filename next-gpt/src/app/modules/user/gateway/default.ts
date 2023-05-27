import { IGatewayHTTP } from "@gateway"

export interface IUserGateway extends IGatewayHTTP {
  logout(urlParams: string): Promise<any>
}
