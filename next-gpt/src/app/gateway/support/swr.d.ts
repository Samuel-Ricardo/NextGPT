import { FetcherResponse } from "swr/_internal"

export interface ISWRSupport {
  fetcher: (...args: any) => FetcherResponse<any>
}
