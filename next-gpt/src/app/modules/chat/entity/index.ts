import { IMessage } from "../../message/model"
import { IChat } from "../model"

export class Chat {
  id?: string
  remote_chat_id?: string
  created_at!: Date
  messages!: IMessage[] | null

  constructor({ id, remote_chat_id, created_at, messages }: IChat) {
    return Object.assign(this, { id, remote_chat_id, created_at, messages })
  }

  static from({ id, remote_chat_id, created_at, messages }: IChat) {
    return new Chat({ id, remote_chat_id, created_at, messages })
  }
}
