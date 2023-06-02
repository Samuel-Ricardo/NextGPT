import { ENV } from "@config"
import { AxiosChatGateway, AxiosMessageGateway, AxiosUserGateway } from "."
import axios from "axios"

export function axiosChatGatewayFactory() {
  return new AxiosChatGateway(ENV.API.URL(), axios)
}

export function axiosMessageGatewayFactory() {
  return new AxiosMessageGateway(ENV.API.URL(), axios)
}

export function axiosUserGatewayFactory() {
  return new AxiosUserGateway("", axios)
}
