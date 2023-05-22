import { NextRequest } from "next/server"

export interface IAddMessageDTO {
  chat_id: string
  message: string
  request: NextRequest
}
