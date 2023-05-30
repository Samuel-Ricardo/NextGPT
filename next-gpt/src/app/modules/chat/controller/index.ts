import { NextResponse } from "next/server"
import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
  ISelectAllChatsDTO,
} from "../DTO"
import { ChatService } from "../service"
import { NotFoundError } from "@/config/errors"
import { AUTH } from "@/middlewarePack"

export class ChatController {
  constructor(private service: ChatService) {}

  async create(data: ICreateChatDTO) {
    return await this.service.createChat(data)
  }

  async selectAll(data: ISelectAllChatsDTO) {
    return await this.service.selectAllChats(data)
  }

  async select(data: IGetMessagesDTO) {
    const error = new NotFoundError()
    if (data.chat_id !== data.token.sub)
      return NextResponse.json({ error }, { status: error.statusCode })

    const messages = await this.service.selectMessage(data)
    return new NextResponse(JSON.stringify({ messages }))
  }

  async append(data: IAddMessageDTO) {
    const response = await AUTH(data.request)
    if (response.break) return NextResponse.json({ error: response.result })

    const message = await this.service.appendMessage(data)
    return NextResponse.json({ message })
  }
}

export * from "./view"
