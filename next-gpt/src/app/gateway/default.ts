import { ENV } from "@config"
import { IGatewayHTTP } from "."
import { Axios, AxiosRequestConfig } from "axios"

export class HTTPGateway implements IGatewayHTTP {
  constructor(
    public readonly API_URL = ENV.API.URL(),
    protected readonly client = new Axios()
  ) {}

  async get(path: string, config?: AxiosRequestConfig) {
    return await this.client.get(`${this.API_URL}${path}`, config)
  }
  async post(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.post(`${this.API_URL}${path}`, body, config)
  }
  async put(path: string, body: any, config?: AxiosRequestConfig) {
    return await this.client.put(`${this.API_URL}${path}`, body, config)
  }
  delete(path: string, config?: AxiosRequestConfig): Promise<any> {
    throw new Error("Method not implemented.")
  }
}
