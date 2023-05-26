export interface IGRCPGateway {
  readonly API_URL: string
  readonly client: any

  get(path: string, config?: any): Promise<any>
}
