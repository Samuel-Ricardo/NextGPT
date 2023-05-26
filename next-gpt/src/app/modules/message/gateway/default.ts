import { IGRCPGateway, IStreamable } from "@gateway"

export interface IMessageGateway extends IGRCPGateway, IStreamable {
  writteMessage(id: string): Promise<any>
}
