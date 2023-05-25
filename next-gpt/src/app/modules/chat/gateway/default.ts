import { IGatewayHTTP } from "@gateway"

export interface IChatGateway extends IGatewayHTTP {
  create(message: string): Promise<any>
  getAll(): Promise<any>
}
