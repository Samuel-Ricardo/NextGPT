import { NextResponse } from "next/server"
import {
  IAddMessageDTO,
  ICreateChatDTO,
  IGetMessagesDTO,
  ISelectAllChatsDTO,
  ISelectChatDTO,
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

  async select(data: ISelectChatDTO) {
    return await this.service.selectChat(data)
  }

  async selectMessages(data: IGetMessagesDTO) {
    const error = new NotFoundError()

    if (data.user_id !== data.token.sub)
      return NextResponse.json({ error }, { status: error.statusCode })

    const messages = await this.service.selectMessages(data)

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
