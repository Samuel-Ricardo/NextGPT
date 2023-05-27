import { Axios, AxiosRequestConfig } from "axios"
import { IGRCPGateway } from ".."
import { ENV } from "@config"
import { ISWRSupport } from "../support/swr"

export class GatewayGRCP implements IGRCPGateway, ISWRSupport {
  constructor(
    public readonly API_URL = ENV.API.URL(),
    protected readonly client = new Axios()
  ) {}

  async get(path: string, config?: AxiosRequestConfig) {
    return await this.client.get(`${this.API_URL}${path}`, config)
  }

  async fetcher(path: string) {
    const result = await this.get(path)
    return result.data
  }
}
