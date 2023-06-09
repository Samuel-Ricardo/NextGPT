import { IAppendMessagesBody } from "@Types/api/chat"
import { IGatewayHTTP } from "@gateway"

export interface IChatGateway extends IGatewayHTTP {
  create(message: string): Promise<any>
  getAll(): Promise<any>
  getMessages(id: string): Promise<any>
  appendMessage(id: string, { message }: IAppendMessagesBody): Promise<any>
}
