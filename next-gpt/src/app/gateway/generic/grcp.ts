import { Axios, AxiosRequestConfig } from "axios"
import { IGRCPGateway } from ".."
import { ENV } from "@config"

export class GatewayGRCP implements IGRCPGateway {
  constructor(
    public readonly API_URL = ENV.API.URL(),
    protected readonly client = new Axios()
  ) {}

  async get(path: string, config?: AxiosRequestConfig) {
    return await this.client.get(`${this.API_URL}${path}`, config)
  }
}
