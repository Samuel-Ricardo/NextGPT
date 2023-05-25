import { ENV } from "@config"
import { IGatewayHTTP } from "."

export class HTTPGateway implements IGatewayHTTP {
  API_URL: string

  constructor(API_URL: string = ENV.API.URL()) {
    this.API_URL = API_URL
  }
  get(path: string): Promise<any> {
    throw new Error("Method not implemented.")
  }
  post(path: string, body: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  put(path: string, body: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  delete(path: string): Promise<any> {
    throw new Error("Method not implemented.")
  }
}
