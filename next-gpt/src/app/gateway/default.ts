import { ENV } from "@config"
import { IGatewayHTTP } from "."
import { Axios } from "axios"

export class HTTPGateway implements IGatewayHTTP {
  constructor(
    protected readonly API_URL = ENV.API.URL(),
    protected readonly client = new Axios()
  ) {}

  async get(path: string) {
    return await this.client.get(`${this.API_URL}${path}`)
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
