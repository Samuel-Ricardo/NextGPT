import { IGatewayHTTP } from ".."
import axios, { AxiosRequestConfig } from "axios"
import { ISWRSupport } from "../support/swr"

export class HTTPGateway implements IGatewayHTTP, ISWRSupport {
  constructor(
    public readonly API_URL = "",
    protected readonly client = axios
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
  async delete(path: string, config?: AxiosRequestConfig) {
    return await this.client.delete(`${this.API_URL}${path}`, config)
  }

  async fetcher(path: string) {
    const result = await axios.get(path)
    return result.data
  }
}
