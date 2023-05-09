import { Chat } from "@modules/chat/entity"
import { IMessage } from "../model"

export class Message {
  id?: string
  chat_id!: string
  content!: string
  has_answered!: boolean
  is_from_bot!: boolean
  created_at!: Date
  chat!: Chat

  constructor(IMessage: IMessage) {
    Object.assign(this, IMessage)
  }

  static from(IMessage: IMessage) {
    return new Message(IMessage)
  }
}
